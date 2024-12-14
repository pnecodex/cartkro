import jwt, { decode } from 'jsonwebtoken';
import { config } from 'dotenv';
import models from '../models';
import { jwtToken } from '../utils';
import { decodeBase64 } from 'bcryptjs';
const { User } = models;
config();
export default (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({ error: 'Unauthorized' });
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24' }, (error, decoded) => {
        if (error) {
            return res.status(401).send({ error: "something want wrong!" });
        }
        req.decoded = decoded;
        User.findByPk(decoded.userId).then((user) => {
            if (!user) {
                return res.status(401).send({ error: 'User does not exist' });
            }
            next();
        })
    })

}