/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "project-headlines-large-h1-XL":
          "var(--project-headlines-large-h1-XL-font-family)",
        "project-headlines-large-h2-l":
          "var(--project-headlines-large-h2-l-font-family)",
        "project-headlines-large-h3-m":
          "var(--project-headlines-large-h3-m-font-family)",
        "project-headlines-large-h4-s":
          "var(--project-headlines-large-h4-s-font-family)",
        "project-headlines-large-h5-XS":
          "var(--project-headlines-large-h5-XS-font-family)",
        "project-headlines-large-h6-XXS":
          "var(--project-headlines-large-h6-XXS-font-family)",
        "project-headlines-small-h1-XL":
          "var(--project-headlines-small-h1-XL-font-family)",
        "project-headlines-small-h2-l":
          "var(--project-headlines-small-h2-l-font-family)",
        "project-headlines-small-h3-m":
          "var(--project-headlines-small-h3-m-font-family)",
        "project-headlines-small-h4-s":
          "var(--project-headlines-small-h4-s-font-family)",
        "project-headlines-small-h5-XS":
          "var(--project-headlines-small-h5-XS-font-family)",
        "project-headlines-small-h6-XXS":
          "var(--project-headlines-small-h6-XXS-font-family)",
        "project-paragraphs-large-p1-XL":
          "var(--project-paragraphs-large-p1-XL-font-family)",
        "project-paragraphs-large-p2-l":
          "var(--project-paragraphs-large-p2-l-font-family)",
        "project-paragraphs-large-p3-m":
          "var(--project-paragraphs-large-p3-m-font-family)",
        "project-paragraphs-large-p4-s":
          "var(--project-paragraphs-large-p4-s-font-family)",
        "project-paragraphs-large-p5-XS":
          "var(--project-paragraphs-large-p5-XS-font-family)",
        "project-paragraphs-large-p6-XXS":
          "var(--project-paragraphs-large-p6-XXS-font-family)",
        "project-paragraphs-small-p1-XL":
          "var(--project-paragraphs-small-p1-XL-font-family)",
        "project-paragraphs-small-p2-l":
          "var(--project-paragraphs-small-p2-l-font-family)",
        "project-paragraphs-small-p3-m":
          "var(--project-paragraphs-small-p3-m-font-family)",
        "project-paragraphs-small-p4-s":
          "var(--project-paragraphs-small-p4-s-font-family)",
        "project-paragraphs-small-p5-XS":
          "var(--project-paragraphs-small-p5-XS-font-family)",
        "project-paragraphs-small-p6-XXS":
          "var(--project-paragraphs-small-p6-XXS-font-family)",
      },
      boxShadow: {
        "drop-shadow": "var(--drop-shadow)",
      },
    },
  },
  plugins: [],
};
