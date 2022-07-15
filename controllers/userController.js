"use strict"

const { User } = require('../models');

class UserController {
  static async register(req, res) {
    try {
      const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "admin",
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      }

      const createUser = await User.create(newUser);

      res.status(201).json({
        statusCode: 201,
        newUser: {
          id: createUser.id,
          email: createUser.email
        }
      })
    } catch (err) {
      let code = 500;
      let msg = "Internal Server Error";

      
    }
  }
}

module.exports = UserController;