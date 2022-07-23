import { getRepository } from "typeorm";
import { Product } from "../models";
import { getManager, Connection } from "typeorm";
import { Injectable } from "@nestjs/common";
export interface IProductPayload {
  resId: number;
  content: string;
}

@Injectable()
export class ProductRepository {
  constructor(private readonly connection: Connection) {}

  public createProduct = async (payload: IProductPayload): Promise<Product> => {
    const productRepository = getRepository(Product);
    const product = new Product();
    return productRepository.save({
      ...product,
      ...payload,
    });
  };

  //   public getProduct  = async (id: number) :Promise<Product | null> => {
  //   const productRepository = getRepository(Product);
  //   const product = await productRepository.findOne({id: id})
  //   if (!product) return null
  //   return product

  // }

  //working code for getProduct using querybuilder
  // public getProduct(id: number){
  //     console. log("product id is ", id);
  //     const entityManager = getManager();
  //     const product = entityManager
  //       .createQueryBuilder()
  //       .select("product")
  //       .from(Product, "product")
  //       .where("product.id = :id", { id: id })
  //       .getOne();
  //     return product;
  //   }

  // public getProducts  = async () :Promise<Array<Product>> => {
  //   const productRepository = getRepository(Product);
  //   return productRepository.find()
  // }

  //code to generate all the product details with their resources using query builder

  // public getProducts =  async() : Promise<Array<Product>> =>{
  //   let productList=[];
  //   const entityManager = getManager();
  //   productList = await entityManager.createQueryBuilder(Product,'product')
  //   .leftJoinAndSelect("product.reso curce", "resource").getMany();
  //   return productList;

  // }

  //code to generate single product with their resource using querybuilder
  public getProduct(id: number) {
    const entityManager = getManager();
    const prod = entityManager
      .createQueryBuilder(Product, "product")
      .leftJoinAndSelect("product.resource", "resource")
      .where("product.id = :id", { id: id })
      .getMany();
    return prod;
  }

  //Find all products whose are associated with resource using query builder
  public getProducts = async (): Promise<Array<Product>> => {
    let productList = [];
    const entityManager = getManager();
    productList = await entityManager
      .createQueryBuilder(Product, "product")
      .leftJoinAndSelect("product.resource", "resource")
      .getMany();
    return productList;
  };
}
