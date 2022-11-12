import AddNew from '@ui/Button/AddNew';
import React from 'react';
import { RootLayout } from '../interface/RootLayout';

const Home = ({children}: RootLayout) => {
    return (
        <div>
            <AddNew />
        </div>
    )
};

export default Home;