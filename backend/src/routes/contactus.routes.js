import express from "express";
import { contactus } from "../controller/contactus.controller.js";


const contactRoute=express.Router();
contactRoute.post('/contact',contactus);
export default contactRoute