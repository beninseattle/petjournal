import express from 'express';
import { body, param, check } from "express-validator";
import { createPet, getPet } from './controllers/PetController';
const router = express.Router();

// Create
router.post('/', body(), createPet);

// Read
router.get('/:id', param('id').isInt(), getPet);
router.get('/', getPet);

// Update
router.put('/:id', check(), (req, res) => {

});

// Delete
router.delete('/:id', param('id').isInt(), (req, res) => {

});

export default router;