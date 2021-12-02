import { useForm, Form, Input, Edit, useSelect, Select } from "@pankod/refine";
import { IAddress } from 'interfaces/address';
import { IClient } from 'interfaces/client';

export const AddressEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<IAddress>();
  const { selectProps: clients } = useSelect<IClient>({
    resource: "clients",
    defaultValue: queryResult?.data?.data?.client.id,
    optionLabel: "name",
    optionValue: "id",
  });
console.log(clients)
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Clients" name={["client", "id"]}>
            <Select
              {...clients}
            />
        </Form.Item>
        <Form.Item label="Street" name="street">
          <Input />
        </Form.Item>
        <Form.Item label="Number" name="number">
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};