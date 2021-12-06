import { useForm, Form, Input, Edit, Radio, Select, useSelect } from "@pankod/refine";
import { IAddress } from 'interfaces/address';
import { IClient } from 'interfaces/client';
import { IDeliveryman } from 'interfaces/deliveryman';
import { IPizza } from 'interfaces/pizza';
import { IPromotion } from 'interfaces/promotion';
import { ISale } from 'interfaces/sale';
import { useState } from 'react';

export const SaleEdit: React.FC = () => {
    const { formProps, saveButtonProps, form } = useForm<ISale>();
    const [clientIdSelect, setSelected] = useState()

    const HandlePizzaSelect = (event: any) => {
      const value = pizzasQuery.data?.data?.filter(({ id }) => event.includes(id))?.reduce((sum, { price }) => sum + price, 0) || 0
      form.setFieldsValue({
        total: value
      })
    }

    const handleFormValuesChange = (changedValues: any) => {
      const formFieldName = Object.keys(changedValues)[0];
      if (formFieldName === "client") {
        setSelected(changedValues[formFieldName]);
        form.setFieldsValue({ adress: undefined });
      }
    };

    const { selectProps: clients } = useSelect<IClient>({
      resource: "clients",
      optionLabel: "name",
      optionValue: "id",
    });
    const { selectProps: deliverymen } = useSelect<IDeliveryman>({
      resource: "deliverymen",
      optionLabel: "name",
      optionValue: "id",
    });
    const { selectProps: pizzas, queryResult: pizzasQuery } = useSelect<IPizza>({
      resource: "pizzas",
      optionLabel: "name",
      optionValue: "id",
    });
    const { queryResult: adressQuery } = useSelect<IAddress>({
      resource: "adresses",
      optionLabel: "street",
      optionValue: "id",
    });
    const { selectProps: promotions } = useSelect<IPromotion>({
      resource: "promotions",
      optionLabel: "description",
      optionValue: "id",
    });
    return (
        <Edit saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical" onValuesChange={handleFormValuesChange}>
            <Form.Item label="Clients" name={["client", "id"]}>
              <Select {...clients} />
            </Form.Item>
            <Form.Item label="Deliveryman" name={["deliveryman", "id"]}>
              <Select {...deliverymen} />
            </Form.Item>
            <Form.Item label="Pizzas" name={["pizzas", "id"]}>
              <Select onChange={HandlePizzaSelect} mode="multiple" {...pizzas} />
            </Form.Item>
              <Form.Item label="Address" name={["adress", "id"]}>
                <Select options={
                    adressQuery?.data?.data
                      ?.filter(({ client }) => client.id === (clientIdSelect as any)?.id)
                      .map((address) => ({
                        label: address.street,
                        value: address.id
                      }))
                      || []
                } />
              </Form.Item>
            <Form.Item label="Promotion" name={["promotion", "id"]}>
              <Select {...promotions} />
            </Form.Item>
            <Form.Item label="Type" name="type">
              <Radio.Group>
                  <Radio value="delivery">Delivery</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Total" name="total">
                <Input type="number" />
            </Form.Item>
        </Form>
        </Edit>
    );
};