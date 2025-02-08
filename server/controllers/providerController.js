const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../bd.json');

const getProviders = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const { page = 1, limit = 10 } = req.query;
  const start = (page - 1) * limit;
  const end = page * limit;
  res.json(data.slice(start, end));
};

const addProvider = (req, res) => {
  const { name, businessName, address } = req.body;
  if (!name || !businessName || !address) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const data = JSON.parse(fs.readFileSync(filePath));
  if (data.find(p => p.name === name)) {
    return res.status(400).json({ error: "Provider already exists" });
  }
  data.push({ name, businessName, address });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Formatear JSON para mayor legibilidad
  res.status(201).json({ message: "Provider added" });
};

const deleteProvider = (req, res) => {
  const { name } = req.params;
  let data = JSON.parse(fs.readFileSync(filePath));
  const initialLength = data.length;
  data = data.filter(p => p.name !== name);
  if (data.length === initialLength) {
    return res.status(404).json({ error: "Provider not found" });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Formatear JSON para mayor legibilidad
  res.status(200).json({ message: "Provider deleted" });
};

module.exports = {
  getProviders,
  addProvider,
  deleteProvider
};