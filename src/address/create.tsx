import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect
} from "@pankod/refine";
import { IAddress } from 'interfaces/address';
import { IClient } from 'interfaces/client';

export const AddressCreate = () => {
  const { formProps, saveButtonProps } = useForm<IAddress>();
  const { selectProps: clients } = useSelect<IClient>({
    resource: "clients",
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Clients" name={["client", "id"]}>
          <Select {...clients} />
        </Form.Item>
        <Form.Item label="Street" name="street">
          <Input />
        </Form.Item>
        <Form.Item label="Number" name="number">
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};

