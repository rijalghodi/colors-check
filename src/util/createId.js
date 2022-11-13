function lengthenHex(hex) {
  const shortHex = "^#([A-Fa-f0-9]{3})$";
  if (!hex.match(shortHex)) {
    return;
  }
  let longHex;

  for (var i = 1; i < hex.length; i++) {
    longHex = longHex + hex[i] + hex[i];
  }
}

function createId(color1, color2, color3) {
  console.log(color1);
  const longHex = "^#([A-Fa-f0-9]{6})$";

  const value1 = color1.match(longHex) ? color1 : lengthenHex(color1);
  console.log(value1);
  const value2 = color2.match(longHex) ? color2 : lengthenHex(color2);
  const value3 = color3.match(longHex) ? color3 : lengthenHex(color3);

  const id = `${value1}${value2}${value3}`;
  return id;
}

module.exports = createId;
