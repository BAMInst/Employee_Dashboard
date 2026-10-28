# BAM Employee Hub v2

A static GitHub Pages PWA for https://baminst.github.io/Employee_Dashboard/.

## Deployment

1. Back up the current GitHub repository contents before replacing anything.
2. Copy the four files (`index.html`, `manifest.webmanifest`, `icon.svg`, `sw.js`) to the root of the GitHub repository `baminst/Employee_Dashboard`, on the branch/folder configured in Settings > Pages.
3. Commit changes and reload the GitHub Pages URL. If the installed PWA shows an old version, close and reopen it, or clear its site data.
4. On Resa's Windows PC, open the site in Edge or Chrome and choose **Install app** (browser menu). If the old app already exists, it may update automatically after reloading.

## Navigation behavior

- **Teams** uses the provided Microsoft Teams deep link, which can offer the installed desktop client.
- **SharePoint** uses the provided Project Management site link. Microsoft 365 permissions determine file visibility.
- **Outlook** inbox button uses Outlook Web. Browsers cannot guarantee opening the *new Outlook* desktop inbox from a static GitHub Pages site. The separate **Compose in Outlook** shortcut is a `mailto:` link and can open *new Outlook* when Windows Default Apps associates MAILTO with it.
- **Word/Excel/PowerPoint** default to the Microsoft 365 launcher pages. In the Hub's Settings dialog, optional direct SharePoint document URLs ending in `.docx`, `.xlsx`, `.pptx` can be supplied: then the tile uses the Microsoft-documented `ms-word:ofe|u|`, `ms-excel:ofe|u|` or `ms-powerpoint:ofe|u|` protocol to open that particular file in its desktop app. SharePoint folder URLs are **not** sufficient for this protocol. Windows may request permission to open the app.
- **Zoho** defaults to generic CRM and Books URLs; replace with appropriate tenant-specific destinations if desired.
- Local preferences are saved only on the current device/browser (localStorage). No Microsoft Graph API, password collection, or data synchronization is implemented.

## Important limitations

The provided live GitHub Pages site/source code could not be retrieved in this environment. This is a clean replacement implementation, **not** a verified patch/diff of the existing repository. Do not overwrite custom features without a backup.

For app-launch behavior that goes beyond browser protocol handlers (e.g. forcibly opening the new Outlook desktop inbox or opening blank native Word/Excel/PowerPoint from the PWA), a separate trusted Windows launcher / packaging integration is required. Do not deploy an unauthenticated local HTTP command execution server.

## References

- https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/deep-links
- https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes
