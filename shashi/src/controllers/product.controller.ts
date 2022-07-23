import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Product, Student } from "../models";
import { getManager } from "typeorm";
import {
  ProductRepository,
  IProductPayload,
} from "../repositories/product.repository";
import { Inject } from "typescript-ioc";

@Route("products")
@Tags("product")
export class ProductController {
  [x: string]: any;
  @Inject
  private ProductRepository!: ProductRepository;
  service: any;
  @Get("/")
  public async getProducts(): Promise<Array<Product>> {
    console.log("dfsd");
    return this.ProductRepository.getProducts();
  }

  @Post("/")
  public async createProduct(@Body() body: IProductPayload): Promise<Product> {
    return this.ProductRepository.createProduct(body);
  }

  @Get("/:id")
  public async getProduct(@Path() id: any) {

    
    //const entityManager = getManager();
    let prod = this.ProductRepository.getProduct(Number(id));

    return prod;
  }
}
