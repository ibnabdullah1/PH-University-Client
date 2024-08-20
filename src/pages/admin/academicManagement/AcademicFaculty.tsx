import { Button, Table, TableColumnsType } from "antd";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicFaculty } from "../../../types/academicManagement.type";

export type TTableData = {
  key: string;
  name: string;
};

const AcademicFaculty = () => {
  const { data: facultyData, isFetching } = useGetAllFacultiesQuery(undefined);

  const tableData: TTableData[] =
    facultyData?.data?.map(({ _id, name }: TAcademicFaculty) => ({
      key: _id,
      name,
    })) || [];

  const columns: TableColumnsType<TTableData> = [
    {
      title: "#",
      dataIndex: "key",
      key: "#",
      render: (_value, _record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button>Update</Button>,
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default AcademicFaculty;
