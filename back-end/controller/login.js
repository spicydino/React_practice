const userModel = require("../models/user");

const loginController = async(req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({email: email,password:password});

    if(user){
      return res.json({success: 'user found'});
    }
    // console.log("Email received: ", email);
    // console.log("Password received: ", password);
    // res.status(200).send("okayy");
  };
  
  module.exports = loginController;