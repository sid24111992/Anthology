import React from 'react';
import { colors } from '@/tokens/colors';

// Define button variants and their properties
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColorScheme = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  colorScheme?: ButtonColorScheme;
  disabled?: boolean;
  children: React.ReactNode;
}

// Base styles for all buttons
const baseStyles = {
  layout: {
    borderRadius: '0.375rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: {
      small: '0.25rem 0.75rem',
      medium: '0.5rem 1rem',
      large: '0.75rem 1.5rem'
    },
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem'
    }
  },
  typography: {
    fontWeight: '600',
    lineHeight: '1.5'
  },
  transitions: {
    duration: '200ms',
    timing: 'ease-in-out'
  }
};

// Variant specific styles
const variantStyles = {
  primary: {
    base: {
      backgroundColor: colors.primary.light,
      color: colors.foreground.light,
      borderColor: colors.primary.light
    },
    hover: {
      backgroundColor: colors.primary.lighter
    }
  },
  secondary: {
    base: {
      backgroundColor: colors.secondary.light,
      color: colors.foreground.light,
      borderColor: colors.secondary.light
    },
    hover: {
      backgroundColor: colors.secondary.lighter
    }
  },
  danger: {
    base: {
      backgroundColor: colors.accent.light,
      color: colors.foreground.light,
      borderColor: colors.accent.light
    },
    hover: {
      backgroundColor: colors.accent.lighter
    }
  },
  outline: {
    base: {
      backgroundColor: 'transparent',
      color: colors.primary.light,
      borderColor: colors.primary.light
    },
    hover: {
      backgroundColor: colors.primary.lighter,
      color: colors.foreground.light
    }
  }
};

// Color scheme mapping
const colorSchemeMap = {
  primary: colors.primary,
  secondary: colors.secondary,
  accent: colors.accent,
  success: colors.success,
  warning: colors.warning,
  info: colors.info
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'medium',
  colorScheme = 'primary',
  disabled = false,
  className = '',
  ...props
}) => {
  // Get color values based on color scheme
  const colorValues = colorSchemeMap[colorScheme as keyof typeof colorSchemeMap];

  // Get variant styles
  const variantStyle = variantStyles[variant as keyof typeof variantStyles];

  // Base styles
  const baseStyle = {
    ...baseStyles.layout,
    padding: baseStyles.layout.padding[size],
    fontSize: baseStyles.layout.fontSize[size],
    ...baseStyles.typography,
    ...baseStyles.transitions,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    backgroundColor: disabled ? colors.background.dark : variantStyle.base.backgroundColor,
    color: disabled ? colors.foreground.light : variantStyle.base.color,
    borderColor: disabled ? colors.background.dark : variantStyle.base.borderColor
  };

  // Hover styles
  const hoverStyle = {
    backgroundColor: variantStyle.hover.backgroundColor
  };

  // Combine all styles
  const style = {
    ...baseStyle,
    ...(disabled ? {} : {
      '&:hover': hoverStyle
    })
  };

  return (
    <button
      className={`rounded-md transition-all duration-200 ${className}`}
      style={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;