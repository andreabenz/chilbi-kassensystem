import Panel from '@/components/panel/Panel';
import BillPanel from './bill/BillPanel';
import CategoriesPanel from './categories/CategoriesPanel';
import ItemsPanel from './items/ItemsPanel';
import styles from './order-screen.module.css';

const OrderScreen = () => {
  return (
    <main className={styles.layout}>
      <Panel>
        <CategoriesPanel />
      </Panel>
      <Panel style={{ flex: 1 }}>
        <ItemsPanel />
      </Panel>
      <Panel style={{ width: 'min(30rem, 30%)' }}>
        <BillPanel />
      </Panel>
    </main>
  );
};

export default OrderScreen;
