const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const CustomError = require("../../utils/customError");
const { generateToken } = require("../../utils/auth");

async function registerUser(args) {
  try {
    const errorDetails = [];
    let { email, password } = args.userInput;
    const newUser = {
      ...args.userInput,
    };
    const existingUser = await User.findOne({ email });
    if (existingUser)
      throw new Error("A user with the given email already exists");

    const hashedPassword = await bcrypt.hash(password, 15);
    newUser.password = hashedPassword;

    const user = await User.create(newUser);
    const token = await generateToken(user);
    console.log(token);
    return {
      ...user._doc,
      token,
    };
  } catch (error) {
    // console.log(error);
    throw new Error(error);
  }
}

async function loginUser(args, context) {
  try {
    console.log(context.user);
    const errorDetails = [];
    let { email, password } = args;
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new Error("Email does not exist");

    const isValidPassword = await bcrypt.compareSync(
      password,
      existingUser.password
    );
    if (!isValidPassword)
      throw new Error("Invalid credentials, email or password incorrect");

    const token = await generateToken(existingUser);
    console.log(token);
    return {
      ...existingUser._doc,
      token,
    };
  } catch (error) {
    // console.log(error);
    throw new Error(error);
  }
}

async function getUserById(args, context) {
  // console.log(context.user);
  if (context.user) {
    const user = await User.findOne({ _id: args.user_id })
      .populate("properties")
      .populate("funds");
    console.log(user);
    return user;
  }

  throw new Error("You need to be logged in to do that");
}

module.exports = {
  getUserById,
  registerUser,
  loginUser,
};
