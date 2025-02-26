import express, { Response, Request } from "express";

const app = express();
const port = 3000;

app.get("/check", (req: Request, res: Response) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});