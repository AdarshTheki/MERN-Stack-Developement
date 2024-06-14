interface GreetProps {
    name: string;
    messageCount: number;
    isLoggedIn?: boolean;
}

export const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
    return (
        <div>
            {isLoggedIn ? (
                <h2>
                    Hey {name}! You have {messageCount} unread messages
                </h2>
            ) : (
                <h2>Welcome Guest</h2>
            )}
        </div>
    );
};
