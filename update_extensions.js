const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'frontend', 'src', 'data', 'vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace .png, .jpg, .jpeg, .webp with .webp (standardizing)
// Also ensures we don't end up with .webp.webp
content = content.replace(/\.(png|jpe?g|webp)'/gi, ".webp'");

fs.writeFileSync(filePath, content);
console.log('Updated all image extensions to .webp');
