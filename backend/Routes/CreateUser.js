// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const { body, validationResult } = require('express-validator');

// const bcrypt = require("bcryptjs");

// router.post('/createuser',
//   body('email').isEmail(),
//   body('name').isLength({ min: 5 }),
//   body('password', 'Incorrect password').isLength({ min: 5 }),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const salt = await bcrypt.genSalt(10);
//     let secPassword = await bcrypt.hash(req.body.password,salt)

//     try {
//       await User.create({
//         name: req.body.name,
//         password: req.body.password,
//         email: req.body.email,
//         location: req.body.geolocation
//       })
//       res.json({ success: true });
//     } catch (error) {
//       console.log(error)
//       res.json({ succes: false });
//     }
//   }
// );

// router.post('/loginuser',
//   body('email').isEmail(),
//   body('password', 'Incorrect password').isLength({ min: 5 }),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     let email = req.body.email;
//     try {
//       let userData = await User.findOne({ email: email });
//       if (!userData) {
//         return res.status(400).json({ errors: "try logging with correct email" })
//       }
//       if (req.body.password !== userData.password) {
//         return res.json({ errors: "try logging with correct password" })
//       }
//       res.json({ success: true });
//     } catch (error) {
//       console.log(error)
//       res.json({ success: false });
//     }
//   }
// );

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret ="MynameisYashvardhanShrimal"
router.post('/createuser',
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password', 'Password should be at least 5 characters long').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location
      })
      res.json({ success: true });
    } catch (error) {
      console.log(error)
      res.json({ success: false });
    }
  }
);

router.post('/loginuser',
  body('email').isEmail(),
  body('password', 'Password should be at least 5 characters long').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await User.findOne({ email: email });
      if (!userData) {
        return res.status(400).json({ errors: "Try logging in with correct email" })
      }
      const passwordcompare = await bcrypt.compare(req.body.password, userData.password)
      if(!passwordcompare){

      }
      let isMatch = await bcrypt.compare(req.body.password, userData.password);
      if (!isMatch) {
        return res.json({ errors: "Try logging in with correct password" })
      }

      const data = {
        user:{
          id:userData.id
        }
      }
      const authToken = jwt.sign(data,jwtSecret)
      res.json({ success: true, authToken:authToken });
    } catch (error) {
      console.log(error)
      res.json({ success: false });
    }
    
  }
);
module.exports = router;
