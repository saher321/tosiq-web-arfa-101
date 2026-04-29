import express from 'express'
import { allUsers, createUser, filteredUser, forgotPassword, login } from './user.controller.js';

const userRoute = express.Router();

userRoute.get("/users", allUsers);

userRoute.get("/users/:role", filteredUser);
userRoute.post("/create", createUser);
userRoute.post("/login", login);
userRoute.post("/forgot-password", forgotPassword);

export default userRoute