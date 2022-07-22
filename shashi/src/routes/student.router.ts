import express from "express";
import StudentController from '../controllers/student.controller';

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new StudentController();
  const response = await controller.getStudents();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new StudentController();
  const response = await controller.createStudent(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new StudentController();
  const response = await controller.getStudent(req.params.id);
  if (!response) res.status(404).send({message: "No comment found"})
  return res.send(response);
});

export default router;