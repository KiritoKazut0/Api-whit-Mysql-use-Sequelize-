import { Router } from "express";
import * as UsersCtrl from "../Controllers/Users.controllers"
import { validateFields } from "../middlewares/Users.middlleware";

const router = Router();

router.get('/', [validateFields], UsersCtrl.getUsers);
router.post('/',UsersCtrl.addUser);

export default router;