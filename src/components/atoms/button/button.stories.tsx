import { Meta, StoryObj } from '@storybook/react';
import Button from './button';

// Meta is a type that defines the configuration for your component stories
// args: Default arguments for all stories
// argTypes: Configuration for the controls panel
// StoryObj is a type that defines the configuration for your component stories

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
  parameters: {
    layout: 'fullscreen',
  },
  // decorators: [
  //   (Story) => (
  //     <div style={{padding: '2rem'}} className='dark:bg-black dark:text-white'>
  //       <Story />
  //     </div>
  //   )
  // ],
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'medium'
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The text content of the button'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'The variant of the button'
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Srivastava',
    variant: 'primary',
    disabled: false,
    size: 'medium'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    disabled: false,
    size: 'medium'
  }
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
    disabled: false,
    size: 'medium'
  }
};

export const Dark: Story = {
  parameters:{
    themes: {
      themeOverride: 'dark'
    }
  }
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}