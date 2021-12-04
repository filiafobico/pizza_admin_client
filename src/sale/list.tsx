import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton, useMany, TextField } from '@pankod/refine';
import { IClient } from 'interfaces/client';
import { ISale } from 'interfaces/sale';

export const SaleList: React.FC = () => {
  const { tableProps } = useTable<ISale>();
  const clientIds = tableProps?.dataSource?.map((item) => item.client?.id) ?? [];
  console.log(clientIds)
  const { data: clientsData, isLoading } = useMany<IClient>({
    resource: "clients",
    ids: clientIds,
    queryOptions: {
      enabled: clientIds.length > 0,
    },
  });
  const deliverymanIds = tableProps?.dataSource?.map((item) => item.deliveryman?.id) ?? [];
  console.log(deliverymanIds)
  const { data: deliverymanData, isLoading: dIsLoading } = useMany<IClient>({
    resource: "deliverymen",
    ids: deliverymanIds,
    queryOptions: {
      enabled: deliverymanIds.length > 0,
    },
  });

  return (
      <List>
          <Table<ISale> {...tableProps} rowKey="id">
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
              <Table.Column
                dataIndex={["deliveryman", "id"]}
                title="deliveryman"
                render={(value) => {
                  if (dIsLoading) {
                    return <TextField value="Loading..." />;
                  }

                  return (
                    <TextField
                      value={
                        deliverymanData?.data.find(
                          (item) => item.id === value,
                        )?.name
                      }
                    />
                  );
                }}
              />
              <Table.Column dataIndex="total" title="total" />
              <Table.Column<ISale>
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