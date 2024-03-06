import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Components/Form/Input',
	component: Input,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		errorText: 'Whoops!',
		id: 'input-id',
		isInvalid: false,
		label: 'Some field label',
		onChange: undefined,
		required: true,
		value: 'Value 1',
		description: 'Additional description text',
		placeholder: 'Placeholder text',
		type: 'text',
	},
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
