// ZEROTrace AI Environment Configuration
// Safe public client-side variables only. No secrets, credentials, or tokens.

export const ENV = {
  APP_NAME: "ZEROTrace AI",
  TAGLINE: "Secure. Verify. Prove. Recycle.",
  SIH_ID: "SIH25070",
  SIH_TITLE: "Secure Data Wiping for Trustworthy IT Asset Recycling",

  // Destination URLs linking from the website to the existing application
  APP_BASE_URL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080",
  APP_LOGIN_URL: `${import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080"}/login`,
  APP_REGISTER_URL: `${import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080"}/register`,
  APP_PORTAL_ROUTER_URL: `${import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080"}/portal`,

  // Role-specific portal URLs
  ADMIN_APP_URL: import.meta.env.VITE_ADMIN_APP_URL || "http://localhost:8080/admin",
  EMPLOYEE_APP_URL: import.meta.env.VITE_EMPLOYEE_APP_URL || "http://localhost:8080/employee",
  AUDITOR_APP_URL: import.meta.env.VITE_AUDITOR_APP_URL || "http://localhost:8080/admin",
  CUSTOMER_APP_URL: import.meta.env.VITE_CUSTOMER_APP_URL || "http://localhost:8080/customer",

  // Public certificate verification endpoint (Connecting directly to the real ZEROTrace backend API)
  CERTIFICATE_API_URL: import.meta.env.VITE_CERTIFICATE_VERIFY_URL || "http://localhost:5000/api/certificates",

  // Contact API submission endpoint
  CONTACT_API_URL: import.meta.env.VITE_CONTACT_API_URL || "",
};
