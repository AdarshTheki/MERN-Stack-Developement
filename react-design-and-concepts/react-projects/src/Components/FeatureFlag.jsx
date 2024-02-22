import React, { createContext, useContext, useEffect, useState } from 'react';
import featureFlagDataServiceCall from './feature-data';
import { menus } from './tree-views';
import TreeViews from './TreeViews';
import ThemeSwitch from './ThemeSwitch';
import TicTacToe from './TicTacToe';
import Accordion from './Accordion';
import RandomColor from './RandomColor';
import Tabs from './Tabs';

// create Context
export const FeatureFlagContext = createContext();

function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(true);
    const [enableFlag, setEnableFlag] = useState({});

    useEffect(() => {
        async function fetchFeatureFlag() {
            try {
                const res = await featureFlagDataServiceCall();
                setEnableFlag(res);
            } catch (error) {
                throw new Error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchFeatureFlag();
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ enableFlag, loading }}>
            {children}
        </FeatureFlagContext.Provider>
    );
}

// Main Feature Flag Components
function FeatureFlagComponents() {
    const { loading, enableFlag } = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <ThemeSwitch />,
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />,
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />,
        },
        {
            key: 'showAccordion',
            component: <Accordion />,
        },
        {
            key: 'showTreeView',
            component: <TreeViews menus={menus} />,
        },
        {
            key: 'showTabs',
            component: <Tabs />,
        },
    ];

    function checkEnableFlag(current) {
        return enableFlag[current];
    }

    if (loading) return <h2 className='wrapper'>Loading ! Please wait...</h2>;

    return (
        <div className='wrapper'>
            <h2>Feature Flags:</h2>
            {componentsToRender.map((item) =>
                checkEnableFlag(item.key) ? <div key={item.key}>{item.component}</div> : null
            )}
        </div>
    );
}

// Wrapper Context API Final Components Exports
export default function FeatureFlag() {
    return (
        <FeatureFlagGlobalState>
            <FeatureFlagComponents />
        </FeatureFlagGlobalState>
    );
}
