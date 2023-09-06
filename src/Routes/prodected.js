import Animals from "../components/Animals/Animals";
import Dashboard from "../components/Dashboard/Dashboard";
import SelectFields from "../components/Select Fields/SelectFields";
import Spendings from "../components/Spendings/Spendings";
import Users from "../components/Users/Users";

export const PROTECTED_ROUTES = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/animals",
    component: <Animals />,
  },
  {
    path: "/select fields",
    component: <SelectFields />,
  },
  {
    path: "/spendings",
    component: <Spendings />,
  },
  {
    path: "/users",
    component: <Users />,
  },
];
