export const SEED = {
  kilns: [
    { id: 1, name: 'Rotary Kiln 1', site: 'Siltara plant', work: 'Relining', contractor: 'KR ENTERPRISES', date: '2026-10-25', status: 'Scheduled' },
    { id: 2, name: 'Preheater', site: 'Urla unit', work: 'Repair', contractor: 'Sunil Sahu', date: '2026-10-18', status: 'In progress' },
  ],
  contractors: [
    { id: 1, name: 'KR ENTERPRISES', phone: '9000000001', skill: 'Bricklaying', status: 'Active' },
    { id: 2, name: 'Sunil Sahu', phone: '9000000002', skill: 'Casting', status: 'Active' },
  ],
  materials: [
    { id: 1, name: 'Y ANCHOR 200*40*4', order: 10000, dispatch: 10000, used: 3476, note: 'ABC + Eme.stack' },
    { id: 2, name: 'CILT 40*40*8', order: 1620, dispatch: 1620, used: 0, note: '' },
  ],
  meta: { plant: 'RAMA UDYOG - 200TPD', contractor: 'KR ENTERPRISES', incharge: 'ROSHAN JOSHI' },
}
