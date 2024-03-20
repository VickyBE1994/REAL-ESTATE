import express  from "express";
import { createListing,
    deleteListing,
    updateListing,
    getListing,
    getListings} from "../Controllers/listing.controller.js";
import { veryfyToken } from "../utils/verifyUser.js";


const router=express.Router()

router.post('/create',veryfyToken, createListing)
router.delete('/delete/:id',veryfyToken, deleteListing)
router.post('/update/:id',veryfyToken, updateListing)
router.get('/get/:id',veryfyToken, getListing)
router.get('/get',veryfyToken, getListings)

export default router
