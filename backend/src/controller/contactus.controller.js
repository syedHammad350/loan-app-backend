import nodemailer from "nodemailer";
import contact from "../model/contact.model.js";

export const contactus=async(req,res)=>{
    try {
        const {name,email,phone,message}=req.body;
    if(!name||!email||!message){
        return res.status(400).json({msg:"Please fill in all fields"});
    }
    const newcontact=new contact({
        name,
        email,
        phone,
        message
    })
    await newcontact.save();
    const transporter = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    });
  const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `New Contact from ${name}`,
  text: message,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #f7f9fc; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #2c3e50;">📨 New Contact Message - Loan App</h2>
        <p style="font-size: 14px; color: #7f8c8d;">You’ve received a new inquiry from your website's contact form.</p>
      </div>

      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
        <p><strong style="color: #34495e;">👤 Name:</strong> ${name}</p>
        <p><strong style="color: #34495e;">📧 Email:</strong> ${email}</p>
        <p><strong style="color: #34495e;">📞 Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong style="color: #34495e;">💬 Message:</strong></p>
        <p style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; color: #2c3e50;">${message}</p>
      </div>

      <div style="text-align: center; margin-top: 30px; font-size: 13px; color: #95a5a6;">
        <p>This message was sent via the <strong>LoanApp Contact Form</strong></p>
        <p>123 Main Street, karachi, Pakistan</p>
      </div>
    </div>
  `
};

     await transporter.sendMail(mailOptions);
     res.status(200).json({message:"message send successfully"});
     
    } catch (error) {
        return res.status(500).json({
      message: error.message,
    });
    }
}