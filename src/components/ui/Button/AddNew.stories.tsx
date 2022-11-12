import { ComponentMeta } from '@storybook/react';
import React from 'react';
import AddNew from './AddNew';

export default {
    title: 'Add New Button',
    component: AddNew,
    argTypes: {

    },
} as ComponentMeta<typeof AddNew>;

export const Primary = (args: any) => {
    return (
        <AddNew {...args} />
    );
}