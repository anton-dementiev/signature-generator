# Signature Generator

Clasp-based Google Apps Script web app scaffold for generating corporate email signatures from one shared HTML template. Users open a standalone web app, fill in their details, preview the result, copy Gmail-ready inline HTML, and optionally export the generated signature as an `.html` file in Google Drive.

## Scope

- Standalone Google Apps Script web app.
- Access model: anyone with the link.
- Single default minimalist signature template.
- Global company branding is hardcoded in source for the first version.
- User-editable fields: `fullName`, `jobTitle`, `companyName`, `email`, optional `phone`, optional `linkedinUrl`, optional `calendarUrl`.
- Global company settings: `companyName`, `companyWebsiteUrl`, `ctaText`, `ctaUrl`, `logoFileName`, `bannerFileName`.
- Logo and banner are fixed shared assets stored in an `assets` folder located in the same Google Drive parent folder as the script project.
- Output modes:
  - on-page live preview
  - copyable inline HTML for Gmail
  - exported HTML file in Drive

## Repository Layout

```text
src/
  appsscript.json
  Code.js
  Config.js
  AssetService.js
  SignatureService.js
  index.html
  styles.html
  client.html
  signature-template.html
assets/
```

`assets/` is a local placeholder for the matching Drive folder convention. The runtime reads images from Google Drive, not from the local repo.

## Current Scaffold

- `src/Config.js` defines the hardcoded company config and supported input fields.
- `src/AssetService.js` looks for an `assets` folder next to the Apps Script project in Drive and resolves the configured logo/banner file URLs.
- `src/SignatureService.js` sanitizes form input and renders the HTML email signature template.
- `src/Code.js` exposes the web app entrypoint plus server methods for preview generation and HTML export.
- `src/index.html` provides the default UI.
- `src/signature-template.html` contains the first inline-style email signature layout.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Authenticate `clasp`:

```bash
npx clasp login
```

3. Create a new Apps Script project or clone an existing one, then create a local `.clasp.json` with your script ID.

Example:

```json
{
  "scriptId": "YOUR_SCRIPT_ID",
  "rootDir": "src"
}
```

4. Push the source:

```bash
npx clasp push
```

5. In Google Drive, place the Apps Script project in a folder that also contains an `assets` subfolder with:

- `logo.png`
- `banner.png`

6. Deploy as a web app with access set to "Anyone with the link".

## Notes

- `DriveApp.getFileById(ScriptApp.getScriptId())` is used here as a first-pass scaffold assumption for locating the Drive parent folder of the script file. That should be validated in development because Apps Script project/Drive behavior can vary depending on how the script is created and moved.
- Email clients can be strict about external image loading. If this becomes unreliable, a later iteration should switch to CID-compatible or base64/data-URI handling where supported.
- The current export writes generated HTML files to the user's Drive root. That can be redirected to a dedicated folder in a later task.

## Development Tasks

1. Validate the Drive asset discovery approach against a real deployed Apps Script project.
2. Decide whether exported HTML files should go to Drive root or a dedicated export folder.
3. Improve URL and email validation on both client and server.
4. Add user guidance for copying the signature into Gmail settings.
5. Add a plain-text fallback generator if required by stakeholders.
6. Harden the HTML template against edge cases such as missing required fields, long titles, and missing assets.
7. Add a dedicated config layer for environment-specific settings instead of editing source directly.
8. Add tests for sanitization, export naming, and template rendering.
9. Add deployment scripts such as `clasp push`, `clasp open`, and `clasp deploy` shortcuts in `package.json`.
10. Add admin documentation for asset preparation, image sizing, and web app deployment.

## Suggested Next Milestone

Build and validate the end-to-end happy path:

1. Create the Apps Script project and connect it via `.clasp.json`.
2. Push this scaffold.
3. Upload the real company assets into the Drive `assets` folder.
4. Deploy the web app.
5. Verify preview, copy flow, exported HTML, and Gmail rendering with one real signature.
