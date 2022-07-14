"use strict"

const bcrypt = require('bcryptjs');

class Password {
  static hash(password) {
    const hash = bcrypt.hashSync(password);
    return hash;
  }
}

module.exports = Password;