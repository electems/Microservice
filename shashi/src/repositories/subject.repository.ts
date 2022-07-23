import {getRepository} from "typeorm";
import {Subject} from '../models'


export interface IsubjectPayload {
  id: number;
  name: string;
  semester: string;
}


export const getSubjects  = async() :Promise<Array<Subject>> => {
  const subjectRepository = getRepository(Subject);
  return  subjectRepository.find()
}

export const createSubject  = async (payload: IsubjectPayload) :Promise<Subject> => {
  const subjectRepository = getRepository(Subject);
  const subject = new Subject()
  return subjectRepository.save({
    ...subject,
    ...payload
  })
}

export const getSubject  = async (id: number) :Promise<Subject | null> => {
  const subjectRepository = getRepository(Subject);
  const subject = await subjectRepository.findOne({id: id})
  if (!subject) return null
  return subject
}