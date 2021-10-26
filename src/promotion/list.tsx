import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { IPromotion } from 'interfaces/promotion';

export const PromotionList: React.FC = () => {
  const { tableProps } = useTable<IPromotion>();

  return (
      <List>
          <Table<IPromotion> {...tableProps} rowKey="id">
              <Table.Column dataIndex="id" title="id" />
              <Table.Column dataIndex="description" title="description" />
              <Table.Column dataIndex="code" title="code" />
              <Table.Column dataIndex="percentage" title="percentage" />
              <Table.Column<IPromotion>
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