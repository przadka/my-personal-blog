/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		// Remove the following screen breakpoint or add other breakpoints
		// if one breakpoint is not enough for you
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
		},

		extend: {
			fontFamily: {
				mono: ["Basier Mono", "monospace"],
				sans: ["Fira Sans", "sans-serif"],
			},
			keyframes: {
				blink: {
					"0%, 50%": { opacity: "1" },
					"51%, 100%": { opacity: "0" },
				},
			},
			animation: {
				blink: "blink 1s ease-in-out infinite",
			},
			typography: {
				DEFAULT: {
					css: {
						pre: {
							color: false,
						},
						code: {
							color: false,
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],

	daisyui: {
		logs: false,
	},
};
