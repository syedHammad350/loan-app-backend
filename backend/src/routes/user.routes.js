import express from 'express'
import { create_user, signin_user } from '../controller/auth.controller.js'


const AuthRoutes=express.Router()
AuthRoutes.post("/signup",create_user)
AuthRoutes.post("/login",signin_user)




export default AuthRoutes