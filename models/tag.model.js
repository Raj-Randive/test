import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  tag_name: String,
  tag_description: String,
});

// Export the Post model only if it hasn't been compiled already
export default mongoose.models.Tag || mongoose.model("Tag", tagSchema);
