/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1300px",
        },
      },
      colors: {
        M3LightOnTertiaryContainer: "#281800",
        M3LightOnSurfaceVariant: "#534343",
        M3LightOnBackground: "#211A1A",
        M3LightOutline: "#857372",
        M3RefPrimary50: "#EB133D",
        clr333: "#333",
        clr999: "#999999",
        gipermart: "#FEEE00",
        vermilionCinnabar: "#E44542",
        brandBgClr: "#F8F8F8",
        footerBgClr: "#F5F5F6",
        footerSecondBgClr: "#EAEAEA",
        chefsHat: "#F2F4F7",
        gray3: "#828282",
        clrF6F6F6: "#F6F6F6",
        starClr: "#FFCE39",
        ededClr: "#EDEDED",
        clr8080: "#808080",
        clr7474: "#747474",
        clrff0: "#ff0000",
      },
      fontFamily: {
        joast: "Jost",
      },
      screens: {
        forCatalog: "550px",
        tablet: "768px",
        desktop: "980px",
        forSkleton: "1148px",
        bigScreen: "1200px",
      },
      boxShadow: {
        shadowArrow: " 0px 1px 5px 1px #efe1e1",
      },
      gridTemplateColumns: {
        gridColMain: "repeat(auto-fit, minmax(130px, 1fr))",
        gridColTablet: "repeat(auto-fit, minmax(220px, 1fr))",
        gridColDesktop: "repeat(auto-fit, minmax(250px, 1fr))",
        gridColCategory: "1050px 1fr",
      },
      borderRadius: {
        borderForOrder: "0 0 10px 10px",
      },
    },
  },
  plugins: [require("daisyui")],
};
