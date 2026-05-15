function buildSignatureModel_(formData) {
  var assets = getAssetUrls_();

  return {
    company: COMPANY_CONFIG,
    assets: assets,
    person: {
      fullName: sanitizeText_(formData.fullName),
      jobTitle: sanitizeText_(formData.jobTitle),
      email: sanitizeText_(formData.email),
      phone: sanitizeText_(formData.phone),
      linkedinUrl: sanitizeUrl_(formData.linkedinUrl),
      calendarUrl: sanitizeUrl_(formData.calendarUrl)
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
