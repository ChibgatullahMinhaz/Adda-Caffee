import React, { type ReactNode } from 'react';
interface tableElement {
    children: ReactNode
}
const Table: React.FunctionComponent<tableElement> = ({ children }) => {
    return (
        <tr>
            {children}
        </tr>
    );
};

export { Table };