export function Register(req, res) {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
}
