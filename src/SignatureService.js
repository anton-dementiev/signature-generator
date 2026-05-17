function buildSignatureModel_(formData) {
  var assets = getAssetUrls_();
  var jobTitle = sanitizeText_(formData.jobTitle);
  var companyName = sanitizeText_(formData.companyName) || sanitizeText_(COMPANY_CONFIG.companyName);
  var companyWebsiteUrl = sanitizeUrl_(formData.companyWebsiteUrl || COMPANY_CONFIG.companyWebsiteUrl);
  var tagline = sanitizeText_(formData.tagline) || sanitizeText_(COMPANY_CONFIG.tagline);
  var calendarLabel = sanitizeText_(formData.calendarLabel) || sanitizeText_(COMPANY_CONFIG.calendarLabel);
  var calendarUrl = sanitizeUrl_(formData.calendarUrl || COMPANY_CONFIG.calendarUrl);

  return {
    company: Object.assign({}, COMPANY_CONFIG, {
      companyName: companyName,
      companyWebsiteUrl: companyWebsiteUrl,
      tagline: tagline,
      calendarLabel: calendarLabel,
      calendarUrl: calendarUrl
    }),
    assets: assets,
    person: {
      fullName: sanitizeText_(formData.fullName),
      jobTitle: jobTitle,
      companyName: companyName,
      titleLine: buildTitleLine_(jobTitle, companyName),
      email: sanitizeText_(formData.email),
      phone: sanitizeText_(formData.phone),
      linkedinUrl: sanitizeUrl_(formData.linkedinUrl)
    }
  };
}

function renderSignatureHtml_(formData) {
  var template = HtmlService.createTemplateFromFile("signature-template");
  template.model = buildSignatureModel_(formData);
  return template.evaluate().getContent();
}

function sanitizeText_(value) {
  return value ? String(value).trim() : "";
}

function sanitizeUrl_(value) {
  var normalized = sanitizeText_(value);
  if (!normalized) {
    return "";
  }

  if (/^https?:\/\//i.test(normalized)) {
    return normalized;
  }

  return "https://" + normalized;
}

function buildTitleLine_(jobTitle, companyName) {
  if (jobTitle && companyName) {
    return jobTitle + ", " + companyName;
  }

  return jobTitle || companyName || "";
}
