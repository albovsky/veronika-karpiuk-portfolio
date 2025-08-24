module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
  ],
  rules: {
    "prefer-const": "error",
    "no-var": "error",
  },
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "out/",
    "dist/",
    "build/",
  ],
};