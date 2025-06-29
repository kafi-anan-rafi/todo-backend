import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://kafianan:pW9nDBYwwUgHZCcP@cluster0.6ps4rub.mongodb.net/todo-app"
  );
} catch (error) {
  handleError(error);
}
