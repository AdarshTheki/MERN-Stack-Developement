interface StatusProp {
    status: 'loading' | 'success' | 'error';
}

export const Status = ({ status }: StatusProp) => {
    let message;
    if (status === 'loading') {
        message = 'Loading...';
    }
    if (status === 'success') {
        message = 'Success...';
    }
    if (status === 'error') {
        message = 'Error...';
    }
    return <h2>Status - {message}</h2>;
};
