import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {config} from 'dotenv';

// require('dotenv').config();
config();
export const jwtToken = {
  createToken({ id, email }) {
    return jwt.sign(
      { userId: id, email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h', });
    console.log(deocded,'them decoded');
    return decoded;
  }
};
 export const hashPassword = (password) => bcrypt.hashSync(password,12);
 export const ComparePassword = (password, hash) => bcrypt.compareSync(password, hash);


