import express from 'express';
import RankAllotmentController from '../studentsranking/rank.allotment.controller'
const router = express.Router();

router.get('/', async (_req, res) => {
    const controller = new RankAllotmentController();
    const response = await controller.getStudents();
    return res.send(response);
  });

  router.post('/', async (req, res) => {
    const controller = new RankAllotmentController();
    const response = await controller.createStudent(req.body);
    return res.send(response);
});

// router.get('/', async (_req, res) => {
//     const controller = new RankAllotmentController();
//     const response = await controller.getStudentsAverage();
//     return res.send(response);
//   });

  export default router;