interface Name {
    first: string;
    last: string;
}

interface PersonProps {
    names: Name[];
}

export const PersonList = ({ names }: PersonProps) => {
    return (
        <div>
            {names.map((name) => {
                return (
                    <h2 key={name.first}>
                        {name.first}, {name.last}
                    </h2>
                );
            })}
        </div>
    );
};
