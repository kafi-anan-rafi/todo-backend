import { User } from "../models/user.js";
import { Todo } from "../models/todo.js";

export async function createTodo(req, res) {
  try {
    const userId = req.user._id;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exists!" });
    }

    const { name, details, isComplete, dueDate, priority, tags } = req.body;

    const todo = new Todo({
      name: name.trim(),
      details: details?.trim(),
      isComplete,
      dueDate,
      priority,
      tags: tags?.map((t) => t.trim().toLowerCase()),
      user: userId,
    });

    await todo.save();

    return res.status(201).json({
      message: "Todo created!",
      todo: {
        _id: todo._id,
        name: todo.name,
        details: todo.details,
        isComplete: todo.isComplete,
        priority: todo.priority,
        user: todo.user,
        createdAt: todo.createdAt,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to create todo", error: err });
  }
}

export async function getTodos(req, res) {
  try {
    const userId = req.user._id;

    const todos = await Todo.find({ user: userId });

    if (!todos) {
      return res.status(404).json({ message: "No todo exists!" });
    }

    return res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to get todo" });
  }
}

export async function getTodo(req, res) {
  try {
    const todoId = req.params.id;
    const userId = req.user._id;

    const todo = await Todo.findOne({ _id: todoId });

    if (!todo) {
      return res.status(404).json({ message: "Todo doesn't exist!" });
    }

    if (!todo.user.equals(userId)) {
      return res.status(403).json({ message: "Forbidden: Not your todo" });
    }

    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to get todo" });
  }
}
