// // express js(backend framework)

const express = require('express')
const bodyparser = require('body-parser')

const cors = require('cors')
// // const model = require('./db.js')
const Model = require('./db.js'); // change 'model' to 'SignUpModel'

const app = express()


app.use(bodyparser.json())
app.use(cors())

// // use API(application program interface)
// // 1.get(get data from database)
// // 2.post(post(save)data to database)

app.get('/',function (req,res){
    // res.send("i am in backend")
    Model.find().then(p=>res.send(p)).catch(err=>console.log(err))

});

// // use api post for save data into database

app.post('/',function (req,res){
 
    const data = new Model({
        "Name":req.body.Name,
        "Address":req.body.Address,
        "Password":req.body.Password
    })
    data.save().then(d=>res.send({"message":"Data Save Successfully"}))
    .catch(err=>console.log(err))

  })

  app.post('/login',function(req,res){
// === data and datatype match
    Model.find({"Name":req.body.Name})
    .then(r=>{
        if(r[0].Name===req.body.Name && r[0].Password === req.body.Password){
            res.send({"message":"Login Successfully"})

        }
        else{
            res.send({"message":"Login Failed"})

        }

        })
    
    
    
    .catch(a=>res.send({"message":"Invalid Credential"}))
  })

  // DELETE Endpoint
// app.delete('/Update', function (req, res){
//     const { Name } = req.body.Name;
//     try {
//         const deletedUser = Name.findOneAndDelete({ Name:Name});
//         if (deletedUser) {
//             res.send({ message: 'User deleted successfully', user: deletedUser });
//         } else {
//             res.send({ message: 'User not found' });
//         }
//     } catch (error) {
//         res.send({ message: 'Error deleting user', error: error.message });
//     }
// });

// app.delete('/Update',function(req,res){
// // app.delete('/Update', function(req, res){
//     const { Name } = req.body;
  
//     if (!Name) {
//       return res.status(400).send({ message: 'Name is required' });
//     }
  
//     Model.findOneAndDelete({ Name: Name })
//       .then((deletedUser) => {
//         if (deletedUser) {
//           res.status(200).send({ message: 'User deleted successfully', user: deletedUser });
//         } else {
//           res.status(404).send({ message: 'User not found' });
//         }
//       })
//       .catch((error) => {
//         console.error('Error deleting user:', error);
//         res.status(500).send({ message: 'Error deleting user', error: error.message });
//       });
//   });
  



app.listen(5000);


