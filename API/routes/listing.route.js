import express  from "express";
import { createListing,
    deleteListing,
    updateListing,
    getListing,
    getListings} from "../Controllers/listing.controller.js";
import { veryfyToken } from "../utils/verifyUser.js";


const router=express.Router()

router.post('/create', createListing)
router.delete('/delete/:id',deleteListing)
router.post('/update/:id', updateListing)
router.get('/get/:id', getListing)
router.get('/get', getListings)

export default router
