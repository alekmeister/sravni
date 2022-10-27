import React, { FC } from 'react';
import styles from './TemplateName.module.scss';

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <div className={styles.TemplateName}>
      <div>TemplateName Component</div>
    </div>
  );
};
