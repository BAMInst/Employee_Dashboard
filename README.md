# BAM Employee Hub v1.0

An installable, English-language, dark-themed Progressive Web App (PWA) for BAM Industrial Services.

## Features
- Quick launch of Outlook, Microsoft Teams, Zoho CRM, Zoho Books, OneDrive and SharePoint
- Documents / company resource links (initially placeholders; supply your own actual links)
- Employee information, management contact and IT support information
- Editable links and text in Settings; add or remove document links
- Import/export JSON configuration
- Offline app shell with service worker, icon, and standalone window mode

## Easiest FREE installation on a Windows laptop
A PWA must be served over HTTPS (or localhost). Do **not** open index.html with file:// and expect the install button to work.

**Option A: Free GitHub Pages (recommended)**
1. Create a GitHub account or use an existing one.
2. Create a new repository and upload **all files and the icons folder** from this package (the repository can be public; NEVER upload private files, passwords, sensitive employee details, or secret links).
3. In repository Settings > Pages, choose Deploy from a branch, `main`, `/(root)`, and Save.
4. Once deployed, open the HTTPS Pages URL in **Microsoft Edge** on Resa's Windows laptop.
5. Edge: menu `...` > Apps > Install this site as an app (wording may vary), then pin it to taskbar or create a desktop shortcut.
6. Open Hub > Settings: change URLs, employee details, document URLs, then Save changes. Changes are saved in Edge storage on that device.

**Important privacy:** Github Pages serves public assets. Do not put confidential material into the published HTML, JS, or bundled configuration. Store sensitive documents behind properly protected SharePoint/OneDrive sign-in and permissions instead. For a private deployment, use your organization's authenticated hosting rather than public GitHub Pages.

**Option B: Local preview**
- With Python installed on the PC, run `python -m http.server 8080` inside the unpacked folder. Open http://localhost:8080 in Edge.
- This is for testing only; the app needs a running server to start by that URL, so public/private HTTPS hosting is better for everyday use.

## Configure for each employee
1. Open Settings and set display name, contact details and message.
2. Replace placeholder resource links with the real company URLs.
3. Update application links to your Microsoft 365 tenant or Zoho regional sign-in portals as needed.
4. Save. Export settings JSON if you want to apply the same configuration on another computer; import it there. Export only non-sensitive data and handle employee details responsibly.

## Security and limitations
- This is an application launcher / information portal, **not** identity management, MDM, or a document storage service.
- App settings reside in browser localStorage and are not encrypted or centrally synchronized. Anyone with local access to that Windows profile may read/edit settings. No passwords should be placed here.
- Access control is the responsibility of Microsoft 365, Zoho, and linked systems. Never rely on the Hub to restrict who can open a service.
- Configured URLs are not verified to belong to BAM. Only add URLs you trust.
- App links open in new browser tabs/windows. The installed app has no automatic access to desktop programs or special Windows permissions.
- Network access is required to use external applications and linked documents. The shell may open offline after first successful load.
- Defaults are generic URLs; availability varies by account and region (particularly OneDrive / Zoho).
- Changes to settings are device-local; adding a new employee or centrally pushing changes needs a managed deployment design.
