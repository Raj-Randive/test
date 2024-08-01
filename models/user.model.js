import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  post_id: Schema.Types.ObjectId,
  comment_text: String,
  created_date: { type: Date, default: Date.now },
});

const voteSchema = new Schema({
  post_id: Schema.Types.ObjectId,
  vote_type: String,
  created_date: { type: Date, default: Date.now },
});

const postSchema = new Schema({
  post_title: String,
  post_details: String,
  post_type: String, // "question" or "answer"
  parent_question_id: Schema.Types.ObjectId, // For answers
  accepted_answer_id: Schema.Types.ObjectId, // For questions
  created_date: { type: Date, default: Date.now },
  comments: [commentSchema],
  votes: [voteSchema],
  tags: [{ tag_name: String, tag_description: String }],
});

const userSchema = new Schema({
  name: String,
  email_address: String,
  password: String,
  about_me: String,
  location: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  created_date: { type: Date, default: Date.now },
  posts: [postSchema],
  comments: [commentSchema],
  votes: [voteSchema],
});

// Export the User model only if it hasn't been compiled already
export default mongoose.models.User || mongoose.model("User", userSchema);