import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton, useMany, TextField } from '@pankod/refine';
import { IAddress } from 'interfaces/address';
import { IClient } from 'interfaces/client';

export const AddressList: React.FC = () => {
  const { tableProps } = useTable<IAddress>();
  const clientIds = tableProps?.dataSource?.map((item) => item.client.id) ?? [];
  const { data: clientsData, isLoading } = useMany<IClient>({
    resource: "clients",
    ids: clientIds,
    queryOptions: {
      enabled: clientIds.length > 0,
    },
  });

  return (
    <List>
      <Table<IAddress> {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="id" />
        <Table.Column
          dataIndex={["client", "id"]}
          title="client"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={
                  clientsData?.data.find(
                    (item) => item.id === value,
                  )?.name
                }
              />
            );
          }}
        />
        <Table.Column dataIndex="street" title="street" />
        <Table.Column dataIndex="number" title="number" />
        <Table.Column<IAddress>
          title="Actions"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton
                  size="small"
                  recordItemId={record.id}
                  hideText
                />
                <EditButton
                  size="small"
                  recordItemId={record.id}
                  hideText
                />
                <DeleteButton
                  size="small"
                  recordItemId={record.id}
                  hideText
                />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};