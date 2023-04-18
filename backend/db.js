const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood1:Yash12345@cluster0.jcrkud2.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
    mongoose.set('strictQuery', false);

    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    // fetched_data.find({}).toArray(function (err, data) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                        // console.log(global.food_items)
                    }
                })
                // if(err)console.log(err);
                // else{
                //     global.food_items = data;
                // }

            })
        }
    });

}

module.exports = mongoDB;