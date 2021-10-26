import {
  Show,
  useShow,
  Typography,
  Tag,
} from "@pankod/refine";

const { Title, Text } = Typography;

export const PromotionShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
          <Title level={5}>Description</Title>
          <Text>{record?.description}</Text>

          <Title level={5}>Code</Title>
          <Text>
              <Tag>{record?.code}</Tag>
          </Text>

          <Title level={5}>Percentage</Title>
          <Text>
              <Tag>{record?.percentage}</Tag>
          </Text>
      </Show>
  );
};