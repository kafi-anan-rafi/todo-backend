import mongoose from "mongoose";

const Priority = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  dueDate: Date,
  priority: {
    type: String,
    enum: Object.values(Priority),
    default: Priority.LOW,
  },
  tags: {
    type: [String],
    default: [],
  },
});

export const Todo = mongoose.model("Todo", todoSchema);
