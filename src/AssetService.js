function getAssetUrls_() {
  var folder = findAssetsFolder_();
  if (!folder) {
    return {
      logoUrl: "",
      bannerUrl: "",
      warning: 'Assets folder "' + COMPANY_CONFIG.assetsFolderName + '" was not found next to this script.'
    };
  }

  return {
    logoUrl: getFileUrlFromFolder_(folder, COMPANY_CONFIG.logoFileName),
    bannerUrl: getFileUrlFromFolder_(folder, COMPANY_CONFIG.bannerFileName),
    warning: ""
  };
}

function findAssetsFolder_() {
  var scriptId = ScriptApp.getScriptId();
  var scriptFile = DriveApp.getFileById(scriptId);
  var parents = scriptFile.getParents();

  while (parents.hasNext()) {
    var parentFolder = parents.next();
    var folders = parentFolder.getFoldersByName(COMPANY_CONFIG.assetsFolderName);
    if (folders.hasNext()) {
      return folders.next();
    }
  }

  return null;
}

function getFileUrlFromFolder_(folder, fileName) {
  if (!fileName) {
    return "";
  }

  var files = folder.getFilesByName(fileName);
  if (!files.hasNext()) {
    return "";
  }

  return files.next().getUrl();
}
