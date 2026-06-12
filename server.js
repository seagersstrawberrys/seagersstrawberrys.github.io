const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3000;
const CONTENT_FILE = path.join(__dirname, 'content.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(__dirname));

function readData() {
  return JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

app.get('/api/content', (req, res) => {
  try {
    res.json(readData());
  } catch (err) {
    res.status(500).json({ error: 'Failed to read content' });
  }
});

app.post('/api/content', (req, res) => {
  try {
    const current = readData();
    function mergeDeep(target, source) {
      for (const key of Object.keys(source)) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!target[key]) target[key] = {};
          mergeDeep(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
      return target;
    }
    writeData(mergeDeep(current, req.body));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save content' });
  }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: '/uploads/' + req.file.filename });
});

app.post('/api/content/:section/add', (req, res) => {
  try {
    const data = readData();
    const { section } = req.params;
    if (!Array.isArray(data[section])) {
      return res.status(400).json({ error: 'Not an array' });
    }
    const tmpl = req.body.template || {};
    data[section].push(tmpl);
    writeData(data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item' });
  }
});

app.delete('/api/content/:section/:index', (req, res) => {
  try {
    const data = readData();
    const { section, index } = req.params;
    if (!Array.isArray(data[section])) {
      return res.status(400).json({ error: 'Not an array' });
    }
    data[section].splice(parseInt(index), 1);
    writeData(data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

app.get('/api/images', (req, res) => {
  try {
    const files = fs.readdirSync(UPLOADS_DIR).filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f));
    res.json(files.map(f => ({ url: '/uploads/' + f, name: f })));
  } catch (err) {
    res.json([]);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Seager's website running at http://localhost:${PORT}`);
  console.log(`Admin panel at http://localhost:${PORT}/admin.html`);
});
