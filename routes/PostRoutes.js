const express = require("express");
const router = express.Router();
const postController = require("./../controller/postController");
router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.createPost);
router
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
