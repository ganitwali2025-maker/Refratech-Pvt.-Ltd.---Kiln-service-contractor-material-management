# Refratech Pvt. Ltd. – Raipur

Kiln service, contractor & material management app (React + Vite).

Pages: Dashboard, Kiln Service, Contractors, Materials, Report (PDF download).
Data is saved in the browser (localStorage). No backend is needed to run or deploy.

## Run on your computer

```bash
npm install        # creates node_modules
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # test the production build
```

## Folder structure

```
public/            favicon and static files
src/
  components/      Sidebar, StatCard, DataSection, Tag, Icon
  pages/           Dashboard, Kilns, Contractors, Materials, Report, NotFound
  context/         DataContext (state + localStorage)
  config/          sections.jsx (form fields for each page)
  data/            seed.js (sample data)
  utils/           calc.js (pending, balance), pdf.js (PDF report)
  App.jsx          routes
  main.jsx         entry point
  index.css        styles (light and dark theme)
index.html         Vite root HTML
vercel.json        makes page refresh work on Vercel
```

## Git

```bash
git init
git add .
git commit -m "Refratech app"
git branch -M main
git remote add origin https://github.com/<your-username>/refratech-app.git
git push -u origin main
```

## Deploy on Vercel

1. Push the project to GitHub (steps above).
2. Open vercel.com, click **Add New → Project**, and import the repository.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.

Or with the CLI: `npm i -g vercel` then `vercel`.
