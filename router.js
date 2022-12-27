import express from "express";
import createUser from "./controller.js";
import getUsers from './getUsers.js'
import getUser from "./getUser.js";
import updateUser from "./updateUser.js";
import deleteUser from "./deleteUser.js";

const router = express.Router()

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;