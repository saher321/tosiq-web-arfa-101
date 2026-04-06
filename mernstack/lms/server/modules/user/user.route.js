import express from 'express'
import { allUsers, filteredUser } from './user.controller.js';

const userRoute = express.Router();

userRoute.get("/users", allUsers);

userRoute.get("/users/:role", filteredUser);

export default userRoute