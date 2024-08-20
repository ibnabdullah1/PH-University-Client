import { Button, Table, TableColumnsType } from "antd";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicDepartment } from "../../../types/academicManagement.type";

export type TTableData = {
  key: string;
  name: string;
  facultyName: string;
};

const AcademicDepartment = () => {
  const { data: departmentData, isFetching } =
    useGetAllDepartmentsQuery(undefined);

  const tableData: TTableData[] =
    departmentData?.data?.map(
      ({ _id, name, academicFaculty }: TAcademicDepartment) => ({
        key: _id,
        name,
        facultyName: academicFaculty?.name || "N/A",
      })
    ) || [];

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
      title: "Faculty",
      dataIndex: "facultyName",
      key: "facultyName",
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

export default AcademicDepartment;
