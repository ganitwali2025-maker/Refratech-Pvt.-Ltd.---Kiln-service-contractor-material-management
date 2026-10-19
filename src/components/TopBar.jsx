import { useState } from 'react'
import Icon from './Icon.jsx'

export default function TopBar({ onOpenMenu, isLoggedOut, onToggleLogout }) {
  const [showProfile, setShowProfile] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  return (
    <>
      <header className="topbar">
        {/* Left area: Mobile menu button */}
        <div className="topbar-left">
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={onOpenMenu}
            aria-label="Toggle navigation menu"
          >
            <Icon name="menu" />
          </button>
        </div>

        {/* Right side area: Member Symbol, Logout */}
        <div className="topbar-right">

          {/* 3. Member Symbol & Profile */}
          <div className="member-wrapper">
            <button
              type="button"
              className="member-btn"
              onClick={() => setShowProfile((p) => !p)}
              title="Member Profile (Lokesh Rajak)"
              aria-label="Member Profile"
            >
              <div className="member-avatar">
                <Icon name="user" />
                <span className="online-indicator" title="Active Member" />
              </div>
              <div className="member-info">
                <span className="member-name">Lokesh Rajak</span>
                <span className="member-role">Active Member</span>
              </div>
            </button>

            {/* Profile Dropdown / Modal */}
            {showProfile && (
              <div className="profile-dropdown">
                <div className="profile-dropdown-header">
                  <div className="profile-avatar-lg">
                    <Icon name="user" />
                  </div>
                  <div>
                    <h3 className="profile-name">Lokesh Rajak</h3>
                    <span className="profile-badge">Member • Admin</span>
                  </div>
                  <button
                    type="button"
                    className="close-dropdown-btn"
                    onClick={() => setShowProfile(false)}
                    aria-label="Close profile"
                  >
                    <Icon name="x" />
                  </button>
                </div>
                <div className="profile-dropdown-body">
                  <div className="profile-row">
                    <span className="p-label">Company</span>
                    <span className="p-value">Refratech Pvt. Ltd. Raipur</span>
                  </div>
                  <div className="profile-row">
                    <span className="p-label">Role</span>
                    <span className="p-value">Kiln Service & Materials Admin</span>
                  </div>
                  <div className="profile-row">
                    <span className="p-label">Member ID</span>
                    <span className="p-value">REF-MEM-2026</span>
                  </div>
                  <div className="profile-row">
                    <span className="p-label">Status</span>
                    <span className="p-value status-online">● Online / Logged In</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Logout Button */}
          <button
            type="button"
            className="topbar-btn logout-btn"
            onClick={() => setShowLogoutConfirm(true)}
            title="Log out of session"
          >
            <Icon name="logout" />
            <span className="btn-label">Logout</span>
          </button>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-backdrop" onClick={() => setShowLogoutConfirm(false)}>
          <div className="logout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="logout-modal-icon">
              <Icon name="logout" />
            </div>
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out, <b>Lokesh Rajak</b>?</p>
            <div className="modal-actions">
              <button
                type="button"
                className="btn ghost"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn logout-confirm-btn"
                onClick={() => {
                  setShowLogoutConfirm(false)
                  onToggleLogout(true)
                }}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logged Out Screen Overlay */}
      {isLoggedOut && (
        <div className="logged-out-overlay">
          <div className="logged-out-card">
            <div className="logged-out-icon">
              <Icon name="user" />
            </div>
            <h2>You are logged out</h2>
            <p>Session ended for <b>Lokesh Rajak</b> (Refratech Pvt. Ltd. Raipur).</p>
            <button
              type="button"
              className="btn login-btn"
              onClick={() => onToggleLogout(false)}
            >
              <Icon name="user" />
              <span>Log in as Lokesh Rajak</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
