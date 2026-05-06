import express from 'express';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {

  try {

    const users = await User.find().select('-password');

    res.json({
      users
    });

  } catch (error) {

    res.status(500).json({
      message: 'Error',
      error: error.message
    });
  }
});

export default router;