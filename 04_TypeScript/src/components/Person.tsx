interface Name {
    first: string;
    last: string;
}

interface PersonProps {
    name: Name;
}

export const Person = ({ name }: PersonProps) => {
    return (
        <h2>
            {name.first}, {name.last}
        </h2>
    );
};
