import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, defaultVal, reducer) => {
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        return JSON.parse(
            window.localStorage.getItem(key) || String(defaultVal)
        );
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, dispatch];
};

export { useLocalStorageReducer };
