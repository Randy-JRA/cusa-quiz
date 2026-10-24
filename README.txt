CUSA Social Teaching Quiz

Run locally: open index.html. The quiz works offline on a phone or computer.

Publish: upload this folder to Vercel as a static site. No build command is required; use the project folder as the root and leave the output directory as the project root.

Offline after publishing: learners must open the Vercel link once while online and leave the page open until it finishes loading. The service worker then saves the app shell, questions, study notes and games. After that, the same link can reopen while offline. First-time visitors still need an internet connection. Browsers may take a few seconds to install the offline cache after the first visit.

On supported browsers, learners can also use the browser menu to install or add the quiz to their home screen.

Question files live in /questions. The study-note cards are in study-notes.js.
