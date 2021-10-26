import {
  Create,
  Form,
  Input,
  Radio,
  useForm} from "@pankod/refine";
import { ISale } from 'interfaces/sale';

export const SaleCreate = () => {
  const { formProps, saveButtonProps } = useForm<ISale>();

  return (
      <Create saveButtonProps={saveButtonProps}>
          <Form {...formProps} layout="vertical">
              <Form.Item label="Client" name="client">
                  <Input />
              </Form.Item>
              <Form.Item label="Deliveryman" name="deliveryman">
                  <Input />
              </Form.Item>
              <Form.Item label="Type" name="type">
                <Radio.Group>
                    <Radio value="delivery">Delivery</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Pizzas" name="pizzas">
                  <Input />
              </Form.Item>
              <Form.Item label="Total" name="total">
                  <Input type="number" />
              </Form.Item>
              <Form.Item label="Address" name="address">
                  <Input />
              </Form.Item>
              <Form.Item label="Promotion" name="promotion">
                  <Input />
              </Form.Item>
          </Form>
      </Create>
  );
};
