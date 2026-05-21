import React from 'react';
import {Button} from "@heroui/react";
import MiniFooter from "@/app/components/shared/MiniFooter";

const TabsLayout = ({ children }) => {
    return (
        <main className=''>
            {children}
            <MiniFooter />
        </main>
    );
};

export default TabsLayout;