import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { con } from "../config/con_db.js";

//getting the registrer infomation
 export const Registrer =  async (req, res) => {
  const {firstName,lastName,email,role,study_course,student_level,password} = req.body;

  const sql = 'SELECT * FROM `profile_id` WHERE email = ?';
  //check if the user exits if not insert in to table
  con.query(sql, [email], async (err, result) => {
    if (err) throw err;

    if (result[0]) {
      res.json({ message: "account with email exits" });
    }else{
    const hashpassword = await bcrypt.hash(password, 10);
    const student_id = firstName +"_" + firstName.length;
    if(role == "admin"){
      const role = "admin";
    }else{
     const role = "student";
    }
    con.query('INSERT INTO `profile_id`(`firstName`, `lastName`, `email`, `role`, `student_id`, `student_point`,`study_course`,`student_level`, `student_progress`,`merit_bandage`, `group_id`, `password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',[firstName,lastName,email,role,student_id,'0',study_course,student_level,'0','novice',student_id,hashpassword], (error,results) =>{
  if(error) throw res.json(error);
  return res.json({message:"Account Created"});
    });
    }
  });
};

 export const Login = async(req,res) =>{
  const {email,password} = req.body;

   const sql = 'SELECT * FROM `profile_id` WHERE email = ?';
  con.query(sql,[email], async (err,result) =>{
    if(err) throw err;

  if (!result[0]) {
    res.json({message: "Email Not Found"});
  }else{
    const passwordH = await bcrypt.compare(password,result[0].password);
   if (!passwordH) {
    res.json({message: "Password is Not Correct"});
   }else{
    //token for verifying the user
    const token = jwt.sign({id: result[0].student_id},"userlogin",{
      expiresIn: 86400,
    });
    res.json({token, userID: result[0].student_id});
   }
  }
  });
};