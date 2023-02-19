const plugin = require("tailwindcss/plugin");

const colornames = ["default", "primary", "secondary", "neutral", "success", "warning", "error"];
const colorshades = ["text", "base", "focus"];

function colors() {
  const alias = {};
  colornames.forEach(function (n) {
    colorshades.forEach(function (s) {
      alias[`${n}-${s}`] = `hsl(var(--color-${n}-${s}) / <alpha-value>)`;
    })
  });
  return alias;
}

module.exports = plugin(
  function () {},
  {
    theme: {
      extend: {
        colors: colors(),
      }
    }
  }
);