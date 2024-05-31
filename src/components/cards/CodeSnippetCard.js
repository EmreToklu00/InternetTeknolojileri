import React from 'react';

const CodeSnippetCard = ({ title, description, codeText }) => {
    return (
        <div >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">{title}</h3>
            <p className="text-gray-800 text-base sm:text-lg mb-4">{description}</p>
            <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                <code className="text-gray-900">{codeText}</code>
            </pre>
        </div>
    );
};

export default CodeSnippetCard;
