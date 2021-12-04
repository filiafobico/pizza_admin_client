import { IAddress } from './address';

export interface IClient {
  id: string;
  name: string;
  cpf: string;
  adresses: Array<IAddress>
}