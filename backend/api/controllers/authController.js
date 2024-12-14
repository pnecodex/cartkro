import models from "../models";
import SendMail, { Email } from "../providers/mail";
import { hashPassword, jwtToken, ComparePassword } from "../utils";
import nodemailer from "nodemailer";
import { config } from "dotenv";
// import { sign } from 'jsonwebtoken';
config();
const { User } = models;
const { Productsellerdetail } = models;
const { Order } = models;

const auth = {
  async fetchAll(req, res, next) {
    try {
      const user = await User.findAll({
        //  where:{
        //      userId:decoded.userId
        // },
        include: [
          {
            // model: Productsellerdetail,
            as: "productsellerdetails",
            model: Order,
            as: "orders",
          },
        ],
      });
      // return res.status(201).send({product,image_url:{image_url}, message:{success:"all product show successfully!"}})
      return res.json({
        user,
        message: { success: "all user show successfully!" },
      });
    } catch (error) {
      return next(new Error(error));
    }
  },
  async signUp(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const hash = hashPassword(password);
      const user = await User.create({ name, email, password: hash });
      const token = jwtToken.createToken(user);
      await Email(user);
      return res.status(201).send({ token, user });
    } catch (e) {
      return next(new Error(e));
    }
  },
  async signIn(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user && ComparePassword(password, user.password)) {
        const { name, id, verifiedAccount } = user;
        console.log(user);
        const token = jwtToken.createToken(user);
        return res
          .status(200)
          .send({
            token,
            user: { id, name, email, verifiedAccount },
            message: { success: "You are login successfull!" },
          });
      } else {
        return res
          .status(400)
          .send({ error: "invalid email/password does not matched" });
      }
    } catch (e) {
      return next(new Error(e));
    }
  },
  async fetchOneUserUnverified(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (user.verifiedAccount) {
        return res.json({
          user: user.verifiedAccount,
          message: { success: "your account is verified!" },
        });
      }
      return res.json({
        user: user.verifiedAccount,
        message: {
          success:
            "your account not verified! Pleas check the email and your account verified",
        },
      });
    } catch (error) {
      return next(new Error(error));
    }
  },
  async AccountVerification(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!user) {
        return res.status(401).send({ message: "user not Found!" });
      }
      const values = {
        verifiedAccount: req.body.verifiedAccount || user.verifiedAccount,
      };
      const condition = { where: { id: req.params.id } };
      const data = User.update(values, condition);
      return res
        .status(200)
        .send({ data: data, message: "your Account is verified" });
    } catch (error) {
      res.status(400).send({ error: error });
      // return next(new Error(error))
    }
  },
};
export default auth;
