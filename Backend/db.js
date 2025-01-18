// let mongoose  = require('mongoose');

// // mongoose.connect("mongodb://localhost:27017/studentsignup").then(()=>console.log("Connected!")).catch(error=>console.log(error))
// mongoose.connect("mongodb://localhost:27017/studentsignup")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(error => console.error("MongoDB connection error:", error));


// let column = new mongoose.Schema({
//     "Name":String,
//     "Address":String,
//     "Password":String
//     });


// // let model = mongoose.model('SignUp', column);
// let SignUpModel = mongoose.model('SignUp', column);



// // SignUpModel.find().then(r=>console.log(r)).catch(err=>console.log(err))
// module.exports = SignUpModel;






// // const InsData = [
// //         { Name: "Jane", Address:"Pune" , Password:"123" },
// //         { Name: "Rohit", Address:"Sambhajinagar" , Password:"1223" },
// //         { Name: "Rohan", Address:"Mumbai" , Password:"1233" }
// //         ];
    
//         // adding multiple data at one time
// // Students.insertMany(InsData)
// //         .then(() => console.log("Students added"))
// //         .catch(err => console.error("Error adding students:", err));



const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/studentsignup')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define schema
const columnSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  Password: { type: String, required: true },
});

// Create a model
const SignUpModel = mongoose.model('SignUp', columnSchema);

module.exports = SignUpModel;
