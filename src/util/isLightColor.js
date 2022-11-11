let isHexColor = require("./isHexColor");

function hexToRGB(hex) {
  // https://javascript.plainenglish.io/convert-hex-to-rgb-with-javascript-4984d16219c3
  var aRgb, aRgbHex;
  if (hex.length === 7) {
    aRgbHex = hex.slice(1).match(/.{2}/g);
    aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];
  } else if (hex.length === 4) {
    aRgbHex = hex.slice(1).match(/.{1}/g);
    aRgb = [
      parseInt(`${aRgbHex[0]}${aRgbHex[0]}`, 16),
      parseInt(`${aRgbHex[0]}${aRgbHex[0]}`, 16),
      parseInt(`${aRgbHex[0]}${aRgbHex[0]}`, 16),
    ];
  }
  return aRgb;
}

function isLightColor(color) {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else if (isHexColor(color)) {
    // If hex --> Convert it to RGB: https://javascript.plainenglish.io/convert-hex-to-rgb-with-javascript-4984d16219c3
    color = hexToRGB(color);

    r = color[0];
    g = color[1];
    b = color[2];
  } else {
    return false;
  }
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return true;
  } else {
    return false;
  }
}

module.exports = isLightColor;
