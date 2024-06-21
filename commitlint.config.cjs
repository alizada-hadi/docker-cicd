module.exports = {
  rules: {
    "header-min-length": [2, "always", 20],
    "header-case-start-capital": [2, "always"],
    "header-end-period": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "header-case-start-capital": ({ raw }) => {
          const isValid = /^[A-Z]/.test(raw);
          return [isValid, `commit message must start with a capital letter`];
        },
        "header-end-period": ({ header }) => {
          const isValid = /\.$/.test(header);
          return [isValid, `commit message must end with a period`];
        },
      },
    },
  ],
};
