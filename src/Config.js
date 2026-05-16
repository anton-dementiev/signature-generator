var COMPANY_CONFIG = Object.freeze({
  companyName: "Your Company",
  companyWebsiteUrl: "https://example.com",
  ctaText: "Book a call",
  ctaUrl: "https://example.com/book",
  assetsFolderName: "assets",
  logoFileName: "logo.png",
  bannerFileName: "banner.png",
  templateName: "default-minimal"
});

var SIGNATURE_FIELDS = Object.freeze([
  { key: "fullName", label: "Full name", required: true },
  { key: "jobTitle", label: "Job title", required: true },
  { key: "companyName", label: "Company name", required: true },
  { key: "email", label: "Email", required: true },
  { key: "phone", label: "Phone", required: false },
  { key: "linkedinUrl", label: "LinkedIn URL", required: false },
  { key: "calendarUrl", label: "Calendar link", required: false }
]);
