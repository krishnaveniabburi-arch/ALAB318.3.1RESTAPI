import express from "express"
const router = express.Router();

import users from "..//data/users.js";
import error from "../utilities/error.js";
import comments from "./routes/comments.js"
import posts from "../data/posts.js";

const comments = [{}];
router.route("/").get((req, res) => {
    res.json(comments);
});

export default router;