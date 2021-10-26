import { useForm, Form, Input, Edit } from "@pankod/refine";
import { IDeliveryman } from 'interfaces/deliveryman';

export const DeliverymanEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IDeliveryman>();

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