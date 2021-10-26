import { useForm, Form, Input, Edit } from "@pankod/refine";
import { IClient } from 'interfaces/client';

export const ClientEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IClient>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Cpf" name="cpf">
                  <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};