import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import openaiRoutes from './routes/openai.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/openai", openaiRoutes);

app.get('/', (req, res) => {
  res.status(200).json({success:true, message: "✅ Running Succesfully" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))