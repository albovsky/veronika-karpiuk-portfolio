module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
  ],
  rules: {
    "prefer-const": "error",
    "no-var": "error",
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "react-hooks/rules-of-hooks": "warn",
  },
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "out/",
    "dist/",
    "build/",
  ],
};