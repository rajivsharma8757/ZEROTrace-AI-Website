# ZEROTrace AI — Enterprise Cybersecurity & ITAD Website

> **Secure. Verify. Prove. Recycle.**  
> *AI-Assisted Data Sanitization, Verification Evidence, Digital Erasure Certificates & Circular IT Asset Recycling*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-cyan.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![SIH 2026](https://img.shields.io/badge/SIH_2026-SIH25070-orange.svg)](#smart-india-hackathon-context)

---

## 1. Project Overview

**ZEROTrace AI** solves the dual crisis of enterprise data exposure and catastrophic electronic waste. 

When organizations decommission retired IT assets (laptops, storage drives, enterprise servers), fear of data recovery often leads to physical shredding. This destroys billions of dollars of healthy hardware and accelerates global electronic waste.

ZEROTrace AI introduces an unbroken, cryptographically verifiable **Trust Loop**:
1. **Intake & Asset Identity:** Digital registration of hardware, drive architecture (NVMe/SSD/HDD), capacity, and SED encryption states.
2. **Media-Aware AI Sanitization Guidance:** NIST SP 800-88 Rev. 2 and IEEE 2883-2022 heuristic engine recommending Purge vs. Clear vs. Cryptographic Erase routines.
3. **Control Plane Workflow Orchestration:** Step-by-step state machine tracking sanitization phases.
4. **Independent Verification Gate:** Hard pre-certification gate requiring 256-point sampled low-level sector read inspection.
5. **Cryptographic Erasure Certificates:** Issuance of tamper-evident digital certificates with SHA-256 hashes, scannable QR verification codes, and dynamic PDF generation.
6. **Public Unauthenticated Verification Gateway:** Instant online verification at `/verify` for secondary buyers, auditors, and recyclers.
7. **Tamper-Evident SHA-256 Audit Trail:** Blockchain-style hash-chained event ledger (`previousHash` ➔ `currentHash`).
8. **Circular ITAD Recycling Authorization:** Compliance gates ensuring only certified hardware is released to authorized e-waste recyclers under Indian E-Waste Management Rules, 2022.

This repository contains the **standalone marketing, product showcase, and public verification website** for ZEROTrace AI, designed to connect seamlessly to the running ZEROTrace AI full-stack application.

---

## 2. Smart India Hackathon Context

- **Event:** Smart India Hackathon 2026 (SIH 2026)
- **Problem Statement Reference:** **SIH25070**
- **Title:** *Secure Data Wiping for Trustworthy IT Asset Recycling*
- **Theme:** Cybersecurity, Blockchain & Clean-Tech Circular Economy

> [!NOTE]
> ZEROTrace AI was developed in direct response to Problem Statement SIH25070. References to SIH25070 identify the challenge context and do not imply official government partnership or endorsements.

---

## 3. Website Pages & Architecture

| Route | Page | Purpose & Scope |
| :--- | :--- | :--- |
| `/` | **Home** | Flagship cybersecurity SaaS landing page with interactive AI panel, wipe simulator, and role portals |
| `/solution` | **Problem & Solution** | Deep dive into why ordinary OS deletion fails, drive media physics, and the circular recycling trust loop |
| `/how-it-works` | **8-Stage Trust Loop** | Interactive stage-by-stage lifecycle timeline from hardware intake to ITAD recycling clearance |
| `/features` | **Platform Capabilities** | Technical breakdown of AI heuristics, multi-method wipes, residual verification, and audit ledgers |
| `/security` | **Security & Trust Center** | Cryptographic hash chaining formulas, 5-role privilege isolation, and honest prototype scope disclosures |
| `/verify` | **Certificate Verification Gateway** | **Live public verification gateway** connecting to the real backend API or verified local specimens |
| `/about` | **Mission & Vision** | Project origin, SIH25070 context, and the 4 Pillars of Trust (Secure, Verify, Prove, Recycle) |
| `/contact` | **Contact & Inquiries** | Enterprise pilot inquiries, recycler partnership requests, and hackathon evaluation feedback |
| `/privacy` | **Draft Privacy Policy** | Draft legal framework for ITAD hardware telemetry and public certificate records |
| `/terms` | **Draft Terms of Service** | Draft governance conditions, prototype scope disclosures, and verification disclaimers |
| `*` | **Custom 404** | Branded error handling with quick navigation back to home or certificate verification |

---

## 4. Technology Stack

- **Framework:** React `19.2.3` with TypeScript `5.5.3`
- **Build Tooling:** Vite `8.0+` with `@vitejs/plugin-react-swc`
- **Styling:** Tailwind CSS `3.4.11` (dark cybersecurity theme: `#020610` / `#040b17` / `#071224` with neon cyan `#00f0ff` and teal `#00e5a3` accents)
- **Icons:** Lucide React (`0.462.0`)
- **Routing:** React Router DOM `6.30.4`
- **Design Elements:** Fine technical grid patterns, glassmorphism panels, security guilloche borders, and responsive mobile drawers

---

## 5. Live Application Integration

The website is engineered to integrate with the separate ZEROTrace AI full-stack application:

```
┌─────────────────────────────────┐          ┌──────────────────────────────────┐
│   ZEROTrace AI Website (Port 3000)│          │ ZEROTrace Application (Port 8080)│
│  - Marketing & Architecture     ├─────────►│  - Role-Based Dashboards         │
│  - Interactive Demonstrations   │          │  - PostgreSQL 16 Persistence     │
│  - Public /verify Gateway       │          │  - Active Wipe Orchestrator      │
└────────────────┬────────────────┘          └──────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ ZEROTrace Backend API (Port 5000)│
│  - GET /api/certificates/:id/pub │
│  - GET /api/certificates/:id/pdf │
└─────────────────────────────────┘
```

### Environment Configuration (`.env`)

Configure integration URLs using `.env.example`:

```ini
# Application Base URL
VITE_APP_BASE_URL=http://localhost:8080

# Role-specific application portal destinations
VITE_ADMIN_APP_URL=http://localhost:8080/admin
VITE_EMPLOYEE_APP_URL=http://localhost:8080/employee
VITE_AUDITOR_APP_URL=http://localhost:8080/admin
VITE_CUSTOMER_APP_URL=http://localhost:8080/customer

# Public Digital Certificate Verification API Endpoint
VITE_CERTIFICATE_VERIFY_URL=http://localhost:5000/api/certificates
```

---

## 6. Quick Start & Local Execution

### Prerequisites
- Node.js `20.x` or higher
- npm `10.x` or higher

### Step 1 — Clone the Repository
```bash
git clone https://github.com/rajivsharma8757/ZEROTrace-AI-Website.git
cd ZEROTrace-AI-Website
```

### Step 2 — Install Dependencies
```bash
npm install
```

### Step 3 — Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4 — Run Production Build
```bash
npm run build
npm run preview
```

---

## 7. Automated Browser Verification Results

The website was audited via automated real Chrome DevTools Protocol (CDP) execution:

- [x] **Homepage Rendering:** Full DOM load, title verification, hero headline, and SIH25070 citation.
- [x] **Interactive AI Panel:** Real-time heuristic calculation on device profile switching (NVMe, SSD, HDD, Tablet).
- [x] **Interactive Wipe Simulator:** Step (+20%) action triggers state transitions without physical media modification.
- [x] **Problem & Solution:** Full rendered comparison table and media-specific analysis.
- [x] **8-Stage Trust Loop:** Complete responsive horizontal and vertical timeline.
- [x] **Certificate Verification Gateway:** Public `/verify` successfully query validated with SHA-256 fingerprint rendered.
- [x] **Security Architecture:** Honest prototype disclosures and cryptographic hash formulas verified.
- [x] **About & Contact:** Full form validation and SIH25070 context rendered.
- [x] **Legal & 404 Routing:** Draft Privacy, Terms, and custom 404 route handling verified.
- [x] **Browser Console Audit:** **0 unhandled JavaScript errors** across all navigated routes.

---

## 8. License & Governance

- **License:** [MIT License](LICENSE)
- **Problem Reference:** Smart India Hackathon 2026 — Problem Statement SIH25070
- **Copyright:** © 2026 ZEROTrace AI. All rights reserved.
