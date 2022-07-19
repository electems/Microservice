import CommentController from 'src/controllers/comment.controller'
import { getRepository } from 'typeorm'
import { Post } from '../models'
import { Comment } from '../models/comment'

export interface IPostPayload {
  title: string
  content: string
  userId: number
}

export const getPosts = async (): Promise<Array<Post>> => {
  const postRepository = getRepository(Post)
  return postRepository.find()
}

export const createPost = async (payload: IPostPayload): Promise<Post> => {
  const postRepository = getRepository(Post)
  const post = new Post()
  return postRepository.save({
    ...post,
    ...payload,
  })
}

export const getPost = async (id: number): Promise<Post | null> => {
  const postRepository = getRepository(Post)
  const post = await postRepository.findOne({ id: id })
  if (!post) return null
  return post
}

export const loadcomment = async (id: number, userid: number) => {
  const postRepository = getRepository(Comment)
  const comment = await postRepository.find({ id: userid })

  if (!comment) return null
  return comment
}
