import { Outlet } from 'react-router';
import NavBar from '@/components/navbar';
import Page from '@/components/page';

export default function HelperLayout() {
  return (
    <>
      <NavBar />
      <Page>
        <h1>Helpers</h1>
        <Outlet />
      </Page>
    </>
  );
}
