const { request, response } = require('express')
const userModel = require('../models/signUpModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_TOKEN = 'abcdg145hijk,./lmn';
const loginUser = async (request,response)=>{
    const {email, password} = request.body
    const validUser = await userModel.findOne({email : request.body.email})
    if(!validUser)
    {
        return response.status(401).json({message : `Invalid Email`})
    }
    if(bcrypt.compare(password,validUser.password))
    {
        const AUTH_token = jwt.sign({email : validUser.email},JWT_TOKEN)
        if(response.status(201))
        {
            return response.json({status:'Ok',token : AUTH_token})
        }
    }
    response.status(401).json({message : 'Invalid password'})
}

module.exports = {loginUser}