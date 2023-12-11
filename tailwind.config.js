/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "makanika-cherry-red": "#F80404",
        "makanika-pastel-pink": "#FFF1F173",
        "makanika-sky-blue": "#D2D6FD",
        "makanika-ice-blue": "#D2E5F6",
        "makanika-sage-green": "#205B28",
        "makanika-butter-yellow": "#FBE2A6",
        "makanika-azure-blue": "#C5F5FF",
        "makanika-blush-pink": "#FFF8F8",
        "makanika-ghost-gray": "#F8FEFF",
        "makanika-apple-green": "#E2FDD2",
        "makanika-frost-blue": "#EAF5FF",
        "makankika-jet-black": "#181716",
        "makanika-sunflower-yellow": "#EEAF19",
        "makanika-light-blue": "#00AEEF",
      },
      gridTemplateColumns: {
        "full-bleed": "1fr repeat(2, minmax(auto, 39em)) 1fr;",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
