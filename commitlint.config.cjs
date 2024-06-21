module.exports = {
  rules: {
    "header-min-length": [2, "always", 20],
    "header-case-start-capital": [2, "always"],
    "header-end-period": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "header-case-start-capital": ({ subject }) => {
          const isValid = /^[A-Z]/.test(subject);
          return [isValid, `commit message must start with a capital letter`];
        },
        "header-end-period": ({ subject }) => {
          const isValid = /\.$/.test(subject);
          return [isValid, `commit message must end with a period`];
        },
      },
    },
  ],
};
