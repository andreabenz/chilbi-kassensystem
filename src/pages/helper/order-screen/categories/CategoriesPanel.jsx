import { categories } from '/JS/items';
import CategoryButton from './CategoryButton';
import styles from './categories-panel.module.css';

const CategoriesPanel = () => {
  return (
    <>
      <h2 className={styles.title}>Kategorien</h2>
      <div className={styles.buttonList}>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            categoryId={category.id}
            name={category.name}
          />
        ))}
      </div>
    </>
  );
};

export default CategoriesPanel;
