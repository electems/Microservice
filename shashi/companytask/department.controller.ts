import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Department } from "./department";
import { getManager } from "typeorm";
import {
  DepartmentRepository,
  IDepartmentPayload,
} from "./department.repository";
import { Inject } from "typescript-ioc";

@Route("departments")
@Tags("department")
export class DepartmentController {
  [x: string]: any;
  @Inject
  private DepartmentRepository!: DepartmentRepository;
  service: any;
  @Post("/")
  public async createDepartment(
    @Body() body: IDepartmentPayload
  ): Promise<Department> {
    return this.DepartmentRepository.createDepartment(body);
  }
  @Get("/")
  public async getDepartments(): Promise<Array<Department>> {
    console.log("showing department deatils");
    return this.DepartmentRepository.getDepartments();
  }

  @Get("/:id")
  public async getDepartment(@Path() id: any) {
    const entityManager = getManager();
    let dept = this.DepartmentRepository.getDepartment(Number(id));
    return dept;
  }
}
