import express from "express";
import { deleteUser, GetUser } from "../controllers/admin.controller.js";
import { isAdmin } from "../middleware/verifyToken.js";

const AdminRoutes = express.Router();

AdminRoutes.get("/getusers", isAdmin, GetUser);
AdminRoutes.post("/dele/:id", isAdmin, deleteUser);

export default AdminRoutes;
