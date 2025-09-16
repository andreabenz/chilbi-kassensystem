import { Outlet } from 'react-router';
import NavBar from '@/components/navbar/NavBar';
import styles from './helper.module.css';

export default function HelperLayout() {
  return (
    <div className={styles.layout}>
      <NavBar />
      <Outlet />
    </div>
  );
}
