import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Company } from "./company";
import { getManager } from "typeorm";
import { CompanyRepository, ICompanyPayload } from "./company.repository";
import { Inject } from "typescript-ioc";

@Route("companys")
@Tags("company")
export class CompanyController {
  [x: string]: any;
  @Inject
  private CompanyRepository!: CompanyRepository;
  service: any;
  @Get("/")
  public async getCompanies(): Promise<Array<Company>> {
    console.log("showing companies deatils");
    return this.CompanyRepository.getAllInfo();
  }

  @Post("/")
  public async createCompany(@Body() body: ICompanyPayload): Promise<Company> {
    return this.CompanyRepository.createCompany(body);
  }

  // @Get("/:id")
  // public async getCompaniesAndEmplpoyess(@Path() id: any) {
  //   //const entityManager = getManager();
  //   let comp = this.CompanyRepository.getCompaniesAndEmplpoyess(Number(id));

  //   return comp;
  // }
  // @Get("/")
  // async getAllCompany() {
  //   return await this.CompanyRepository.getAllInfo();
  // }
}
