import { ReactNode } from "react";
import MySchedule from "../pages/student/MySchedule";
import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

type TStudentPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TStudentPath[];
};

export const studentPaths: TStudentPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Student Management",
    children: [
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />,
      },
      {
        name: "My Schedule",
        path: "my-schedule",
        element: <MySchedule />,
      },
    ],
  },
];
