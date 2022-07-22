import {getRepository} from "typeorm";
import {Product} from '../models'
import { getManager, Connection } from "typeorm";
import { Injectable } from "@nestjs/common";
export interface IProductPayload {  resId: number;  content: string; }

@Injectable()
export class ProductRepository {
constructor(private readonly connection: Connection) {}

public createProduct  = async (payload: IProductPayload) :Promise<Product> => {
    const productRepository = getRepository(Product);
    const product = new Product()
    return productRepository.save({
      ...product,
      ...payload
    })
  }

  public getProduct  = async (id: number) :Promise<Product | null> => {
  const productRepository = getRepository(Product);
  const product = await productRepository.findOne({id: id})
  if (!product) return null
  return product

}

public getProducts  = async () :Promise<Array<Product>> => {
  const productRepository = getRepository(Product);
  return productRepository.find()
}
}