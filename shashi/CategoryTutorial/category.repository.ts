import { getRepository } from "typeorm";
import { Category } from "../models/category";

export interface ICategoryPayload {
  title: string;
}

export const getCategorys = async (): Promise<Array<Category>> => {
  const categoryRepository = getRepository(Category);
  return categoryRepository.find();
};

export const createCategory = async (
  payload: ICategoryPayload
): Promise<Category> => {
  const categoryRepository = getRepository(Category);
  const category = new Category();
  return categoryRepository.save({
    ...category,
    ...payload,
  });
};

export const getCategory = async (id: number): Promise<Category | null> => {
  const categoryRepository = getRepository(Category);
  const category = await categoryRepository.findOne({ id: id });
  if (!category) return null;
  return category;
};

//tried query to get inner objects

// export const getCategorys = async (): Promise<Array<Category>> =>{
// const categoryRepository = getRepository(Category)
//     .createQueryBuilder("category")
//     .leftJoinAndSelect("category.tutorials", "tutorial")
//     return categoryRepository
//     .getMany()
// }
