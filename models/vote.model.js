import { Schema } from "mongoose";

const voteSchema = new Schema({
  post_id: Schema.Types.ObjectId,
  vote_type: String,
  user_id: Schema.Types.ObjectId,
  created_date: { type: Date, default: Date.now },
});

// Export the Post model only if it hasn't been compiled already
export default mongoose.models.Vost || mongoose.model("Vost", voteSchema);
