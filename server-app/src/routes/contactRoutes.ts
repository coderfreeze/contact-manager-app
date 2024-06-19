import express from "express";
import {createContact, getContacts, getContact, updateContact, deleteContact} from "../controllers/contactController";

const router = express.Router();

router.post("/contacts", createContact);
router.get("/contacts", getContacts);
router.get("/contacts/:id", getContact);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

export default router;

