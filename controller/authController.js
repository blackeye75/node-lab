import jwt from 'jsonwebtoken'

function generateToken(payload) {
  const userData = {
    name:payload
  }
  const token = jwt.sign(userData, process.env.SECRET_JWT, { expiresIn: "1h" });
  
  return token;
}

export async function loginController(req, res) {
  const { name } = req.body;
  console.log('loginController name:', name);

  if (!name) return res.status(400).json({ message: 'name is required' });

  const token = generateToken(name);
  return res.status(200).json({ message: 'Success', user: name, token });
}