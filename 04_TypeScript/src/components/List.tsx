type ListProps<T> = {
    items: T[];
    handleClick: (value: T) => void;
};

// Generic
export const List = <T extends { id: number }>({ items, handleClick }: ListProps<T>) => {
    return (
        <div>
            {items.map((item) => {
                return (
                    <p key={item.id} onClick={() => handleClick(item)}>
                        {item.id}
                    </p>
                );
            })}
        </div>
    );
};
