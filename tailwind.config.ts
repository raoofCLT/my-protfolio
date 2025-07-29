
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				gridMove: {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(100px, 100px)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)' }
				},
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'perspective(1000px) rotateX(30deg) translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'perspective(1000px) rotateX(0deg) translateY(0px)'
					}
				},
				textGlow: {
					'0%': { filter: 'brightness(1)' },
					'100%': { filter: 'brightness(1.2)' }
				},
				iconFloat: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(5deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gridMove': 'gridMove 20s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'fadeInUp': 'fadeInUp 2s ease-out',
				'fadeInDelay1': 'fadeInUp 2s ease-out 0.5s forwards',
				'fadeInDelay2': 'fadeInUp 2s ease-out 1s forwards',
				'fadeInDelay3': 'fadeInUp 2s ease-out 1.5s forwards',
				'textGlow': 'textGlow 3s ease-in-out infinite alternate',
				'textGlowReverse': 'textGlow 3s ease-in-out infinite alternate-reverse',
				'iconFloat': 'iconFloat 4s ease-in-out infinite'
			},
			perspective: {
				'1000': '1000px'
			},
			transform: {
				'rotateX-1': 'rotateX(1deg)',
				'rotateX-2': 'rotateX(2deg)',
				'rotateX-3': 'rotateX(3deg)',
				'rotateY-3': 'rotateY(3deg)',
				'translateZ-5': 'translateZ(5px)'
			},
			spacing: {
				'15': '3.75rem'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.perspective-1000': {
					perspective: '1000px',
				},
				'.scroll-reveal': {
					opacity: '0',
					transform: 'perspective(1000px) rotateX(30deg) translateY(50px)',
					transition: 'all 0.8s ease',
				},
				'.scroll-reveal.revealed': {
					opacity: '1',
					transform: 'perspective(1000px) rotateX(0deg) translateY(0px)',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
