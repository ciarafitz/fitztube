## FitzTube
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses the Collab's YouTube API to build a video playlist app. 
Has ability to:
 
 * List/view videos fetched from API
 * Create new playlists
 * Add or remove videos from playlists
 * Rearrange videos in a a playlists

## Proxy Server
The API call has been configured to be forwarded through the following proxy server in order to add no-cors policy headers:

https://dry-sierra-68794.herokuapp.com


## Getting Started

Make sure you have Node.js installed along with the following Node.js packages:
* next: 12.1.4
* react: 18.0.0
* react-dom: 18.0.0

First, run the development server:

```bash
npm run dev
```
Observe the output to see which port the web server started on. Visit the following web adress on a web browser:

https://localhost/<port>

<br>
**Note:** When running a Node web server, the default port is 3000. If the default port is already being used, the web server will connect to the next available port.






