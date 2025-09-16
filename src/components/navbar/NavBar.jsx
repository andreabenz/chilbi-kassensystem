import {
  ClockCounterClockwiseIcon,
  GearIcon,
  HouseIcon,
  KeyIcon,
  LockIcon,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { useTitle } from '@/contexts/TitleContext';
import styles from './navbar.module.css';

const NavBar = () => {
  const { title } = useTitle();
  const [dateTime, setDateTime] = useState(new Date());
  const dateTimeString = dateTime.toLocaleString();

  useEffect(() => {
    const handle = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.leftNav}>
        <li>
          <NavLink to="/" className={styles.linkButton}>
            <HouseIcon weight="fill" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/overview" className={styles.linkButton}>
            <ClockCounterClockwiseIcon weight="fill" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/closing" className={styles.linkButton}>
            <KeyIcon weight="fill" />
          </NavLink>
        </li>
      </ul>

      <div className={styles.centerNav}>
        <span className={styles.cashRegisterName}>Kasse #1</span>
        <span>|</span>
        <span>{title}</span>
      </div>

      <div className={styles.rightNav}>
        <span className={styles.dateTime}>{dateTimeString}</span>
        <NavLink to="/settings" className={styles.linkButton}>
          <GearIcon weight="fill" />
        </NavLink>
        <button type="button" className={styles.linkButton}>
          <LockIcon weight="fill" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
