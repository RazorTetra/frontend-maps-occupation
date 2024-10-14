const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages');
const barrelFilePath = path.join(directoryPath, 'index.ts');

fs.readFile(barrelFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Hapus ekspor biasa
  const cleanedData = data.replace(/^export \* from .*$\n?/gm, '');

  fs.writeFile(barrelFilePath, cleanedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Barrel file cleaned successfully!');
  });
});
