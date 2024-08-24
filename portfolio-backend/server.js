const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Sample API Endpoints
app.get('/api/skills', (req, res) => {
    res.json([
        { name: 'JavaScript', level: 'Expert' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        // Add more skills
    ]);
});

app.get('/api/projects', (req, res) => {
    res.json([
        {
            title: 'Clash of Brains',
            description: 'A 1v1 quiz application...',
            github: 'https://github.com/AdityaRaj212/Clash-of-brains',
            liveDemo: 'https://clashofbrains.vercel.app/',
            technologies: ['React', 'Node.js', 'MongoDB'],
        },
        // Add more projects
    ]);
});

// Contact form endpoint (optional)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Process form data (e.g., send an email)
    res.status(200).send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
