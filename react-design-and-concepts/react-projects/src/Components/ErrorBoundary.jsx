import React, { useState } from 'react';

export default function Test() {
    return (
        <ErrorBoundary>
            <h2>Hello, This is a Child Components</h2>
        </ErrorBoundary>
    );
}

function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    const [errorInfo, setErrorInfo] = useState(null);

    function componentsDidCatch(err, errInfo) {
        setHasError(true);
        setError(err);
        setErrorInfo(errInfo);
    }

    if (hasError) {
        // customize fallback UI
        return (
            <div>
                <h2>Some thing was wrong.</h2>
                <p>{error && error.toString()}</p>
            </div>
        );
    }

    return children;
}
