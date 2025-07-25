import express from "express"
import { create_loan, deleteing_loan, getting_loan, ubdating_loan } from "../controller/loan.controller.js"

const loanroutes=express.Router()

loanroutes.post('/form',create_loan)
loanroutes.get('/form',getting_loan)
loanroutes.delete('/:id',deleteing_loan)
loanroutes.patch('/:id',ubdating_loan)
export default loanroutes;