import { Outlet } from 'react-router';

export default function HelperLayout() {
  return (
    <div>
      <h1>Helpers</h1>
      <Outlet />
    </div>
  );
}
