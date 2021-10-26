import {
  Create,
  Form,
  Input,
  Radio,
  useForm} from "@pankod/refine";
import { IPizza } from 'interfaces/pizza';

export const PizzaCreate = () => {
  const { formProps, saveButtonProps } = useForm<IPizza>();

  return (
      <Create saveButtonProps={saveButtonProps}>
          <Form {...formProps} layout="vertical">
              <Form.Item label="Name" name="name">
                  <Input />
              </Form.Item>
              <Form.Item label="Flavor" name="flavor">
                  <Input />
              </Form.Item>
              <Form.Item label="Price" name="price">
                  <Input type="number" />
              </Form.Item>
              <Form.Item label="Size" name="size">
                <Radio.Group>
                    <Radio value="small">Small</Radio>
                    <Radio value="medium">Medium</Radio>
                    <Radio value="big">Big</Radio>
                    <Radio value="giga">Giga</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Image" name="img">
                  <Input />
              </Form.Item>
          </Form>
      </Create>
  );
};
