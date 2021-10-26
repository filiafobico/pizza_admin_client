import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { IClient } from 'interfaces/client';

export const ClientList: React.FC = () => {
  const { tableProps } = useTable<IClient>();

  return (
      <List>
          <Table<IClient> {...tableProps} rowKey="id">
              <Table.Column dataIndex="id" title="id" />
              <Table.Column dataIndex="name" title="name" />
              <Table.Column dataIndex="cpf" title="cpf" />
              <Table.Column<IClient>
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