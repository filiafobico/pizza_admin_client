import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { IDeliveryman } from 'interfaces/deliveryman';

export const DeliverymanList: React.FC = () => {
  const { tableProps } = useTable<IDeliveryman>();

  return (
      <List>
          <Table<IDeliveryman> {...tableProps} rowKey="id">
              <Table.Column dataIndex="id" title="id" />
              <Table.Column dataIndex="name" title="name" />
              <Table.Column dataIndex="cpf" title="cpf" />
              <Table.Column<IDeliveryman>
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