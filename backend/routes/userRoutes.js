import express from 'express';
const router = express.Router();
import { authUser, registerUser, logout, getUserProfile, updateUserProfile  } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';



// Routes - User Routes
router.post('/auth', authUser);
router.post('/register', registerUser);
router.post('/logout', logout);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
// router.get('/profile', getUserProfile);
// router.put('/profile', updateUserProfile);




export default router;