# Wajahat Hussain – MERN Portfolio

React (Vite) + Tailwind CSS + Framer Motion on the front, Express + MongoDB on the back. Contact messages are saved to MongoDB and optionally emailed to you.

## Run everything with one command
```bash
npm run install:all                      # once: installs root, client and server
cp server/.env.example server/.env       # once: edit if needed
npm run dev:all                          # starts MongoDB (Docker), the API and the website
```
Open http://localhost:5173. Check the API and database at http://localhost:5000/api/health.

- No Docker? Install MongoDB locally, or put a MongoDB Atlas URL in `MONGODB_URI`, then use `npm run dev`.
- In VS Code press **Ctrl+Shift+B** (Cmd+Shift+B on Mac) to run the "Run Portfolio" task, which starts the frontend and backend together.

## Make it yours
- Edit `client/src/data/profile.js`: GitHub and LinkedIn URLs, project links, education and experience (look for `TODO`).
- Your photo is `client/public/profile.jpg`; replace the file to change it.
- Put your resume at `client/public/resume.pdf`.
- Add project screenshots to `client/public/projects/` and set `image: '/projects/name.png'` on a project.
- Optional email alerts: set the SMTP variables in `server/.env` (Gmail needs an App Password).

## Deploy
Build the site with `npm run build --prefix client` and host `client/dist`. Host `server/` on any Node host with the same env vars (use a MongoDB Atlas `MONGODB_URI`), then set `VITE_API_URL` for the client build and `CLIENT_ORIGIN` on the server.
