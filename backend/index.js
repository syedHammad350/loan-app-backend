import express from 'express'
import cors from "cors"

import mongo_connect from './src/config/db.js';
import dotenv from 'dotenv';
import AuthRoutes from './src/routes/user.routes.js';
import loanroutes from './src/routes/loan.routes.js';
import imageRoute from './src/routes/image.routes.js';
import contactRoute from './src/routes/contactus.routes.js';
// import router from './src/routes/contactRoutes.js';
// import router from './src/routes/contactus.routes.js';
// import ImageRoute from './src/routes/image.routes.js';
// import imageRoute from './src/routes/image.routes.js';




const app=express()
const Port=7822 || process.env.PORT

dotenv.config();

app.use(express.json())
app.use(cors())

mongo_connect()


app.use('/api',AuthRoutes)
app.use('/sigin',AuthRoutes)


app.use('/ipa',loanroutes)
app.use('/Api',imageRoute)

    // app.use('/us',router)
    // app.use("/pai", router);
    app.use('/pia',contactRoute)





app.listen(Port, () => {
  console.log("server is running");
});
