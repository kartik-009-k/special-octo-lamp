# 🧿 Shirwal Circle

Shirwal Circle is a simple local-services marketplace that runs completely inside the browser. It is designed to work on GitHub Pages without Firebase, Firestore Rules, a backend, or any permission configuration.

## How it works

All registration data, vendor applications, bookings, status changes, and chat messages are stored in the current browser's `localStorage` under `shirwal-circle-internal-v1`.

This means the app works immediately after deployment, but it also means:

- Data stays only on the browser and device where it was created.
- Data is not shared with another phone, browser, or user profile.
- Clearing browser site data clears the internal workspace.
- This internal mode is suitable for demos, learning, and a single-device prototype—not a production multi-user marketplace.

## Run locally

No packages or build step are required. Run a simple static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Internal demo accounts

The app seeds these accounts on first use:

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@shirwal.local` | `admin123` |
| Vendor | `vendor@shirwal.local` | `vendor123` |

Use the admin account to approve a submitted vendor business. Approval changes that local account to a vendor. Use the vendor account to accept, reject, or complete bookings for its own business.

## What you can test

1. Register a normal customer account.
2. Browse vendors and create a booking request.
3. View and cancel that booking from **My bookings**.
4. Sign in as the internal admin to view all booking requests and approve vendor applications.
5. Sign in as a vendor to accept, reject, or complete bookings for that vendor's business.
6. Start and send text chat messages. They persist after refresh in the same browser.

## WHAT YOU NEED TO DO MANUALLY

Nothing is required to run the internal version. If you later need real multi-device accounts, real-time chat, and shared data, a backend service such as Firebase must be deliberately reintroduced and configured.
