function doGet() {
  var template = HtmlService.createTemplateFromFile("index");
  template.config = getAppConfig();

  return template
    .evaluate()
    .setTitle("Corporate Signature Generator")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getAppConfig() {
  return {
    company: COMPANY_CONFIG,
    fields: SIGNATURE_FIELDS,
    assets: getAssetUrls_()
  };
}

function generateSignature(formData) {
  var html = renderSignatureHtml_(formData || {});
  return {
    html: html,
    exportedFileName: buildExportFileName_(formData || {}),
    assets: getAssetUrls_()
  };
}

function exportSignatureHtml(formData) {
  var payload = generateSignature(formData || {});
  var file = DriveApp.createFile(payload.exportedFileName, payload.html, MimeType.HTML);
  return {
    fileId: file.getId(),
    fileName: file.getName(),
    fileUrl: file.getUrl()
  };
}

function buildExportFileName_(formData) {
  var fullName = sanitizeText_(formData.fullName) || "signature";
  var safeName = fullName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return safeName + "-email-signature.html";
}
