import express from 'express';
import PingController from '../controllers/ping.controller';
import PostRouter from './post.router';
import UserRouter from './user.router';
import CommentRouter from './comment.router';
import MessageRouter from './message.router';
import TagRouter from './tags.router';
import ChocolateRouter from '../controllers/chocolate/chocolate_lists/chocolate.router'
import RankRouter from '../controllers/studentmanagement/studentsranking/rankallotment.router'
const router = express.Router();

router.get('/ping', async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});
// router.get('/students', async (_req, res) => {
//   const controller = new StudentController();
//   const response = await controller.getStudent();
//   return res.send(response);
// });

router.use('/users', UserRouter);
router.use('/posts', PostRouter);
router.use('/comments', CommentRouter);
router.use('/messages', MessageRouter);
router.use('/tags', TagRouter);
router.use('/students', RankRouter)
router.use('/chocolates', ChocolateRouter)


export default router;
