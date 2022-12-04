const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './js/**/*.vue',
        './js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': 'rgb(var(--primary) / <alpha-value>)',
                'primary-alt': 'rgb(var(--primary-alt) / <alpha-value>)',
                'secondary': 'rgb(var(--secondary) / <alpha-value>)',
                'secondary-alt': 'rgb(var(--secondary-alt) / <alpha-value>)',
                'muted': 'rgb(var(--muted) / <alpha-value>)',
                'muted-alt': 'rgb(var(--muted-alt) / <alpha-value>)',
                // 'accent': 'rgb(var(--accent) / <alpha-value>)',
                // 'accent-alt': 'rgb(var(--accent-alt) / <alpha-value>)',
                'success': 'rgb(var(--success) / <alpha-value>)',
                'success-alt': 'rgb(var(--success-alt) / <alpha-value>)',
                'error': 'rgb(var(--error) / <alpha-value>)',
                'error-alt': 'rgb(var(--error-alt) / <alpha-value>)',
                'info': 'rgb(var(--info) / <alpha-value>)',
                'info-alt': 'rgb(var(--info-alt) / <alpha-value>)',
                'warning': 'rgb(var(--warning) / <alpha-value>)',
                'warning-alt': 'rgb(var(--warning-alt) / <alpha-value>)',
                'body': 'rgb(var(--body) / <alpha-value>)',
                'heading': 'rgb(var(--heading) / <alpha-value>)',
                'link': 'rgb(var(--link) / <alpha-value>)',
                // Forms
                'input-label': 'rgb(var(--input-label) / <alpha-value>)',
                'input-placeholder': 'rgb(var(--input-placeholder) / <alpha-value>)',
                'input-text': 'rgb(var(--input-text) / <alpha-value>)',
                'input-bg': 'rgb(var(--input-bg) / <alpha-value>)',
                'input-border': 'rgb(var(--input-border) / <alpha-value>)',
                // Form focus states
                'input-border-focus': 'rgb(var(--input-border-focus) / <alpha-value>)',
                'input-bg-focus': 'rgb(var(--input-bg-focus) / <alpha-value>)',
                'input-text-focus': 'rgb(var(--input-text-focus) / <alpha-value>)',

                'input-disabled-text': 'rgb(var(--input-disabled-text) / <alpha-value>)',
                'input-disabled-bg': 'rgb(var(--input-disabled-bg) / <alpha-value>)',
                'input-disabled-border': 'rgb(var(--input-disabled-border) / <alpha-value>)',
                'input-readonly-text': 'rgb(var(--input-readonly-text) / <alpha-value>)',
                'input-readonly-bg': 'rgb(var(--input-readonly-bg) / <alpha-value>)',
                'input-readonly-border': 'rgb(var(--input-readonly-border) / <alpha-value>)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ],
};
