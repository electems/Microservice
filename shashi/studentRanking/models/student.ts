import { Double } from "typeorm";

import { subjects } from "./subject";

export class students {
  name!: string;
  Avg_marks?: number ;
  subject!: subjects[];
  static Avg_marks: any;
}
