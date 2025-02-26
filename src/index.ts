import express, { Response, Request } from "express";

const app = express();
const port = 3000;

app.get("/check", (req: Request, res: Response) => {
    res.send("Server is running");
});

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hi there from the server!"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});