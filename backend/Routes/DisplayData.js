// const express = require('express');
// const router = express.Router();

// router.post('/foodData',(req,res)=>(
//     try {
//         res.send(global.food_items)
//     } catch (error) {
//         console.error(error.message);
//         res.send("server error")
        
//     }
// ))

// module.exports = router;

// const express = require('express');
// const router = express.Router();

// router.post('/foodData', (req, res) => {
//   try {
//     res.send(global.food_items,global.foodCategory);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();

// router.post('/foodData', (req, res) => {
//   try {
//     res.send(global.food_items,global.foodCategory);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const foodcategoryDb = require('../models/FoodCategory');
const foodItemDb =require('../models/FoodItems');

router.post('/foodData', (req, res) => {
  try {
    
    const foodData = {
      food_items: global.food_items,
      food_category: global.foodCategory
    };
    res.send({foodData});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.get('/foodData', async(req, res) => {
  let arr1;
  let arr2;
  try {
    await foodcategoryDb.find().then((data => res.send(data))).catch(err => console.log(err));
    // await foodItemDb.find().then((data => arr2 = data)).catch(err => console.log(err));

    // const foodData = {
    //   food_items: arr1,
    //   food_category: arr2
    // };
    // res.send({foodData});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

module.exports = router;

