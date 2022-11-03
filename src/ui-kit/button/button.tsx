import React, { FC } from 'react';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import cn from 'classnames';
import style from './Button.module.scss';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  destination: 'like' | 'follow' | 'empty';
  children: React.ReactNode;
}

const getIcon = (destination: ButtonProps['destination']) => {
  switch (destination) {
    case 'like':
      return <Heart className={style.icon_like} />;
    case 'follow':
      return <Plus className={style.icon_follow} />;
    case 'empty':
      return null;
    default:
      return null;
  }
};

export const Button: FC<ButtonProps> = ({ destination = 'like', children, ...rest }) => {
  const mainCn = cn(style.button, style[destination]);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading,react/button-has-type
    <button className={mainCn} {...rest}>
      <div className={style.button_inner}>
        {getIcon(destination)}
        <span>{children}</span>
      </div>
    </button>
  );
};
