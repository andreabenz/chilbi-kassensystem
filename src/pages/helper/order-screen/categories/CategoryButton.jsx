import { useEffect, useState } from 'react';
import styles from './category-button.module.css';

const CategoryButton = ({ categoryId, name }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`@/assets/category-icons/${categoryId}.png`).then((module) => {
      setImageSrc(module.default);
    });
  }, [categoryId]);

  function handleClick() {
    console.debug('Kategorie', categoryId, 'ausgewählt');
  }

  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      <image>
        <img src={imageSrc} alt={name} />
      </image>
      <span>{name}</span>
    </button>
  );
};

export default CategoryButton;
