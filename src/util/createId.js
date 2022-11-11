function lengthenHex(hex) {
  const shortHex = "^#([A-Fa-f0-9]{3})$";
  if (!hex.match(shortHex)) {
    return;
  }
  hex = hex.slice(1).match("(/.{1}/g)");
  return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[2]}${hex[2]}`;
}

function createId(color1, color2, color3) {
  const longHex = "^#([A-Fa-f0-9]{6})$";

  const value1 = color1.match(longHex) ? color1 : lengthenHex(color1);
  const value2 = color2.match(longHex) ? color2 : lengthenHex(color2);
  const value3 = color3.match(longHex) ? color3 : lengthenHex(color3);

  const id = `${value1}${value2}${value3}`;
  return id;
}

module.exports = createId;
