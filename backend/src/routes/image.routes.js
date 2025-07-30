
import express from 'express'
import multer from 'multer'
// import { storage } from '../config/Cloudinary.js'
// import { image } from '../controller/image.controller.js'
// import { storage } from '../config/Cloudinary.js'
import { image } from '../controller/image.controller.js'
import { storage } from '../config/Cloudinary.js'
// import image from '../controller/image.controller.js'
// import { storage } from '../config/cloudinary.js'
// import { storage } from '../config/cloudnary.js'
// import { image } from '../controller/image.controller.js'



const upload = multer({ storage: storage })


const imageRoute = express.Router()


imageRoute.post('/upload', upload.single("image"), image)

export default imageRoute