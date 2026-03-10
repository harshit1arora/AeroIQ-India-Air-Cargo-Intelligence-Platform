# AeroIQ — India Air Cargo Intelligence Platform

**AeroIQ** is an enterprise intelligence platform for analyzing India's air cargo operations. It provides unified data visualization, AI-driven insights, predictive forecasting, and strategic advisory capabilities for logistics and supply chain professionals.

**Status**: Deloitte Hacksplosion Finalist  
**Built with**: Vite, React 18, TypeScript, Tailwind CSS

---

## Overview

AeroIQ aggregates air cargo data from India's Directorate General of Civil Aviation (DGCA) and Airports Authority of India (AAI) to provide actionable intelligence for stakeholders in logistics, supply chain management, and aviation.

---

## Core Features

### Intelligent Data Assistant

- Natural language querying of aviation datasets
- Real-time regulatory information and market trend alerts
- Strategic recommendations for route optimization and capacity management

### Market Analytics Dashboard

- Predictive forecasting for air cargo volumes using time-series analysis
- Dynamic heatmaps showing cargo density across major hubs (Delhi, Mumbai, Bangalore, Chennai)
- Commodity breakdown analysis and trend visualization
- Monthly cargo trends with AI-driven forecasting models

### Data Source Monitoring

- Unified ingestion pipeline health status
- Integration with DGCA and AAI official portals
- Real-time data validation and integrity checks

### Professional Reporting

- Automated PDF report generation
- Export of analysis and forecasts for stakeholder distribution
- Audit logging and report history tracking

---

## Technology Stack

**Frontend Framework**
- React 18 with TypeScript
- Vite 5.4 (build tool and dev server)

**Styling & UI**
- Tailwind CSS 3.4 for utility-first styling
- Shadcn UI and Radix UI for component library
- Framer Motion for animations and transitions
- Lucide React for icons

**Data Visualization**
- Recharts for charts and graphs
- Custom SVG implementations for geographic visualizations

**State Management & Data Fetching**
- TanStack React Query for server state management
- React Router for client-side routing

**Development Tools**
- ESLint for code quality
- Vitest for unit testing
- PostCSS for CSS processing

**Optional Dependencies**
- jsPDF and html2canvas for PDF report generation

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later (or compatible package manager: yarn, pnpm, bun)

### Installation

Clone the repository:

```bash
git clone https://github.com/harshit1arora/AeroIQ-India-Air-Cargo-Intelligence-Platform.git
cd AeroIQ-India-Air-Cargo-Intelligence-Platform
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build for production:

```bash
npm run build
```

The optimized build will be output to the `dist/` directory.

### Testing

Run the test suite:

```bash
npm run test
```

---

## Design System

AeroIQ implements a Deloitte-inspired premium design system with the following principles:

**Color Palette**
- Primary: #86BC25 (Deloitte Green) for accents and call-to-action elements
- Neutral: #000000, #1a1a1a, #FFFFFF for backgrounds and text
- Accent Green Dark: #5a8a1a for interactive states

**Typography**
- Display: Georgia serif for editorial headings (light weight for premium feel)
- Body: System sans-serif (Inter) for readable content
- Data: JetBrains Mono for technical information and metrics

**Layout Principles**
- Sharp corners and flat design (no border-radius above 2px)
- Minimal use of shadows; borders for separation
- Bold typography hierarchy for clear information architecture
- Generous padding and spacing for premium feel

---

## Project Context

AeroIQ was developed as a submission to the Deloitte Hacksplosion 2024, addressing the "Logistics & Supply Chain Intelligence" track. The platform aggregates fragmented aviation data sources into a unified intelligence system, enabling data-driven decision-making for stakeholders across the logistics ecosystem.

---

## Architecture

### Page Structure

- **Dashboard**: Primary analytics and KPI visualization
- **Insights**: Market trends, forecasting, and strategic intelligence
- **Data Sources**: Monitoring and health checks for ingestion pipelines
- **Reports**: PDF generation and report management
- **Admin Dashboard**: System configuration and brand asset reference

### Component Organization

- `src/components/`: Reusable UI components and visualizations
- `src/pages/`: Page-level containers
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility functions and helpers

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Developed by Harshit Arora  
[GitHub](https://github.com/harshit1arora) | [Portfolio](#)

---

## Acknowledgments

This project was built with support from the open-source community and uses several excellent libraries:
- Recharts for data visualization
- Shadcn UI for component primitives
- Framer Motion for animations
- Tailwind CSS for styling
