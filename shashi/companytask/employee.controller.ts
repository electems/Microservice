import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Employee } from "./employee";
import { getManager } from "typeorm";
import { EmployeeRepository, IEmployeePayload } from "./employee.repository";
import { Inject } from "typescript-ioc";

@Route("employees")
@Tags("employee")
export class EmployeeController {
  [x: string]: any;
  @Inject
  private EmployeeRepository!: EmployeeRepository;
  service: any;
  @Post("/")
  public async createEmployee(
    @Body() body: IEmployeePayload
  ): Promise<Employee> {
    return this.EmployeeRepository.createEmployee(body);
  }
  @Get("/")
  public async getEmployees(): Promise<Array<Employee>> {
    console.log("showing employees deatils");
    return this.EmployeeRepository.getEmployees();
  }

  @Get("/:id")
  public async getEmployee(@Path() id: any) {
    const entityManager = getManager();
    let emp = this.EmployeeRepository.getEmployee(Number(id));
    return emp;
  }
}
