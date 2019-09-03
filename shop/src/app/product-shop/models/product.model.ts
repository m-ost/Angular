import { CategoryList } from './category.enum';

export interface Product {
    name: string,
    price: number,
    category: CategoryList,
    isAvailable: boolean
}