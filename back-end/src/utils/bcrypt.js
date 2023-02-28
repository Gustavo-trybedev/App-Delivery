const bcrypt = require('bcryptjs');

function encryptPassword(password) {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  return encryptedPassword;
}

function checkPassword(loginPassword, userPassword) {
  const isValid = bcrypt.compareSync(loginPassword, userPassword);
  return isValid;
}

module.exports = {
  encryptPassword, checkPassword
}