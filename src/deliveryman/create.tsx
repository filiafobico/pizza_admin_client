import {
  Create,
  Form,
  Input,
  useForm} from "@pankod/refine";
import { IDeliveryman } from 'interfaces/deliveryman';

export const DeliverymanCreate = () => {
  const { formProps, saveButtonProps } = useForm<IDeliveryman>();

  return (
      <Create saveButtonProps={saveButtonProps}>
          <Form {...formProps} layout="vertical">
              <Form.Item label="Name" name="name">
                  <Input />
              </Form.Item>
              <Form.Item label="Cpf" name="cpf">
                  <Input />
              </Form.Item>
          </Form>
      </Create>
  );
};
