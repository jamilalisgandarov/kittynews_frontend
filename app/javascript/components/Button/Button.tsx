import * as React from 'react';
import './index.scss';
import classnames from 'classnames';

interface ButtonProps {
    variant?: "contained" | "outlined";
    color?: "primary" | "secondary",
    prefix?: string | JSX.Element;
    postfix?: string | JSX.Element;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    classNames?: string;
}

export const Button:React.FC<React.PropsWithChildren<ButtonProps >> = ({
    variant = "contained",
    color = "primary",
    prefix,
    postfix,
    children,
    disabled,
    onClick,
    classNames = '',
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={
        classnames('button',classNames, {
            primary: color === "primary",
            secondary: color === "secondary",
            contained: variant === "contained",
            outlined: variant === "outlined"
        })
    }>
        {prefix && (
            <span className='prefix'>
                {prefix}
            </span>
        )}
        {children}
        {postfix && (
            <span className='postfix'>
                {postfix}
            </span>
        )}
    </button>
  )
}
