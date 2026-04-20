import express from "express";
import bcrypt from "bcrypt";
import { getDb } from "../database/database.js";

const router = express.Router();

router.post('/register', async (req, res) => {
  const {login, password} = req.body

  if(!login || !password){
    res.json({success: false, error: "Login or password is empty!"});
    res.end();
    return;
  }

  if(password.length < 6){
    res.json({success: false, error: "Password is too short!"});
    res.end();
    return;
  }

  const db = getDb();
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.run(`INSERT INTO users(login, password) VALUES(?, ?)`, [login, hashedPassword]); // Вносим данные в базу данных
  console.log("SAVE SUCCESS")
  res.json({success: true, message: "Register Success!"}); // Возвращаем ответ
  res.end(); // Завершаем ответ
});

router.post('/login', async (req, res) => {
  const {login, password} = req.body
  const db = getDb();

  
  const user = await db.get(`SELECT * FROM users WHERE login = ?`, [login]);

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(isPasswordValid){
    res.json({success: true, message: "Welcome!"});
  }
  else{
    res.json({success: false, error: "Error!"});
  }
});

export default router;