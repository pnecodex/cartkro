import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {config} from 'dotenv';

// require('dotenv').config();
config();
export const jwtTokens = {
  createTokens({ id }) {
    return jwt.sign(
      { sellershopId: id},
      process.env.JWT_SECRETS,
      { expiresIn: '24h' }
    );
  },
  verifyTokens(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRETS, { expiresIn: '24h', });
    return decoded;
  }
}

