const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// LOGIN
app.get('/login/:email/:password', (req, res) => {
  const { email, password } = req.params;

  res.json({
    status: "success",
    message: "Welcome back! You are now logged in.",
    user: {
      email,
      password
    }
  });
});

// FORGOT PASSWORD
app.get('/forgotpassword/:email', (req, res) => {
  const { email } = req.params;

  res.json({
    status: "success",
    message: "If this email exists, a password reset link has been sent.",
    email
  });
});

// RESET PASSWORD
app.get('/reset/:password', (req, res) => {
  const { password } = req.params;

  res.json({
    status: "success",
    message: "Your password has been updated successfully.",
    newPassword: password
  });
});

// REGISTER
app.get('/register/:firstName/:lastName/:email/:password', (req, res) => {
  const { firstName, lastName, email, password } = req.params;

  res.json({
    status: "success",
    message: "Your account has been created. Welcome aboard!",
    user: {
      firstName,
      lastName,
      email,
      password
    }
  });
});
