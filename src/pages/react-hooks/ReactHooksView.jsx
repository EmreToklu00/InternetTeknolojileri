import React from "react";
import ReactLogo from "../../assets/logo.svg";
import CodeSnippetCard from "../../components/cards/CodeSnippetCard";

const ReactHooksView = () => (
    <div className="bg-white min-h-screen p-4 sm:p-8">
        <div className="container mx-auto bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse mb-6">
                <img src={ReactLogo} className="h-12" alt="React Logo" />
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
                    React Hooks Nedir ?
                </h1>
            </div>
            <p className="text-gray-800 text-base sm:text-lg mb-4">
                React Hooks, React sürüm 16.8 ile tanıtılan ve fonksiyonel bileşenlerde
                state ve diğer React özelliklerini kullanmamızı sağlayan JavaScript
                fonksiyonlarıdır. Bu kılavuzda, yaygın olarak kullanılan React
                Hooks'ları ele alacağız ve bunların nasıl kullanıldığını örneklerle
                göstereceğiz.
            </p>

            <CodeSnippetCard
                title="1. useState"
                description="`useState`, bir state değişkeni tanımlamak ve onu güncellemek için kullanılır."
                codeText={`
import React, { useState } from 'react';
const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
`}
            />

            <CodeSnippetCard
                title="2. useEffect"
                description="
`useEffect`, component'in mount ve update anlarında yan etkileri (örneğin, DOM manipülasyonu veya veri çağrısı) gerçekleştirmek için kullanılır.
                "
                codeText={`
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Veri çağrısı yapma
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div>
            {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
        </div>
    );
};
`}
            />

            <CodeSnippetCard
                title="3. useContext"
                description="
`useContext`, bir context'ten değer almak için kullanılır.
                "
                codeText={`
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ExampleComponent = () => {
    const theme = useContext(ThemeContext);

    return (
        <div style={{ color: theme.textColor }}>
            <p>Current Theme: {theme.name}</p>
        </div>
    );
};
`}
            />

            <CodeSnippetCard
                title="4. useReducer"
                description="
`useReducer`, complex state mantığı ve state değişimlerini yönetmek için kullanılır.
                "
                codeText={`
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const ExampleComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
};
`}
            />

            <CodeSnippetCard
                title="5. useRef"
                description="
`useRef`, DOM elementlerine referans almak veya değerlerini saklamak için kullanılır.
            "
                codeText={`
import React, { useRef, useEffect } from 'react';

const ExampleComponent = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
};
`}
            />

            <CodeSnippetCard
                title="6. useCallback"
                description="
`useCallback`, memoize edilmiş callback fonksiyonları oluşturmak için kullanılır.
            "
                codeText={`
import React, { useState, useCallback } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};
`}
            />

            <CodeSnippetCard
                title="7. useMemo"
                description="
`useMemo`, hesaplanmış değerleri memoize etmek için kullanılır.
            "
                codeText={`
import React, { useState, useMemo } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Double Count: {doubleCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
`}
            />

            <p className="text-gray-800 text-base sm:text-lg mb-4">
                Yaygın olarak kullanılan React Hooks'ları bunlardır ve her birinin
                kullanımını örneklerle gösterdik. Her hook'un ne yaptığını ve nasıl
                kullanıldığını anlamak, React uygulamalarınızda daha verimli ve güçlü
                bileşenler oluşturmanıza yardımcı olacaktır.
            </p>
        </div>
    </div>
);

export default ReactHooksView;
