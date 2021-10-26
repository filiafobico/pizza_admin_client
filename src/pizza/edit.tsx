import { useForm, Form, Input, Edit, Radio } from "@pankod/refine";
import { IPizza } from 'interfaces/pizza';

export const PizzaEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IPizza>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
        </Edit>
    );
};