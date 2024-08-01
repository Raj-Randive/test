import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  created_by_user_id: Schema.Types.ObjectId,
  comment_text: String,
  created_date: { type: Date, default: Date.now },
});

const voteSchema = new Schema({
  vote_type: String,
  user_id: Schema.Types.ObjectId,
  created_date: { type: Date, default: Date.now },
});

const postSchema = new Schema({
  created_by_user_id: Schema.Types.ObjectId,
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

// Export the Post model only if it hasn't been compiled already
export default mongoose.models.Post || mongoose.model("Post", postSchema);
