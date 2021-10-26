import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { ISale } from 'interfaces/sale';

export const SaleList: React.FC = () => {
  const { tableProps } = useTable<ISale>();

  return (
      <List>
          <Table<ISale> {...tableProps} rowKey="id">
              <Table.Column dataIndex="id" title="id" />
              <Table.Column dataIndex="client" title="client" />
              <Table.Column dataIndex="deliveryman" title="deliveryman" />
              <Table.Column dataIndex="total" title="total" />
              <Table.Column dataIndex="address" title="address" />
              <Table.Column dataIndex="promotion" title="promotion" />
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