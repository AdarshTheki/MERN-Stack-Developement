import React, { createContext, useContext, useState } from 'react';

type AuthUser = {
    name: string;
    email: string;
};

type UserContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProp = {
    children: React.ReactNode;
};

// const UserContext = createContext<UserContextType | null>(null);
const UserContext = createContext({} as UserContextType);

const UserContextProvider = ({ children }: UserContextProviderProp) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const User = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => setUser({ name: 'Adarsh', email: 'Adarsh@gmail.com' });

    const handleLogout = () => setUser(null);
    return (
        <div>
            <button onClick={handleLogin}>LogIn User</button>
            <button onClick={handleLogout}>LogOut User</button>
            <p>User Name: {user?.name}</p>
            <p>User Email: {user?.email}</p>
        </div>
    );
};

// Wrapper container with User Context Provider
export const UserContainer = () => {
    return (
        <UserContextProvider>
            <User />
        </UserContextProvider>
    );
};
