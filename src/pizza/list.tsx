import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { IPizza } from 'interfaces/pizza';

export const PizzaList: React.FC = () => {
  const { tableProps } = useTable<IPizza>();

  return (
      <List>
          <Table<IPizza> {...tableProps} rowKey="id">
              <Table.Column dataIndex="id" title="id" />
              <Table.Column dataIndex="name" title="name" />
              <Table.Column dataIndex="flavor" title="flavor" />
              <Table.Column dataIndex="price" title="price" />
              <Table.Column dataIndex="img" title="img" />
              <Table.Column<IPizza>
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