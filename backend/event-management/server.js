const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://root:Praveen@merneventmanagement.q4fup.mongodb.net/?retryWrites=true&w=majority&appName=MernEventManagement')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    description: String
  });
  
  const Event = mongoose.model('Event', eventSchema);
  
  // API Endpoints
  app.get('/events', async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.post('/events', async (req, res) => {
    try {
      const event = new Event(req.body);
      const savedEvent = await event.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  app.put('/events/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedEvent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  app.delete('/events/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Event.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});