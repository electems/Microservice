import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Tutorial } from "../models/tutorials";
import {
  getTutorials,
  createTutorial,
  ITutorialPayload,
  getTutorial,
} from "../repositories/tutorials.repository";

@Route("tutorials")
@Tags("tutorial")
export default class TutorialController {
  @Get("/")
  public async getTutorials(): Promise<Array<Tutorial>> {
    return getTutorials();
  }

  @Post("/")
  public async createTutorial(
    @Body() body: ITutorialPayload
  ): Promise<Tutorial> {
    return createTutorial(body);
  }

  @Get("/:id")
  public async getTutorial(@Path() id: string): Promise<Tutorial | null> {
    return getTutorial(Number(id));
  }
}
