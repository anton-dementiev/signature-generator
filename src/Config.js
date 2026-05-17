var COMPANY_CONFIG = Object.freeze({
  companyName: "RuStore",
  companyWebsiteUrl: "https://www.rustore.ru/developer/en",
  tagline: "",
  calendarLabel: "Book A Call",
  calendarUrl: "https://calendly.com/anton-dementyev/30min",
  confidentialityText: "This message may contain confidential information intended only for the named recipient.",
  optOutText: "If you prefer not to receive further communication from me, simply reply \"no\" to this email.",
  logoUrl: "https://i.postimg.cc/DZSQ0c4X/Ru-Store-Icon.png",
  bannerUrl: "",
  brandStyle: {
    primaryBlue: "#0077FF",
    surface: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#333333",
    textMuted: "#666666",
    divider: "#BFD8FF",
    ctaMagenta: "#E20074"
  },
  templateName: "default-minimal"
});

var SIGNATURE_FIELDS = Object.freeze([
  { key: "fullName", label: "Full name", required: true, defaultValue: "Anton Dementev" },
  { key: "jobTitle", label: "Job title", required: true, defaultValue: "Business Development Manager" },
  { key: "companyName", label: "Company name", required: true, defaultValue: COMPANY_CONFIG.companyName },
  { key: "companyWebsiteUrl", label: "Company website", required: true, type: "url", defaultValue: COMPANY_CONFIG.companyWebsiteUrl },
  { key: "email", label: "Email", required: true, type: "email", defaultValue: "an.dementev@vkteam.ru" },
  { key: "phone", label: "Phone", required: false, defaultValue: "" },
  { key: "linkedinUrl", label: "LinkedIn URL", required: false, type: "url", defaultValue: "https://www.linkedin.com/in/antondementiev/" },
  { key: "tagline", label: "Tagline", required: false, defaultValue: "Bring your game in front of 70 million players!" },
  { key: "calendarLabel", label: "Calendar label", required: false, defaultValue: COMPANY_CONFIG.calendarLabel },
  { key: "calendarUrl", label: "Calendar URL", required: false, type: "url", defaultValue: COMPANY_CONFIG.calendarUrl },
  { key: "includeConfidentiality", label: "Include confidentiality notice", required: false, type: "checkbox", defaultChecked: false },
  { key: "includeOptOut", label: "Include opt-out line", required: false, type: "checkbox", defaultChecked: false }
]);
