import { Router } from "express";
import * as UsersCtrl from "../Controllers/Users.controllers"
import { validateFields } from "../middlewares/Users.middlleware";

const router = Router();

router.post('/', [validateFields], UsersCtrl.addUser);
router.get('/',UsersCtrl.getUsers);
router.delete('/:id', UsersCtrl.deleteUserById);
router.get('/:id', UsersCtrl.getUserByid)
export default router;