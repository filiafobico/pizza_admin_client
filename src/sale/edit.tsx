import { useForm, Form, Input, Edit, Radio, Select, useSelect } from "@pankod/refine";
import { IAddress } from 'interfaces/address';
import { IClient } from 'interfaces/client';
import { IDeliveryman } from 'interfaces/deliveryman';
import { IPizza } from 'interfaces/pizza';
import { IPromotion } from 'interfaces/promotion';
import { ISale } from 'interfaces/sale';

export const SaleEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<ISale>();
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
    const { selectProps: pizzas } = useSelect<IPizza>({
      resource: "pizzas",
      optionLabel: "name",
      optionValue: "id",
    });
    const { selectProps: adressess } = useSelect<IAddress>({
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
        <Form {...formProps} layout="vertical">
            <Form.Item label="Clients" name={["client", "id"]}>
              <Select {...clients} />
            </Form.Item>
            <Form.Item label="Deliveryman" name={["deliveryman", "id"]}>
              <Select {...deliverymen} />
            </Form.Item>
            <Form.Item label="Pizzas" name={["pizzas", "id"]}>
              <Select  mode="multiple" {...pizzas} />
            </Form.Item>
            <Form.Item label="Address" name={["adress", "id"]}>
              <Select {...adressess} />
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