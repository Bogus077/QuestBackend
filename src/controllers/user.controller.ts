import Validator from 'validatorjs';
const bcrypt = require('bcrypt');
import { userSignUpRules } from '../utils/validationRules';
import {sequelize} from '../database/database.config';
import { UserModel } from '../models/index';

export async function testConnection(req, res) {
  try{
    const value = req;
    res.status(200).send('123');
  }catch(error){
    res.status(500).send(error);
  }
}

export async function signUp(req, res) {
  try{
    const requestData = await req.body;
    validateData(requestData, userSignUpRules);

    requestData.password = await bcrypt.hash(requestData.password, 8);
    const createdUser = await UserModel.create(requestData);

    res.status(200).send(createdUser);
  }catch(error){
    res.status(500).send(error);
  }
}

function validateData(data, rules) {
  const validation = new Validator(data, rules);

  if (validation.fails()) throw { errorMessage: validation.errors.all() };
}