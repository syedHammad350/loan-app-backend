import apply_loan from "../model/loan.model.js";


export const create_loan= async (req,res)=>{
    try {
        const myloan= await apply_loan.create(req.body)
         return res.status(201).json({message:"Loan created successfully",myloan})
    } catch (error) {
         return res.status(500).json({ message:"An Error occured while creating an Form", 
           error:error.message });
    }
}
export const getting_loan= async (req,res)=>{
    try {
        const loan= await apply_loan.find()
         return res.status(201).json({message:"Loan data fached successfully",loan})
    } catch (error) {
         return res.status(500).json({ message:"An Error occured while getting an Form", 
           error:error.message });
    }
}
export const deleteing_loan= async (req,res)=>{
    try {
        const {id} =req.params
        const deleted_loan= await apply_loan.findByIdAndDelete(id)
        if (!deleted_loan) {
      return res.status(404).json({ message: "Loan not delete found." });
    }
         return res.status(201).json({message:"Loan deleted successfully",deleted_loan})

          
    } catch (error) {
         return res.status(500).json({ message:"An Error occured while deleting an Form", 
           error:error.message });
    }
   
}
export const ubdating_loan= async (req,res)=>{
    try {
    const { id } = req.params;
    const updates = req.body; // Fields to update

    const updatedLoan = await apply_loan.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated doc
      runValidators: true, // Enforce schema
    });

    if (!updatedLoan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    res.status(200).json({
      message: "Loan updated successfully.",
      updatedLoan,
    });
  } catch (error) {
    console.error("Error updating loan:", error);
    res.status(500).json({ message: "Server error while updating loan." });
  }
};
