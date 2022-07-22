import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Resources} from '../models'
import { ResourceRepository, IResourcePayload } from "../repositories/resource.repository";
import { Inject } from "typescript-ioc";

@Route("resource")
@Tags("resources")
export class ResourceController {
  @Inject
  private ResourceRepository!: ResourceRepository;
  service: any;
  @Get("/")
  public  getResources(): Promise<Array< Resources>> {
    return this.ResourceRepository.getResources()
  }

  @Post("/")
  public createResource(@Body() body: IResourcePayload): Promise<Resources> {
    return this.ResourceRepository.createResource(body)
  }

  @Get("/:id")
  public  getResource(@Path() id: any){
    return this.ResourceRepository.getResource(Number(id))
  }
}