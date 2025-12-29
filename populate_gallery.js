const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'frontend', 'src', 'data', 'vehicles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Always reset to current img and expand to 8
content = content.replace(/(\s+)img:\s*'([^']+)',(\s+)images:\s*\[[^\]]*\]/g, (match, p1, imgPath, p3) => {
    const images = Array(8).fill(`'${imgPath}'`).join(', ');
    return `${p1}img: '${imgPath}',${p3}images: [${images}]`;
});

fs.writeFileSync(filePath, content);
console.log('Repopulated images for all vehicles (8 copies each).');
