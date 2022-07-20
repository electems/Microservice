import express from "express";
import SubjectController from '../controllers/subject.controller';

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SubjectController();
  const response = await controller.getSubjects();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new SubjectController();
  const response = await controller.getSubject(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SubjectController();
  const response = await controller.getSubject(req.params.id);
  if (!response) res.status(404).send({message: "No comment found"})
  return res.send(response);
});

export default router;