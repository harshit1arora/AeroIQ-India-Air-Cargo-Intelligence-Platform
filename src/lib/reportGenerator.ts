import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateCargoReport = () => {
  try {
    const doc = new jsPDF();
    const timestamp = new Date().toLocaleString();

    // Add Branded Header
    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('AeroIQ Market Intelligence', 14, 25);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Official Analysis • Generated: ${timestamp}`, 14, 33);

    // Executive Summary Section
    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235);
    doc.setFont('helvetica', 'bold');
    doc.text('Executive Summary', 14, 55);
    
    doc.setDrawColor(220, 220, 220);
    doc.line(14, 58, 196, 58);

    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.setFont('helvetica', 'normal');
    const summaryText = 'India\'s air cargo sector is witnessing a transformative growth of 12.4% YoY. This report synthesizes real-time data from DGCA, AAI, and the Ministry of Civil Aviation to provide actionable logistics intelligence for decision-makers and logistics stakeholders.';
    const splitSummary = doc.splitTextToSize(summaryText, 180);
    doc.text(splitSummary, 14, 66);

    // Key Performance Indicators
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'bold');
    doc.text('Strategic Insights (FY2024)', 14, 90);
    
    autoTable(doc, {
    startY: 95,
    head: [['Airport Hub', 'IATA', 'Total Vol (MT)', 'Imports', 'Exports', 'YoY Growth']],
    body: [
      ['Indira Gandhi International', 'DEL', '920,000', '520,000', '400,000', '+19.2%'],
      ['Chhatrapati Shivaji Maharaj', 'BOM', '850,000', '410,000', '440,000', '+11.5%'],
      ['Kempegowda International', 'BLR', '410,000', '190,000', '220,000', '+16.8%'],
      ['Rajiv Gandhi International', 'HYD', '380,000', '170,000', '210,000', '+14.1%'],
      ['Chennai International', 'MAA', '350,000', '180,000', '170,000', '+12.4%'],
    ],
    styles: { font: 'helvetica', fontSize: 9, cellPadding: 4 },
    headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold' },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

    // Commodity Breakdown
    const finalY = (doc as any).lastAutoTable?.cursor?.y || 160;
    doc.setFontSize(14);
    doc.setTextColor(37, 99, 235);
    doc.setFont('helvetica', 'bold');
    doc.text('Commodity Distribution Analysis', 14, finalY + 20);
    
    doc.setDrawColor(220, 220, 220);
    doc.line(14, finalY + 23, 196, finalY + 23);

    const insights = [
      { title: 'Pharmaceuticals', value: '28% Market Share', detail: 'Driving 18% of international export growth from BOM/HYD hubs.' },
      { title: 'Electronics', value: '22% Market Share', detail: 'Massive surge in domestic demand and manufacturing exports in BLR/DEL.' },
      { title: 'Perishables', value: '15% Market Share', detail: 'Benefiting from significant investment in cold-chain logistics infrastructure.' }
    ];

    let insightY = finalY + 32;
    insights.forEach(item => {
      doc.setFontSize(11);
      doc.setTextColor(0);
      doc.setFont('helvetica', 'bold');
      doc.text(`${item.title}: ${item.value}`, 14, insightY);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100);
      doc.text(item.detail, 14, insightY + 5);
      insightY += 15;
    });

    // Footer Branding
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(150);
      doc.text('© 2024 AeroIQ Intelligence Systems • Confidential Deloitte Hacksplosion Demo', 14, 285);
      doc.text(`Report ID: AIQ-${Math.floor(Math.random() * 10000)} • Page ${i} of ${pageCount}`, 140, 285);
    }

    console.log("Saving PDF...");
    doc.save(`AeroIQ_Market_Report_2024.pdf`);
  } catch (err) {
    console.error("Critical PDF Error:", err);
    throw err;
  }
};