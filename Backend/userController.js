const asyncHandler = require('express-async-handler');
const User = require('./userModel');

const userRegister = asyncHandler(async(req, res) => {
    const {id,first_name,last_name, email, income, phone_price, car, gender, quote, city} = req.body;


    const userExists = User.find({email});

    const user = await User.create({
        id:id, 
        first_name: first_name,
        last_name: last_name,
        email:email, 
        gender: gender,
        income: income,
        city: city,
        car: car,
        quote: quote,
        phone_price: phone_price,
    })

    if(user){
        const {_id, id, first_name, last_name, email, phone_price, car, gender, quote, city} = user;
        res.status(200).json({
            _id, id, first_name,last_name, email, gender, income, city, car, quote, phone_price, 
        })
    }else{
        res.status(400);
        throw new Error("Invalid");
    }

});

const getDetails = asyncHandler(async(req, res) =>{
    await User.find({
        $and: [
            { income: { $lt: '$5' } }, 
            { car: { $in: ['BMW', 'Mercedes-Benz']} } 
        ]
    })
        
            .then((data) => {
                //console.log(data);
                res.status(200).send(data);
            })
            .catch((err) => console.log(err));
    
})

const getDetails1 = asyncHandler(async(req, res) => {
    await User.find({
        $and: [
            { gender:{ $in: 'Male'} }, 
            {phone_price: {$gt: '10000'}}
        ]
     })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}) 

const getDetails2 = asyncHandler(async(req, res) => {
    try {
        const users = await User.find({last_name: /^M/ });
        let rel = [];
        for (let i = 0; i < users.length; i++) {
          let user = users[i];
          if (user.last_name.startsWith("M") && user.quote.length > 15 && user.email.match(new RegExp(user.last_name, "i"))) {
            rel.push(user);
          }
        }
        res.json(rel);
      } catch (err) {
        console.log(err);
      }
    
})

const getDetails3 = asyncHandler(async(req, res) => {
    await User.find({
        $and: [
            { car: {$in: ['BMW', 'Mercedes-Benz', 'Audi']} },
            { email: {$not: /\d/} },
        ]
    })
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.log(err);
    })
})

const getDetails4 = asyncHandler(async(req, res) => {
    await User.aggregate([
        {
            $addFields: {
              income: { $toDouble: { $substr: [ "$income", 1, -1 ] } }
            }
        },
        {
            $replaceWith: {
              $mergeObjects: [ "$$ROOT", { income: "$income" } ]
            }
        },
        
        { $group: { _id: "$city", count: { $sum: 1 }, avg_income: { $avg: "$income" } } },
        {
            $addFields: {
                avg_income: { $round: ["$avg_income", 2] }
            }
        },
        { $sort: { count: -1 } },
        { $limit: 10 }
    ])
    .then((data) => {
        res.status(200).send(data);
    })
    .catch((err) => {
        console.log(err);
    })    
});

  

module.exports = {
    userRegister,
    getDetails,
    getDetails1,
    getDetails2,
    getDetails3,
    getDetails4,
}