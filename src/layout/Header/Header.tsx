import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <div>Header Component</div>
    </div>
  );
};
