# Deployment Guide — NIVORA DESIGNS

## Custom Domain: `nivoradesigns.studio`

---

## 1. DNS Records (Add at your domain registrar)

| Type  | Name                  | Value                 |
|-------|-----------------------|-----------------------|
| A     | `@` (apex)            | `185.199.108.153`     |
| A     | `@` (apex)            | `185.199.109.153`     |
| A     | `@` (apex)            | `185.199.110.153`     |
| A     | `@` (apex)            | `185.199.111.153`     |
| CNAME | `www`                 | `your-username.github.io` |

> Replace `your-username` with your actual GitHub username.
> DNS propagation can take 5 minutes to 48 hours.

---

## 2. GitHub Pages Settings

1. Go to repo **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Under **Custom domain**, enter `nivoradesigns.studio` and click **Save**
4. Check **Enforce HTTPS** (available after DNS propagates)

---

## 3. How Deployment Works

Pushing to the `main` branch triggers the workflow in `.github/workflows/deploy.yml`:

1. Installs dependencies (`npm ci`)
2. Runs `npm run build` → outputs static files to `out/`
3. Uploads `out/` as a Pages artifact
4. Deploys to GitHub Pages

The `public/CNAME` file is automatically copied into the build output by Next.js.

---

## 4. Manual Deploy (If Needed)

```bash
npm run build
```

Output goes to the `out/` directory. The contents are ready to serve from any static host.

---

## 5. File Structure After Build

```
out/
├── CNAME                  # Custom domain (copied from public/)
├── index.html
├── about/
│   └── index.html
├── portfolio/
│   └── index.html
├── contact/
│   └── index.html
├── _next/                 # Next.js static assets
├── hero-bg-*.jpg
├── portfolio-*.jpg
├── owner.jpg
└── ...
```

All paths use relative links — no base path issues. `trailingSlash: true` ensures `/about/` and `/portfolio/` work correctly on refresh.

---

## 6. Post-Deployment Checklist

- [ ] DNS A records added for `@`
- [ ] DNS CNAME added for `www` (optional)
- [ ] Custom domain set in GitHub Pages settings
- [ ] HTTPS is working (green lock)
- [ ] `https://nivoradesigns.studio` loads correctly
- [ ] All pages load: `/about/`, `/portfolio/`, `/contact/`
- [ ] Refresh on each page returns 200 (not 404)
- [ ] WhatsApp widget opens correct link
- [ ] Images load on all pages
- [ ] Test on mobile + tablet

---

## 7. Troubleshooting

| Issue                          | Fix                                      |
|--------------------------------|------------------------------------------|
| Blank page on deploy           | Wait 2-5 min for GitHub Actions to finish |
| 404 on page refresh            | Ensure `trailingSlash: true` in `next.config.ts` |
| Images not loading             | Ensure `images.unoptimized: true` in config |
| HTTPS not working              | DNS may not have propagated yet; wait     |
| Custom domain shows 404        | Verify DNS records and CNAME file exists  |
