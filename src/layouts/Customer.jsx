import { Outlet } from 'react-router';

export default function CustomerLayout() {
  return (
    <div>
      <h1>Customers</h1>
      <Outlet />
    </div>
  );
}
