import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// basically what i did here us installed express and created PORT 5000 to run the app
// Database isn't created base on the instruction from Mark
// the DevOps guy can create an independent subdomain to host this and edit the "proxy": "http//localhost500" to "proxy": "server_side_host_url"
// with that the front end will be automatically linked with back end