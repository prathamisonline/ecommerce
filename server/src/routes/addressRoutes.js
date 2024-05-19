import express from "express"

import { validateId } from "../middleware/validateId.js";
import { AddressValidate } from "../Validation/Validate.js";
import { createAddress, deleteAddress, updateAddress, getAddress } from "../Controllers/addressController.js";
const router = express.Router();

router.post("/address", AddressValidate, createAddress);
router.get("/address/:id", validateId, getAddress);
router.delete("/address/:id", validateId, deleteAddress);
router.put("/address/:id", validateId, updateAddress);


export default router;
