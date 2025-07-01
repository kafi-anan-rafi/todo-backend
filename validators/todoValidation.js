import Joi from "joi";

export const createTodoSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  details: Joi.string().min(5).max(500),
  isComplete: Joi.boolean().default(false),
  dueDate: Joi.date(),
  priority: Joi.string().valid("low", "medium", "high").default("low"),
  tags: Joi.array().items(Joi.string().trim()).unique(),
});
