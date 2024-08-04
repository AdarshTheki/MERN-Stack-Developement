interface InputsProp {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, handleChange }: InputsProp) => {
    return <input type='text' value={value} onChange={handleChange} />;
};
