import { Category } from './category.model';
export class Tutorial {
  id?: any;
  title?: string;
  description?: string;
  published?: boolean;
  categories?: Category[] = [];
}
