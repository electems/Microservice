import { getRepository } from "typeorm";
import { Company } from "./company";
import { getManager, Connection } from "typeorm";
import { Injectable } from "@nestjs/common";

export interface ICompanyPayload {
  name: string;
  address: string;
}

@Injectable()
export class CompanyRepository {
  public createCompany = async (payload: ICompanyPayload): Promise<Company> => {
    const companyRepository = getRepository(Company); //instance
    const company = new Company();
    return companyRepository.save({
      ...company,
      ...payload,
    });
  };

  // public getCompanys = async (): Promise<Array<Company>> => {
  //   const companyRepository = getRepository(Company);
  //   return companyRepository.find();
  // };
  // public getCompany = async (): Promise<Array<Company>> => {
  //   const companyRepository = getRepository(Company);
  //   return companyRepository.find();
  // };

  //working code for getCompany using repository
  // public getCompany = async (id: number): Promise<Company | null> => {
  //   const companyRepository = getRepository(Company);
  //   const company = await companyRepository.findOne({ id: id });
  //   if (!company) return null;
  //   return company;
  // };

  //working code for getCompany using querybuilder
  // public getCompany(id: number) {
  //   console.log("company id is ", id);
  //   const entityManager = getManager();
  //   const company = entityManager
  //     .createQueryBuilder()
  //     .select("company")
  //     .from(Company, "company")
  //     .where("company.id = :id", { id: id })
  //     .getOne();
  //   return company;
  // }

  //code to generate single company with their employees using querybuilder
  // public getCompaniesAndEmplpoyess(id: number) {
  //   const entityManager = getManager();
  //   const companyEmployee = entityManager
  //     .createQueryBuilder(Company, "company")
  //     .leftJoinAndSelect("company.employee", "employee")
  //     .where("company.id = :id", { id: id })
  //     .getMany();
  //   return companyEmployee;
  // }

  //changes

  //   public getCompany(id: number) {
  //     const entityManager = getManager();
  //     const emp = entityManager
  //       .getRepository(Company)
  //       .createQueryBuilder("company")
  //       .leftJoinAndSelect("company.employee", "employee")
  //       .leftJoinAndSelect("employee.department", "department")
  //       .getMany();
  //     return emp;
  //   }

  //   public getAllSTudents = async (): Promise<Array<Company>> => {
  //     const entityManager = getManager();
  //     let stud = [];
  //     const query = entityManager.createQueryBuilder(Company, "employee");
  //     stud = await query
  //       .select(["company", "employee", "department"])
  //       .leftJoinAndSelect("company.employee", "employee")
  //       .innerJoinAndSelect("employee.department", "department")
  //       .getMany();
  //     return stud;
  //   };
  public getAllInfo = async (): Promise<Array<Company>> => {
    const entityManager = getManager();
    let company = [];
    const query = entityManager.createQueryBuilder(Company, "company");
    company = await query
      .select(["company", "employee", "department"])
      .leftJoinAndSelect("company.employee", "employee")
      .innerJoinAndSelect("employee.department", "department")
      .getMany();
    return company;
  };
}
