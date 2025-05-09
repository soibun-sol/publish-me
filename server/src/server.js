import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = parseInt(process.env.PORT || '3003');
const buildPath = path.join(__dirname, '../../client/build');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(buildPath));
    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });
}
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from TypeScript server!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
