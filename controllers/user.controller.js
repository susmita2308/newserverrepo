const User = require('../models/user.model')

const UserCtrl = {
    insert :( req,res) =>{
const u = req.body;
new User(u).save()
.then(result =>{
res.status(200).send({message:"Registation successful",data:result})
}) .catch(err=>{
    res.status(500).send({message:"Could not register" , error:err });
})

    },

   update :( req,res) =>{},


    delete :( req,res) =>{},


getOne :( req,res) =>{},

getAll :( req,res) =>{},

security :( req,res) =>{},



}
module.exports = UserCtrl;