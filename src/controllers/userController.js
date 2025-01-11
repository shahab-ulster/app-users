const bcrypt = require("bcrypt");
const User = require("../models/user");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser };
