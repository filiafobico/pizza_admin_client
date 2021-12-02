import {
  Show,
  useShow,
  Typography,
  Tag,
  useOne,
} from "@pankod/refine";
import { IClient } from 'interfaces/client';

const { Title, Text } = Typography;

export const AddressShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;
  const { data: clientData } = useOne<IClient>({
    resource: "clients",
    id: record?.client.id || "",
    queryOptions: {
      enabled: !!record?.client.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Client</Title>
      <Text>{clientData?.data.name} <Tag>{clientData?.data.cpf}</Tag></Text>

      <Title level={5}>Street</Title>
      <Text>{record?.street}</Text>

      <Title level={5}>Number</Title>
      <Text>
        <Tag>{record?.number}</Tag>
      </Text>
    </Show>
  );
};