# Dota 2 Ticker Chrome Extension

## Description

This is a Chrome extension that provides updates via websockets for selected Dota 2 games. It includes a ticker for incoming game data and a heatmap that reflects the intensity of activity in different areas of the Dota 2 map.

## Features

- Real-time game ticker
- Team board updates
- Dota 2 map heatmap

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed
- [Google Chrome](https://www.google.com/chrome/) installed
- [Git](https://git-scm.com/) installed

## Installation

### Clone the repository

\`\`\` 
git clone https://github.com/your-username/dota2-ticker-extension.git
\`\`\`

### Start the Backend Server 
\`\`\` 
cd into the backend folder
\`\`\`

\`\`\` 
npm install
\`\`\`

\`\`\` 
npm start
\`\`\`

### Install dependencies

\`\`\` 
cd into the heavenly-beauty-extension folder 
\`\`\`

\`\`\` 
npm install
\`\`\`

### Start the React development server

\`\`\` 
Comment in this line in the index.js file to run the project locally on localhost. 

 ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    testRoot
  );
\`\`\`

\`\`\` 
npm start
\`\`\`

## Loading the extension into Chrome

1. Open a new tab in Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" in the upper right corner if it's not already enabled.
3. Click on the "Load unpacked" button.
4. Navigate to the `frontend` folder of your project directory and click "Open".
5. The extension should be added to your extensions, in the extensions tab click the 3 dots(...) and hover over `This can Read and change Site Data` then `select When you click the extension`. 
6. Your extension should now be installed for local testing!

## Usage

1. Open the extension by clicking on its icon in the Chrome extension tray.
2. The Dota 2 game ticker and heatmap should start displaying data.
