import express from "express";
import { contactModel } from "../models/contactModel";

// Create new contact
// POST /api/contacts
export const createContact = async(
    req: express.Request, 
    res: express.Response
) => {
    try {
        const {name, email, phone} = req.body;

        if (!name || !email || !phone) {
            res.status(400);
            throw new Error("All fields are mandatory!");
        } else {
            const contact = await contactModel.create({
                name,
                email,
                phone
            });
            res.status(201).send(contact);
        }
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
};

// GET ALL contacts
// GET /api/contacts
export const getContacts = async(
    req: express.Request, 
    res: express.Response
) => {
    try {
        const contacts = await contactModel.find();

        if (contacts.length < 0) {
            res.status(404).send({message: "Contacts not found!"});
        };

        res.status(200).send(contacts);
    } catch (error) {
        res.status(500).send({message: "Something went wrong!"});
    }
};

// GET contact
// GET /api/contact/:id
export const getContact = async(
    req: express.Request, 
    res: express.Response
) => {
    try {
        const contact = await contactModel.findById(req.params.id);

        if (!contact) {
            res.status(404).send({message: "Contact not found"});
        };

        res.status(200).send(contact);
    } catch (error) {
        res.status(500).send({message: "An unknown error occured"});
    }
};

// Update existing contact
// PUT /api/contact/:id
export const updateContact = async(
    req: express.Request, 
    res: express.Response
) => {
    try {
        const contact = await contactModel.findById(req.params.id);

        if (!contact) {
            res.status(404).send({message: "Contact not found"});
        };

        const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(updatedContact);
    } catch (error) {
        res.status(500).send({message: "Something went wrong!"});
    }
};

// Delete existing contact
// DELETE /api/contact/:id
export const deleteContact = async(
    req: express.Request, 
    res: express.Response
) => {
    try {
        const contact = await contactModel.findByIdAndDelete(req.params.id);

        if (!contact){
            res.status(404).send({message: "Contact not found"});
        };

        res.status(200).send({message: "Contact has been deleted"});
    } catch (error) {
        res.status(500).send({message: "Something went wrong!"});
    }
};