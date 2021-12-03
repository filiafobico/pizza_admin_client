import {
  Create,
  Form,
  Input,
  useForm} from "@pankod/refine";
import { IPromotion } from 'interfaces/promotion';

export const PromotionCreate = () => {
  const { formProps, saveButtonProps } = useForm<IPromotion>();

  return (
      <Create saveButtonProps={saveButtonProps}>
          <Form {...formProps} layout="vertical">
              <Form.Item label="Description" name="description">
                  <Input />
              </Form.Item>
              <Form.Item label="Code" name="code">
                  <Input />
              </Form.Item>
              <Form.Item label="Percentage" name="percentage">
                  <Input  type="number" />
              </Form.Item>
              <Form.Item label="ExpiresAt" name="expiresAt">
                  <Input type="datetime-local"/>
              </Form.Item>
          </Form>
      </Create>
  );
};
