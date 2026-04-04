import express from "express"
import { StatsController } from "./stats.controller.js"

const router = express.Router();

router.get("/admin", StatsController.getAdminStats);
router.get("/provider/:providerId", StatsController.getProviderStats);
router.get("/user/:userId", StatsController.getUserStats);

export const StatsRouter = router;
