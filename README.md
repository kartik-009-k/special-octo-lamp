# 🧿 Shirwal Circle

A deliberately simple, GitHub Pages-friendly local-services marketplace for Shirwal, Maharashtra. It uses vanilla HTML/CSS/JavaScript, Firebase Authentication + Firestore, and Leaflet/OpenStreetMap. **There are no payments**: bookings are requests only.

## 1. Download and open it
Download or clone this repository. All pages are plain files, so there is no build step and no Node installation.

## 2. Create a Firebase project
1. Go to [Firebase Console](https://console.firebase.google.com), create a project, and add a **Web app**.
2. The supplied project configuration is already in `js/firebase-config.js`. If you use a different Firebase project, replace every value there with the configuration from its Web app. Firebase API keys are public project identifiers; protect data with the included Firestore Rules and Firebase API restrictions.

## 3. Enable sign-in
In Firebase Console, open **Authentication → Sign-in method**, enable **Email/Password**, then save.

## 4. Create Firestore and deploy rules
Create a **Cloud Firestore** database. Paste `firestore.rules` into Firestore → Rules and publish it. These rules enforce roles and prevent users from promoting themselves.

## 5. Create the first admin
Register a normal account in the website. In Firestore → `users` → that user ID, manually change `role` from `user` to `admin`. This manual first-admin step is intentional and safer than a public admin button.

## 6. Add demo / real data
The website has clearly labelled local fallback demo data in `js/demo-data.js`. For live data, add vendor documents to `vendors` with `status: "approved"`, `ownerId`, business fields, and `bookingEnabled`. Add services in `services` using `vendorId`. Vendor applications are created as `pending` by the website and an admin must set them to `approved`.

## 7. Test locally
Run a simple static server from this folder, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. A server is needed because this project uses JavaScript module imports.

## 8. Deploy to GitHub Pages
Push this repository to GitHub. In **Settings → Pages**, select **Deploy from a branch**, choose your branch and `/ (root)`, then save. Add the deployed GitHub Pages URL to Firebase Authentication → Settings → Authorized domains if Firebase requires it.

## WHAT YOU NEED TO DO MANUALLY

1. Create your Firebase project and Web app.
2. If you use another Firebase project, paste its Firebase Web configuration into `js/firebase-config.js`.
3. Enable Email/Password Authentication and create Firestore.
4. Deploy `firestore.rules`.
5. Promote your first registered user to `admin` in Firestore.
6. Add/approve live vendors and services, or adapt the provided demo data.
7. Enable GitHub Pages and authorize its domain in Firebase Authentication.
