import React, { FC } from 'react';
import style from './TemplateName.module.scss';

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <div className={style.templateName}>
      <div>TemplateName Component</div>
    </div>
  );
};
