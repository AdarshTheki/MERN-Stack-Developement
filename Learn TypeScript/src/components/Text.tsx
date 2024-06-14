import React from 'react';

// Create Custom Element
type TextOwnProps<E extends React.ElementType> = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
    as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'div'>({
    size = 'md',
    color = 'primary',
    children,
    as,
    ...rest
}: TextProps<E>) => {
    const Component = as || 'div';
    return (
        <Component className={`text-${size} text-${color}`} {...rest}>
            {children}
        </Component>
    );
};

export default Text;
