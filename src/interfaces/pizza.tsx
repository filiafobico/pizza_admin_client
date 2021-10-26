export interface IPizza {
  id: string;
  name: string;
  flavor: string;
  price: number;
  size: 'small' | 'medium' | 'big' | 'giga';
}