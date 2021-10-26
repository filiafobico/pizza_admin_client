import {
  Show,
  useShow,
  Typography,
  Tag,
} from "@pankod/refine";

const { Title, Text } = Typography;

export const DeliveryShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
          <Title level={5}>Name</Title>
          <Text>{record?.name}</Text>

          <Title level={5}>Cpf</Title>
          <Text>
              <Tag>{record?.cpf}</Tag>
          </Text>
      </Show>
  );
};