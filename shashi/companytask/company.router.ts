import express from "express";
import { CompanyController } from "./company.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CompanyController();
  const response = await controller.getCompanies();
  return res.send(response);
});

// router.post("/", async (req, res) => {
//   const controller = new CompanyController();
//   const response = await controller.createCompany(req.body);
//   return res.send(response);
// });

// router.get("/:id", async (req, res) => {
//   const controller = new CompanyController();
//   const response = await controller.getCompany(req.params.id);
//   if (!response) res.status(404).send({ message: "No company found" });
//   return res.send(response);
// });

// router.get("/", async (req, res) => {
//   const controller = new CompanyController();
//   const response = await controller.getAllCompany();
//   if (!response) res.status(404).send({ message: "comapany" });
//   return res.send(response);
// });

export default router;
