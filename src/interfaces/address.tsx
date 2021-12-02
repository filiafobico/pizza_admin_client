import { IClient } from './client';

export interface IAddress {
  id: string
  street: string
  number: string
  client: IClient
}