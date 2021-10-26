import {
  Show,
  useShow,
  Typography,
  Tag,
} from "@pankod/refine";

const { Title, Text } = Typography;

export const PizzaShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
          <Title level={5}>Name</Title>
          <Text>{record?.name}</Text>

          <Title level={5}>Flavor</Title>
          <Text>
              <Tag>{record?.flavor}</Tag>
          </Text>

          <Title level={5}>Price</Title>
          <Text>
              <Tag>{record?.price}</Tag>
          </Text>

          <Title level={5}>Flavor</Title>
          <Text>
              <Tag>{record?.flavor}</Tag>
          </Text>

          <Title level={5}>Image</Title>
          <Text>
              <Tag>{record?.img}</Tag>
          </Text>
      </Show>
  );
};