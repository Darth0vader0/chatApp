import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUserForSidebar, sendMessages,getMessages } from '../controllers/messages.controller.js';
const router =express.Router();

router.get('/users',protectRoute,getUserForSidebar);
router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessages)

export default router;