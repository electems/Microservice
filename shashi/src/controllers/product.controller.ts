import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Product} from '../models'
import { ProductRepository, IProductPayload } from "../repositories/product.repository";
import { Inject } from "typescript-ioc";

@Route("products")
@Tags("product")
export  class ProductController {
  [x: string]: any;
  @Inject
  private ProductRepository!: ProductRepository;
  service: any;
  @Get("/")
  public  async getProducts(): Promise<Array< Product>> {
    console.log("dfsd");
    return this.ProductRepository.getProducts()
  }

  @Post("/")
  public async createProduct(@Body() body: IProductPayload): Promise<Product> {
    return this.ProductRepository.createProduct(body)
  }

  @Get("/:id")
  public async  getProduct(@Path() id: any){
    return this.ProductRepository.getProduct(Number(id))
  }
}