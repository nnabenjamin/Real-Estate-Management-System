export const userRegister = async (req,res,next) =>{
  const {firstName,lastName,email,password} = req.body;

  if (firstName !== "") {
    if (lastName !== "") {
      if (email !== "") {
    if (password !== "") {
    if (password.length > 5 && password.length < 15) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      const ptext = email.indexOf("@student.babcock.edu.ng");
      if (ptext !== -1) {
        return next();
      }else{
    return res.json({message:"Email must be a Babcock mail"});
  }
    }else{
    return res.json({message:"Invalid Email"});
  }
  }else{
    return res.json({message:"password password must be more than 5 and less than 15"});
  }
  }else{
    return res.json({message:"password can't be empty"});
  }
  }else{
    return res.json({message:"email can't be empty"});
  }
  }else{
    return res.json({message:"Last Name can't be empty"});
  }
  }else{
    return res.json({message:"First Name can't be empty"});
  }
}