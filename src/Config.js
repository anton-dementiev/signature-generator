var COMPANY_CONFIG = Object.freeze({
  companyName: "RuStore",
  companyWebsiteUrl: "https://www.rustore.ru/developer/en",
  tagline: "",
  calendarLabel: "",
  calendarUrl: "",
  logoUrl: "https://i.postimg.cc/DZSQ0c4X/Ru-Store-Icon.png",
  bannerUrl: "",
  templateName: "default-minimal"
});

var SIGNATURE_FIELDS = Object.freeze([
  { key: "fullName", label: "Full name", required: true, defaultValue: "" },
  { key: "jobTitle", label: "Job title", required: true, defaultValue: "" },
  { key: "companyName", label: "Company name", required: true, defaultValue: COMPANY_CONFIG.companyName },
  { key: "companyWebsiteUrl", label: "Company website", required: true, type: "url", defaultValue: COMPANY_CONFIG.companyWebsiteUrl },
  { key: "email", label: "Email", required: true, type: "email", defaultValue: "" },
  { key: "phone", label: "Phone", required: false, defaultValue: "" },
  { key: "linkedinUrl", label: "LinkedIn URL", required: false, type: "url", defaultValue: "" },
  { key: "tagline", label: "Tagline", required: false, defaultValue: COMPANY_CONFIG.tagline },
  { key: "calendarLabel", label: "Calendar label", required: false, defaultValue: COMPANY_CONFIG.calendarLabel },
  { key: "calendarUrl", label: "Calendar URL", required: false, type: "url", defaultValue: COMPANY_CONFIG.calendarUrl }
]);
