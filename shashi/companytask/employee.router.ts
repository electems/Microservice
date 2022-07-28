import express from "express";
import { EmployeeController } from "./employee.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const controller = new EmployeeController();
  const response = await controller.createEmployee(req.body);
  return res.send(response);
});

router.get("/", async (_req, res) => {
  const controller = new EmployeeController();
  const response = await controller.getEmployees();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new EmployeeController();
  const response = await controller.getEmployee(req.params.id);
  if (!response) res.status(404).send({ message: "No employee found" });
  return res.send(response);
});

export default router;
