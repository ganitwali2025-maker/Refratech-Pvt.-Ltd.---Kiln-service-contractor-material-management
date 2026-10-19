import { pend, bal } from '../utils/calc.js'

const STATUS = ['Scheduled', 'In progress', 'Completed']

export const SECTIONS = {
  kilns: {
    title: 'Kiln Service',
    sub: 'Kiln repair, relining and maintenance jobs.',
    singular: 'kiln job',
    fields: [
      { key: 'name', label: 'Kiln name' },
      { key: 'site', label: 'Site / plant' },
      { key: 'work', label: 'Service type', type: 'select', options: ['Relining', 'Repair', 'Inspection', 'Heat-up'] },
      { key: 'contractor', label: 'Contractor', type: 'contractor' },
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'status', label: 'Status', type: 'select', options: STATUS },
    ],
  },
  contractors: {
    title: 'Contractors',
    sub: 'People and teams who carry out the work.',
    singular: 'contractor',
    fields: [
      { key: 'name', label: 'Name' },
      { key: 'phone', label: 'Phone', type: 'tel' },
      { key: 'skill', label: 'Skill', type: 'select', options: ['Bricklaying', 'Casting', 'Gunning', 'Supervision'] },
      { key: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] },
    ],
  },
  materials: {
    title: 'Materials',
    sub: 'Order, dispatch and use at site. Pending and balance are calculated for you.',
    singular: 'material',
    fields: [
      { key: 'name', label: 'Product name' },
      { key: 'order', label: 'Order qty', type: 'number' },
      { key: 'dispatch', label: 'Dispatch qty', type: 'number' },
      { key: 'used', label: 'Total used at site', type: 'number' },
      { key: 'note', label: 'Used for (optional)', optional: true },
    ],
    extra: [
      { label: 'Pending', render: (r) => pend(r) },
      { label: 'Balance', render: (r) => <b>{bal(r)}</b> },
    ],
  },
}
