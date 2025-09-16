import clsx from 'clsx';
import { Outlet } from 'react-router';
import CeviWieLogo from '@/assets/logo-cevi-wie.svg?react';
import { useSettings } from '@/contexts/SettingsContext';
import styles from './customer.module.css';

export default function CustomerLayout() {
  const { settings } = useSettings();

  return (
    <div className={styles.root}>
      <header>
        <section className={styles.section}>
          <CeviWieLogo className={styles.logo} />
        </section>
        <section className={clsx(styles.header, styles.section)}>
          <div>{settings.cashRegisterName}</div>
          &mdash;
          <div>
            Sie werden bedient von: <strong>{settings.cashierName}</strong>
          </div>
        </section>
      </header>
      <main className={clsx(styles.section, styles.mainContent)}>
        <h1>Customers</h1>
        <Outlet />
      </main>
    </div>
  );
}
