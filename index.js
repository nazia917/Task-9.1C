const express = require("express");
const dotenv = require("dotenv");
const { sendWelcomeEmail } = require("./emailservice");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Welcome to DEV@Deakin app!");
});

// Subscribe route
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  try {
    const response = await sendWelcomeEmail(email);
    res.json({ success: true, response });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
