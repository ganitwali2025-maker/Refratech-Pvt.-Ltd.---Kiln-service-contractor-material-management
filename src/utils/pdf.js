import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { pend, bal } from './calc.js'

export function downloadStockPdf(meta, materials) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(15)
  doc.text(meta.plant, 40, 52)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.text(`Contractor: ${meta.contractor}`, 40, 72)
  doc.text(`Site incharge: ${meta.incharge}`, 40, 88)
  doc.text(`Date: ${new Date().toLocaleDateString('en-GB')}`, 555, 52, { align: 'right' })

  autoTable(doc, {
    startY: 108,
    theme: 'grid',
    head: [
      [{ content: `${meta.plant} - MATERIAL STOCK SUMMARY`, colSpan: 6, styles: { halign: 'center', fillColor: [107, 158, 236], textColor: 255, fontSize: 11 } }],
      ['Product name', 'Order qty', 'Dispatch qty', 'Pending qty', 'Total used at site', 'Balance stock'],
    ],
    body: materials.map((r) => [r.name, r.order, r.dispatch, pend(r), r.used + (r.note ? ` (${r.note})` : ''), bal(r)]),
    styles: { halign: 'center', valign: 'middle', fontSize: 10, cellPadding: 8, lineColor: [50, 50, 50], lineWidth: 0.6, textColor: 20 },
    headStyles: { fillColor: [232, 212, 222], textColor: 20, fontStyle: 'bold' },
    columnStyles: { 0: { halign: 'left' } },
  })

  const y = doc.lastAutoTable.finalY + 70
  doc.setFontSize(10)
  doc.line(40, y, 200, y)
  doc.line(395, y, 555, y)
  doc.text('Site incharge signature', 40, y + 14)
  doc.text('Contractor signature', 395, y + 14)

  doc.save('Material-Stock-Summary.pdf')
}
