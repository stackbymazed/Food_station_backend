import express from "express"

const router = express.Router();

router.post("/meal", (req, res) => {
    res.send("create meal post")
})

export const MealRouter = router