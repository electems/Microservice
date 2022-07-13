import express from 'express';
import { RankAllotmentController } from '../studentsranking/rank.allotment.controller';
const router = express.Router();

router.get('/:id', async (req, res) => {
  const controller = new RankAllotmentController();
  const response = await controller.getProdProfile(req.params.id);
  if (!response) res.status(404).send({ message: 'No product found' });
  return res.send(response);
});
router.get('/', async (req, res) => {
  const controller = new RankAllotmentController();
  const response = await controller.getMany();
  if (!response) res.status(404).send({ message: 'No product found' });
  return res.send(response);
});

//   router.post('/rank', async (req, res) => {
//     const controller = new RankAllotmentController();
//     const response = await controller.calculateAvg(req.body);
//     return res.send(response);
// });
// router.post('/addstudent', async (req, res) => {
//   const controller = new RankAllotmentController();
//   const response = await controller.createStudent(req.body);
//   return res.send(response);
// });;

// router.post('/addsubject', async (req, res) => {
//   const controller = new RankAllotmentController();
//   const response = await controller.createSubject(req.body);
//   return res.send(response);
// });;

// router.post('/addmark', async (req, res) => {
//   const controller = new RankAllotmentController();
//   const response = await controller.createMark(req.body);
//   return res.send(response);
// });;

// router.get('/student', async(req,res)=>{
//   const task = await getManager()
//   .getRepository(Student)
//   .createQueryBuilder("student")
//   .where("student.id=:id",{id: 32})
//   .getOne();
//   console.log("This is working fine ",task);

//   return res.status(200).json({
//     status: "success",
//     task,

//   })
export default router;
