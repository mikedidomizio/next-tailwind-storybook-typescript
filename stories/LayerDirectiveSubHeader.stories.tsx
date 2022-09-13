import React from 'react';

import { LayerDirectiveSubHeader } from '../components/LayerDirectiveSubHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tailwind/LayerDirectiveSubHeader',
    component: LayerDirectiveSubHeader,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LayerDirectiveSubHeader {...args} />;

export const RedFont = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RedFont.args = {
    children: "This font should be red"
};
