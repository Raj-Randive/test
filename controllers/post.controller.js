import PostModel from "../models/post.model.js";
import user from "../models/user.model.js";

const createPost = async (req, res) => {
  try {
    const post = new PostModel(req.body);
    await post.save();

    // Find the user and update their posts array
    await user.findByIdAndUpdate(post.created_by_user_id, {
      $push: { posts: post },
    });

    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { createPost };
