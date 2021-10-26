export interface ISale {
  id: string;
  client: string;
  deliveryman: string;
  type: "delivery",
  pizzas: Array<string>
  total: number
  address: string
  promotion: string
}