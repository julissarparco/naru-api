import express from "express";
import cors from 'cors';
import { villageRouter } from "./routes/villageRouter";

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", villageRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Naru API!");
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});