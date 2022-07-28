import express from "express";
import { DepartmentController } from "./department.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const controller = new DepartmentController();
  const response = await controller.createDepartment(req.body);
  return res.send(response);
});

router.get("/", async (_req, res) => {
  const controller = new DepartmentController();
  const response = await controller.getDepartments();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new DepartmentController();
  const response = await controller.getDepartment(req.params.id);
  if (!response) res.status(404).send({ message: "No department found" });
  return res.send(response);
});

export default router;
