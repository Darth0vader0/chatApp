import express from 'express'
const routes = express.Router()
import { signup,login,logout ,updateProfile,checkUser} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

routes.post("/signup",signup);

routes.post("/login",login);

routes.post("/logout",logout);

routes.post("/updateProfile",protectRoute,updateProfile);

routes.get('/check',protectRoute,checkUser);


export default routes ;