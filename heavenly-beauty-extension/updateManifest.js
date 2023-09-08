const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../frontend', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

// Update the manifest content as needed
manifest.content_scripts[0].js = ["build/static/js/main.js"];

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
