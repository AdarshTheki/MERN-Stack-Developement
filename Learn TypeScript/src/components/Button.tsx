interface ButtonProps {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

export const Button = ({ handleClick }: ButtonProps) => {
    return <button onClick={(e) => handleClick(e, 1)}>Click</button>;
};
