import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Subject} from '../models'
import {getSubjects, createSubject, IsubjectPayload, getSubject} from '../repositories/subject.repository'

@Route("subjects")
@Tags("subject")
export default class SubjectController {

  @Get("/")
  public async getSubjects(): Promise<Array< Subject>> {
    return getSubjects()
  }

  @Post("/")
  public async createSubject(@Body() body: IsubjectPayload): Promise<Subject> {
    return createSubject(body)
  }

  @Get("/:id")
  public async getSubject(@Path() id: string): Promise<Subject | null> {
    return getSubject(Number(id))
  }
}