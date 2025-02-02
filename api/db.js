// api/db.js
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  try {
    const filePath = path.resolve('./db.json'); // Ajusta la ruta según donde esté tu db.json
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error leyendo el archivo JSON' });
  }
}