interface OscarProp {
    children: React.ReactNode;
}

export const Oscar = ({ children }: OscarProp) => {
    return <div>{children}</div>;
};
