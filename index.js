import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import dbConnect from "./config/db.js";
import AdminRoutes from "./routes/admin.routes.js";
import AuthRoutes from "./routes/auth.routes.js";
import PostRoutes from "./routes/post.routes.js";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

// Database connection
dbConnect();

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/posts", PostRoutes);
// app.use("/api/comments", CommentRoutes);
// app.use("/api/tags", TagRoutes);
// app.use("/api/votes", VoteRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server (listening the server)
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
