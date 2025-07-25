import mongoose, { model, Schema } from "mongoose"


const loan_schema=new Schema({
    name:{
        type:String
    },
     cnic:{
        type:String
    },
    dob:{
        type:String
    },
    email:{
        type:String
    },
       phone:{
        type:String
    },
    address:{
        type:String
    },
     city:{
        type:String
    },
  loanAmount:{
        type:String
    },
        purpose:{
        type:String
    },
   employmentStatus:{
        type:String
    },
     monthlyIncome:{
        type:String
    },
     nationality:{
        type:String
    }
})
const apply_loan=model("loanform",loan_schema)
export default apply_loan