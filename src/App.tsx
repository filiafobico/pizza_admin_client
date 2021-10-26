import { Refine, Resource } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import { DataProvider } from "@pankod/refine-strapi";
import strapiAuthProvider from "authProvider";
import { ClientList } from 'client/list';
import { ClientEdit } from 'client/edit';
import { ClientCreate } from 'client/create';
import { ClientShow } from 'client/show';
import { DeliverymanCreate } from 'deliveryman/create';
import { DeliverymanList } from 'deliveryman/list';
import { DeliverymanShow } from 'deliveryman/show';
import { DeliverymanEdit } from 'deliveryman/edit';
import { PizzaEdit } from 'pizza/edit';
import { PizzaShow } from 'pizza/show';
import { PizzaCreate } from 'pizza/create';
import { PizzaList } from 'pizza/list';

function App() {
  const API_URL = "http://localhost:1337";

  const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);
  const dataProvider = DataProvider(API_URL, axiosInstance);
  return (
    <Refine dataProvider={dataProvider} authProvider={authProvider} >
      <Resource
        name="clients"
        edit={ClientEdit}
        list={ClientList}
        show={ClientShow}
        create={ClientCreate}
        canDelete
      />
      <Resource
        name="deliverymen"
        edit={DeliverymanEdit}
        list={DeliverymanList}
        show={DeliverymanShow}
        create={DeliverymanCreate}
        canDelete
      />
      <Resource
        name="pizzas"
        edit={PizzaEdit}
        list={PizzaList}
        show={PizzaShow}
        create={PizzaCreate}
        canDelete
      />
    </Refine>
  );
}

export default App;
