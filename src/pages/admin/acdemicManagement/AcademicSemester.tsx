import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data, error, isLoading } = useGetAllSemestersQuery();
  console.log(data);
  return <div>This is AcademicSemester Component</div>;
};

export default AcademicSemester;
