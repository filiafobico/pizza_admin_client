import { Refine, Resource } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import { DataProvider } from "@pankod/refine-strapi";
import strapiAuthProvider from "authProvider";
import { ClientList } from 'client/list';
import { ClientEdit } from 'client/edit';
import { ClientCreate } from 'client/create';
import { ClientShow } from 'client/show';

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
    </Refine>
  );
}

export default App;
