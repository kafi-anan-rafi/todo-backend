import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    details: String,
    isComplete: {
      type: Boolean,
      default: false,
    },
    dueDate: Date,
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    tags: [String],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("Todo", todoSchema);
