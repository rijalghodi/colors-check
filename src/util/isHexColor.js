function isHexColor(color) {
  // hex color for 6 or 3 digit
  // const hex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
  const hex = "^#([A-Fa-f0-9]{6})$";
  return color.match(hex);
}

module.exports = isHexColor;
