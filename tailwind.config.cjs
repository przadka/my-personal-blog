function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		// Remove the following screen breakpoint or add other breakpoints
		// if one breakpoint is not enough for you
		screens: {
			sm: "640px",
		},

		extend: {
			textColor: {
				skin: {
					base: withOpacity("--color-text-base"),
					accent: withOpacity("--color-accent"),
					"accent-muted": withOpacity("--color-accent-muted"),
					inverted: withOpacity("--color-fill"),
				},
			},
			backgroundColor: {
				skin: {
					fill: withOpacity("--color-fill"),
					accent: withOpacity("--color-accent"),
					"accent-muted": withOpacity("--color-accent-muted"),
					inverted: withOpacity("--color-text-base"),
					card: withOpacity("--color-card"),
					"card-muted": withOpacity("--color-card-muted"),
				},
			},
			outlineColor: {
				skin: {
					fill: withOpacity("--color-accent"),
				},
			},
			borderColor: {
				skin: {
					line: withOpacity("--color-border"),
					fill: withOpacity("--color-text-base"),
					accent: withOpacity("--color-accent"),
					"accent-muted": withOpacity("--color-accent-muted"),
				},
			},
			fill: {
				skin: {
					base: withOpacity("--color-text-base"),
					accent: withOpacity("--color-accent"),
				},
				transparent: "transparent",
			},
			fontFamily: {
				mono: ["Basier Mono", "Fira Mono", "monospace"],
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
