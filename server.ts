import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ensure data directory exists for spreadsheet CSV logging
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const csvFilePath = path.join(dataDir, 'bookings.csv');
const jsonFilePath = path.join(dataDir, 'bookings.json');

// Initialize CSV header if file doesn't exist
if (!fs.existsSync(csvFilePath)) {
  const headers = 'ID,Timestamp,Name,Email,Phone,Stage,Service,Preferred Date,Preferred Time,Notes,Status\n';
  fs.writeFileSync(csvFilePath, headers, 'utf8');
}

// In-memory / file backup store
const getBookings = () => {
  if (fs.existsSync(jsonFilePath)) {
    try {
      const data = fs.readFileSync(jsonFilePath, 'utf8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
  return [];
};

const saveBookings = (bookings: any[]) => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(bookings, null, 2), 'utf8');
};

// API Endpoint: Submit new booking / enquiry
app.post('/api/bookings', (req, res) => {
  try {
    const { name, email, phone, stage, service, preferredDate, preferredTime, notes } = req.body;

    if (!name || (!email && !phone)) {
      return res.status(400).json({ error: 'Name and at least one contact method (Email or Phone) are required.' });
    }

    const id = 'BK-' + Date.now().toString(36).toUpperCase();
    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });

    const newBooking = {
      id,
      timestamp: formattedDate,
      isoTimestamp: timestamp,
      name,
      email: email || '',
      phone: phone || '',
      stage: stage || 'General',
      service: service || 'Private Reformer',
      preferredDate: preferredDate || 'Flexible',
      preferredTime: preferredTime || 'Flexible',
      notes: notes || '',
      status: 'New Enquiry'
    };

    // 1. Save to JSON array
    const bookings = getBookings();
    bookings.unshift(newBooking);
    saveBookings(bookings);

    // 2. Append row to CSV spreadsheet
    const escapeCsv = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;
    const csvRow = `${id},${escapeCsv(formattedDate)},${escapeCsv(name)},${escapeCsv(email)},${escapeCsv(phone)},${escapeCsv(stage)},${escapeCsv(service)},${escapeCsv(preferredDate)},${escapeCsv(preferredTime)},${escapeCsv(notes)},New Enquiry\n`;
    fs.appendFileSync(csvFilePath, csvRow, 'utf8');

    // 3. Generate pre-filled WhatsApp message link
    const waText = encodeURIComponent(
      `Hi Charlotte! I've just sent a booking request on your website.\n\n` +
      `*Name:* ${name}\n` +
      `*Stage:* ${stage}\n` +
      `*Service:* ${service}\n` +
      `*Preferred:* ${preferredDate} (${preferredTime})\n` +
      `*Ref:* ${id}\n\n` +
      `Looking forward to speaking with you!`
    );
    const whatsappUrl = `https://wa.me/447807908364?text=${waText}`;

    return res.status(201).json({
      success: true,
      booking: newBooking,
      whatsappUrl,
      message: 'Booking enquiry saved to spreadsheet successfully.'
    });
  } catch (err: any) {
    console.error('Booking error:', err);
    return res.status(500).json({ error: 'Failed to process booking enquiry.' });
  }
});

// API Endpoint: Get all bookings (JSON)
app.get('/api/bookings', (req, res) => {
  const bookings = getBookings();
  res.json({ count: bookings.length, bookings });
});

// API Endpoint: Download CSV Spreadsheet directly
app.get('/api/bookings/export.csv', (req, res) => {
  if (fs.existsSync(csvFilePath)) {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="Charlotte_InAlignment_Bookings.csv"');
    fs.createReadStream(csvFilePath).pipe(res);
  } else {
    res.status(404).send('No bookings CSV found yet.');
  }
});

// Vite middleware for dev / static server for prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
