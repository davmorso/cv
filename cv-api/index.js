const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Leer el Excel
const workbook = XLSX.readFile('CV_David_Mora_Roca.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

// Endpoint para todo el CV
app.get('/api/cv', (req, res) => {
  res.json(data);
});

// Puedes crear más endpoints si lo deseas
// app.get('/api/experiencia', (req, res) => { ... });

app.listen(port, () => {
  console.log(`CV API running at http://localhost:${port}`);
});