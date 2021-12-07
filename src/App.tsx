import { Refine } from "@pankod/refine";

import routerProvider from "@pankod/refine-react-router";

import "@pankod/refine/dist/styles.min.css";
import { DataProvider } from "@pankod/refine-strapi";
import strapiAuthProvider from "authProvider";
import { ClientList } from 'client/list';
import { ClientEdit } from 'client/edit';
import { AddressCreate } from 'address/create';
import { DeliverymanCreate } from 'deliveryman/create';
import { DeliverymanList } from 'deliveryman/list';
import { DeliverymanShow } from 'deliveryman/show';
import { DeliverymanEdit } from 'deliveryman/edit';
import { PizzaEdit } from 'pizza/edit';
import { PizzaShow } from 'pizza/show';
import { PizzaCreate } from 'pizza/create';
import { PizzaList } from 'pizza/list';
import { PromotionCreate } from 'promotion/create';
import { PromotionEdit } from 'promotion/edit';
import { PromotionList } from 'promotion/list';
import { PromotionShow } from 'promotion/show';
import { SaleCreate } from 'sale/create';
import { SaleEdit } from 'sale/edit';
import { SaleList } from 'sale/list';
import { SaleShow } from 'sale/show';
import { AddressEdit } from 'address/edit';
import { AddressList } from 'address/list';
import { AddressShow } from 'address/show';
import { ClientCreate } from 'client/create';
import { ClientShow } from 'client/show';
import { ReportSale } from 'pages/report_sale';
import { ReportDelivery } from 'pages/report_delivery';

function App() {
  const API_URL = "https://utfpr-pizza-server.herokuapp.com";

  const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);
  const dataProvider = DataProvider(API_URL, axiosInstance);
  return (
    <Refine
      dataProvider={dataProvider}
      authProvider={authProvider}
      routerProvider={{
        ...routerProvider,
        routes: [{
          exact: true,
          component: ReportSale,
          path: "/sale_report"
        }, {
          exact: true,
          component: ReportDelivery,
          path: "/delivery_report"
        }],
      }}
      resources={[{
        name: "clients",
        edit: ClientEdit,
        list: ClientList,
        show: ClientShow,
        create: ClientCreate
      }, {
        name: "adresses",
        edit: AddressEdit,
        list: AddressList,
        show: AddressShow,
        create: AddressCreate
      }, {
        name: "deliverymen",
        edit: DeliverymanEdit,
        list: DeliverymanList,
        show: DeliverymanShow,
        create: DeliverymanCreate
      }, {
        name: "pizzas",
        edit: PizzaEdit,
        list: PizzaList,
        show: PizzaShow,
        create: PizzaCreate
      }, {
        name: "promotions",
        edit: PromotionEdit,
        list: PromotionList,
        show: PromotionShow,
        create: PromotionCreate
      }, {
        name: "sales",
        edit: SaleEdit,
        list: SaleList,
        show: SaleShow,
        create: SaleCreate
      }, {
        name: "Sale Report",
        options: {
          route: 'sale_report'
        }
      }, {
        name: "Delivery Report",
        options: {
          route: 'delivery_report'
        }
      }]} />
  );
}

export default App;
