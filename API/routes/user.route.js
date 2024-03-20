import express  from "express";
import {test, updateUser,deleteUser,getUserListings,getUser} from "../Controllers/user.controller.js";
import { veryfyToken } from '../utils/verifyUser.js'

const router=express.Router()


router.get('/test',test)
router.post('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)
router.get('/listings/:id',getUserListings)
router.get('/:id',getUser)

export default router