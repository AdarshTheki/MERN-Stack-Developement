import React from 'react';

// Define custom props for the Input component
type InputOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'; // Optional size prop
    variant?: 'outline' | 'solid'; // Optional variant prop
    as?: E; // Optional prop to specify a different HTML element or custom component
};

type InputProps<E extends React.ElementType> = InputOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof InputOwnProps<E>>;

// Define Tailwind CSS classes for different sizes
const sizeClasses = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-3 text-base',
    lg: 'py-3 px-4 text-lg',
};

// Define Tailwind CSS classes for different variants
const variantClasses = {
    outline: 'border border-gray-300 focus:border-blue-500',
    solid: 'bg-gray-100 focus:bg-white',
};

// Create the Input component
export const CustomInput = <E extends React.ElementType = 'input'>({
    size = 'md', // Default size is 'md'
    variant = 'outline', // Default variant is 'outline'
    as,
    ...props
}: InputProps<E>) => {
    const Component = as || 'input'; // Default HTML element is 'input'
    const sizeClass = sizeClasses[size];
    const variantClass = variantClasses[variant];

    return (
        <Component
            className={`rounded ${sizeClass} ${variantClass} focus:outline-none`}
            {...props}
        />
    );
};

