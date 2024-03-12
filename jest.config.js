export default {
  testEnvironment: "jsdom",
  setupFiles: ["./jest-setup.js"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
};
