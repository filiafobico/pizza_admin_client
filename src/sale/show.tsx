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
          <Text>{record?.client?.name}</Text>

          <Title level={5}>Deliveryman</Title>
          <Text>{record?.deliveryman?.name}</Text>

          <Title level={5}>Address</Title>
          <Text>
              <Tag>{record?.adress?.street}</Tag>
          </Text>

          <Title level={5}>Promotion</Title>
          <Text>
              <Tag>{record?.promotion?.description}</Tag>
          </Text>

          <Title level={5}>Total</Title>
          <Text>
              <Tag>{record?.total}</Tag>
          </Text>
      </Show>
  );
};