import styles from './page.module.css';

const Page = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default Page;
