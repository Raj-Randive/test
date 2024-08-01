import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  created_by_user_id: Schema.Types.ObjectId,
  post_id: Schema.Types.ObjectId,
  comment_text: String,
  created_date: { type: Date, default: Date.now },
});

// Export the Post model only if it hasn't been compiled already
export default mongoose.models.Comments ||
  mongoose.model("Comments", commentSchema);
