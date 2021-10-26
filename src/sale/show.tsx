import {
  Show,
  useShow,
  Typography,
  Tag,
} from "@pankod/refine";

const { Title, Text } = Typography;

export const SaleShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
          <Title level={5}>Client</Title>
          <Text>{record?.client}</Text>

          <Title level={5}>Deliveryman</Title>
          <Text>
              <Tag>{record?.deliveryman}</Tag>
          </Text>

          <Title level={5}>Total</Title>
          <Text>
              <Tag>{record?.total}</Tag>
          </Text>

          <Title level={5}>Address</Title>
          <Text>
              <Tag>{record?.address}</Tag>
          </Text>

          <Title level={5}>Promotion</Title>
          <Text>
              <Tag>{record?.promotion}</Tag>
          </Text>
      </Show>
  );
};