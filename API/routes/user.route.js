import express  from "express";
import {test, updateUser,deleteUser,getUserListings,getUser} from "../Controllers/user.controller.js";
import { veryfyToken } from '../utils/verifyUser.js'

const router=express.Router()


router.get('/test',test)
router.post('/update/:id',veryfyToken,updateUser)
router.delete('/delete/:id',veryfyToken,deleteUser)
router.get('/listings/:id',veryfyToken,getUserListings)
router.get('/:id',veryfyToken,getUser)

export default router