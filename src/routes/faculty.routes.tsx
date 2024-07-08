import { ReactNode } from "react";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import MyStudents from "../pages/faculty/MyStudents";

type TFacultyPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TFacultyPath[];
};

export const facultyPaths: TFacultyPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "My Courses",
    path: "courses",
    element: <MyCourses />,
  },
  {
    name: "My Students",
    path: "courses/:registerSemesterId/:courseId",
    element: <MyStudents />,
  },
];
