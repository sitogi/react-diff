import { JSX } from 'react';

import styles from './index.module.css';

export function DiffViewer(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.splitTextContainer}>oldText</div>
      <div className={styles.splitTextContainer}>newText</div>
    </div>
  );
}
