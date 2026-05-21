import React from 'react';
import MiniFooter from '@/app/components/shared/MiniFooter';

const layout = ({children}) => {
    return (
        <main className="">
            {children}
            <MiniFooter />
        </main>
    );
};

export default layout;