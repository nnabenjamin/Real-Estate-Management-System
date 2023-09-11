import mysql_con from "mysql";

export const con = mysql_con.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"bu_project"
});

con.connect((err) =>{if(err) throw err});