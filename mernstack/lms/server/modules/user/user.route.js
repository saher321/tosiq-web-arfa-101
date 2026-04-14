import express from 'express'
import { allUsers, createUser, filteredUser } from './user.controller.js';

const userRoute = express.Router();

userRoute.get("/users", allUsers);

userRoute.get("/users/:role", filteredUser);
userRoute.post("/create", createUser);

export default userRoute