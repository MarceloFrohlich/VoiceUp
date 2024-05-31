/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
        slideInFromRight: 'slideInFromRight 1s ease-out forwards',
      },
      colors: {
        customGray: '#151515'
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        header: ["Arimo", "sans-serif"]
      },
      backgroundImage: {
        firstBanner: "url('/assets/firstBanner.jpg')",
        fernandaBg: "url('/assets/fernanda.png')",
        socialMedia: "url('/assets/socialMedia.jpg')",
        avaliacao: "url('/assets/avaliacao.jpg')",
        meuNegocio: "url('/assets/meuNegocio.jpg')",
        seo: "url('/assets/seo.jpg')",
        branding: "url('/assets/branding.jpg')",
        estrategia: "url('/assets/estrategia.jpg')",
        consultoria: "url('/assets/consultoria.jpg')",
        trafego: "url('/assets/trafego.jpg')",
      }
    },
  },
  plugins: [],
}