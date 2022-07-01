import PostController from 'src/controllers/post.controller'
import { ConnectionOptions, createConnection, getRepository } from 'typeorm'
import { Comment } from '../models'
import { Post } from '../models/post'
import { getPost } from './post.repository'

export interface ICommentPayload {
  content: string
  userId: number
  postId: number
}

export const getComments = async (): Promise<Array<Comment>> => {
  const commentRepository = getRepository(Comment)
  return commentRepository.find()
}

export const createComment = async (
  payload: ICommentPayload,
): Promise<Comment> => {
  const commentRepository = getRepository(Comment)
  const comment = new Comment()
  return commentRepository.save({
    ...comment,
    ...payload,
  })
}

export const getComment = async (id: number): Promise<Comment | null> => {
  const commentRepository = getRepository(Comment)
  const comment = await commentRepository.findOne({ id: id })
  if (!comment) return null
  return comment
}

createConnection()
  .then(async (connection) => {
    const post = connection
      .createQueryBuilder()
      .select('post')
      .from(Post, 'post')
      .leftJoinAndSelect('post.comment', 'comment').getMany
    console.log(post)
  })
  .catch((error) => console.log(error))

// app.get('/foo', (req, res) => {
//   const userRepository = getRepository(User);
//   const queryBuilder = userRepository.createQueryBuilder('user');
//   const builder = new ExtendedQueryBuilder(queryBuilder, req.query);
//   const builtQuery = builder.build();
//   const results = builtQuery.getMany();
//   return res.status(200).send(results); //returned results from the built query
// });
