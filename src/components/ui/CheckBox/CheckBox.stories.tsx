import React from 'react';
import { ComponentMeta } from '@storybook/react';

import CheckBox from './';
import { CheckBoxProps } from './interface';

export default {
    title: 'CheckBox',
    component: CheckBox,
    argTypes: {
        color: { control: 'color' },
        bgcolor: { control: 'color' },
        text: { control: 'text' },
    }
} as ComponentMeta<typeof CheckBox>;

export const Primary = (args: CheckBoxProps) => {
    const [checked, setChecked] = React.useState(false);
    const toggleChecked = () => setChecked((prev) => !prev);
    return <CheckBox {...args} checked={checked} toggleChecked={toggleChecked} color="primary-blue" bgcolor="primary-light_blue" />
}