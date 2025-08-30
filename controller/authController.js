import axios from 'axios';
import jwt from 'jsonwebtoken'
import {User} from '../model/userModel.js';

function generateToken(payload) {
  const userData = { name: payload }
  const token = jwt.sign(userData, process.env.SECRET_JWT, { expiresIn: "1h" });
  return token;
}

export async function loginController(req, res) {
  const { name } = req.body;
  // console.log('loginController name:', name);

  if (!name) return res.status(400).json({ message: 'name is required' });

  const token = generateToken(name);
  return res.status(200).json({ message: 'Success', user: name, token });
}

export async function fetchFromApi(req, res) {
  try {
    const response = await axios.get('https://dummyjson.com/users?limit=5');
    const users = (response && response.data && response.data.users) ? response.data.users : [];

    if (!users.length) return res.status(204).json({ message: 'No users to insert' });

    // Map API objects to match userModel schema
    const docs = users.map(u => ({
      name: {
        firstname: u.firstName ,
        lastname: u.lastName ,
        maidenname: u.maidenName
      },
      address: {
        address: u.address.address,
        city: u.address.city ,
        state: u.address.state ,
        stateCode: u.address.stateCode,
        postalCode: u.address.postalCode
      }
    }));
    // console.log(docs);
    

    const inserted = await User.insertMany(docs, { ordered: false });

    return res.status(201).json({ message: 'Users inserted', insertedCount: inserted.length, data: inserted });
  } catch (err) {
    console.error('fetchFromApi error:', err);
    return res.status(500).json({ message: 'Failed to fetch or insert users', error: err.message });
  }
}

export async function searchuser(req,res) {
  const {name} = req.query;
  const document = await User.findOne({"name.firstname" : name })
  return res.status(400).json(document)
}