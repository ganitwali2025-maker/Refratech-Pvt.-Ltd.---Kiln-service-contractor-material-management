import { useState, useRef } from 'react'
import Icon from './Icon.jsx'

export default function DateRefreshBar() {
  const dateInputRef = useRef(null)
  const todayStr = () => new Date().toISOString().split('T')[0]
  const [selectedDate, setSelectedDate] = useState(todayStr)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Safe date parsing and formatting
  const [y, m, d] = (selectedDate || todayStr()).split('-').map(Number)
  const dateObj = new Date(y, (m || 1) - 1, d || 1)
  const weekDay = dateObj.toLocaleDateString('en-US', { weekday: 'long' })
  const day = dateObj.getDate()
  const monthName = dateObj.toLocaleDateString('en-US', { month: 'long' })
  const year = dateObj.getFullYear()

  const handleOpenDatePicker = () => {
    try {
      dateInputRef.current?.showPicker()
    } catch {
      dateInputRef.current?.focus()
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
      window.location.reload()
    }, 450)
  }

  return (
    <div className="date-refresh-bar">
      {/* Date Picker Widget with proper spacing */}
      <div
        className="date-widget date-selectable"
        onClick={handleOpenDatePicker}
        title="Click to select a date"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleOpenDatePicker()
          }
        }}
      >
        <input
          ref={dateInputRef}
          type="date"
          className="date-picker-hidden-input"
          value={selectedDate}
          onChange={(e) => {
            if (e.target.value) setSelectedDate(e.target.value)
          }}
          tabIndex={-1}
        />
        <div className="date-widget-icon">
          <Icon name="calendar" />
        </div>
        <div className="date-widget-details">
          <div className="date-widget-primary">
            <span className="weekday-text">{weekDay},</span>
            <span className="day-text">{day}</span>
            <span className="month-text">{monthName}</span>
            <span className="year-text">{year}</span>
            <span className="date-dropdown-arrow" aria-hidden="true">▾</span>
          </div>
        </div>
      </div>

      {/* Refresh Button */}
      <button
        type="button"
        className={`refresh-btn ${isRefreshing ? 'refreshing' : ''}`}
        onClick={handleRefresh}
        title="Refresh data"
      >
        <Icon name="refresh" />
        <span>Refresh</span>
      </button>
    </div>
  )
}
