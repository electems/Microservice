import express from 'express'
import PingController from '../controllers/ping.controller'
import PostRouter from './post.router'
import UserRouter from './user.router'
import CommentRouter from './comment.router'
import MessageRouter from './message.router'
import TagRouter from './tags.router'
import { getConnection, getRepository } from 'typeorm'
import { User } from 'src/models'
import { connect } from 'http2'
import { getUser } from '../repositories/user.repository'
import { getComments } from '../repositories/comment.repository'

const router = express.Router()

router.get('/ping', async (_req, res) => {
  const controller = new PingController()
  const response = await controller.getMessage()
  return res.send(response)
})
// router.get('/foo', (req, res) => {
//   // const userRepository = getRepository(User)
//   // const queryBuilder = userRepository.createQueryBuilder('user')
//   // const builder = new ExtendedQueryBuilder(queryBuilder, req.query)
//   // const builtQuery = builder.build()
//   // const results = builtQuery.getMany()
//   // return res.status(200).send(results) //returned results from the built query
// })

// router.get('/foo', async (req, res) => {
//   var data = await getRepository(User)
//     .createQueryBuilder('user')
//     //.where("user.firstName like :name", { name: `%${firstname}%`   })
//     .getMany()
// });

// router.get('/foo', async (req, res) => {
//   const user = await conn.manager.findOne(User, 1);
//   user.photos = await getConnection()
//     .createQueryBuilder()
//     .relation(User, "photos")
//     .of(user) // you can use just post id as well
//     .loadMany();

// });
// router.get('/foo', async (req, res) => {
//   const firstUser = await getRepository(getComments)
//     .createQueryBuilder('user')
//     .where('user.id = :id', { id: [] })
//     .getOne()
//   return res.send(firstUser)
// })

router.get('/foo', async (req, res) => {
  await getConnection()
    .createQueryBuilder()
    .relation(getUser, 'firstname')
    .loadOne() // you can use just post id as well
  // you can use just category id as well
})

router.use('/users', UserRouter)
router.use('/posts', PostRouter)
router.use('/comments', CommentRouter)
router.use('/messages', MessageRouter)
router.use('/tags', TagRouter)

export default router
