import { IAddress } from './address';
import { IClient } from './client';
import { IDeliveryman } from './deliveryman';
import { IPizza } from './pizza';
import { IPromotion } from './promotion';

export interface ISale {
  id: string;
  client: IClient;
  deliveryman: IDeliveryman;
  type: "delivery",
  pizzas: Array<IPizza>
  total: number
  address: IAddress
  promotion: IPromotion
}