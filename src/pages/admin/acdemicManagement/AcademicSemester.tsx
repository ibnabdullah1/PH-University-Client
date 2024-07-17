import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data, error, isLoading } = useGetAllSemestersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error?.message}</div>;

  console.log(data);
  return <div>This is AcademicSemester Component</div>;
};

export default AcademicSemester;
