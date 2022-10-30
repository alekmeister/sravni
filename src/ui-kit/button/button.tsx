import React, { FC } from 'react';
import style from 'ui-kit/Button/Button.module.scss';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import cn from 'classnames';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  destination: 'like' | 'follow' | 'empty';
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ type = 'button', destination = 'like', children }) => {
  const mainCn = cn(style.button, style[destination]);
  let icon;
  switch (destination) {
    case 'like':
      icon = <Heart className={style.icon_like} />;
      break;
    case 'follow':
      icon = <Plus className={style.icon_follow} />;
      break;
    case 'empty':
      icon = null;
      break;
    default:
      icon = null;
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={mainCn} type={type}>
      <div className={style.button_inner}>
        {icon}
        <span> {children}</span>
      </div>
    </button>
  );
};
