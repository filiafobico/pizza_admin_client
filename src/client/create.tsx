import {
  Create,
  Form,
  Input,
  useForm} from "@pankod/refine";
import { IClient } from 'interfaces/client';

export const ClientCreate = () => {
  const { formProps, saveButtonProps } = useForm<IClient>();

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
