import { getRepository } from "typeorm";
import { Tutorial } from "../models/tutorials";

export interface ITutorialPayload {
  name: string;
  address:string;
}

export const getTutorials = async (): Promise<Array<Tutorial>> => {
  const tutorialRepository = getRepository(Tutorial);
  return tutorialRepository.find();
};

export const createTutorial = async (
  payload: ITutorialPayload
): Promise<Tutorial> => {
  const tutorialRepository = getRepository(Tutorial);
  const tutorial = new Tutorial();
  return tutorialRepository.save({
    ...tutorial,
    ...payload,
  });
};

export const getTutorial = async (id: number): Promise<Tutorial | null> => {
  const tutorialRepository = getRepository(Tutorial);
  const tutorial = await tutorialRepository.findOne({ id: id });
  if (!tutorial) return null;
  return tutorial;
};
