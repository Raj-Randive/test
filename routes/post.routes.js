import express from "express";
import { createPost } from "../controllers/post.controller.js";

const PostRoutes = express.Router();

// Create a new post
PostRoutes.post("/post", createPost);

export default PostRoutes;
