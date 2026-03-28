import { Router } from "express";
import { UserController } from "./user.controller.js";

const router = Router();

router.get("/providers", UserController.getProviders);
router.get("/", UserController.getAllUsers);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const UserRouter = router;
