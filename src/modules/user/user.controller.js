const userQuery = require('./user.query');
const userController = {};

userController.registerUser = async function (request, response) {
  try {
    const reqBody = request.body;
    const userDetails = {
      firstName: reqBody.firstName,
      lastName: reqBody.lastName,
      emailId: reqBody.emailId,
      password: reqBody.password,
      createBy: "system-admin",
      updatedBy: "system-admin"
    }
    const userResp = await userQuery.registerUser(userDetails);
    console.log(userResp);
    response.status(200).json({ msg: "User successfully registered!" }).end();
  } catch (err) {
    console.log(err);
  }
}

module.exports = userController;