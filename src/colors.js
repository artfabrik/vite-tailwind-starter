import { convert, contrastBrightness } from "colvertize";
import { reactive } from 'vue';

function convertFallbackColor(color, outputType, convFunc, fallbackColor) {
  try {
    return convert(color, outputType, convFunc);
  } catch {
    return convert(fallbackColor, outputType, convFunc);
  }
}

export function generateColorTones(name, color, {start = 100, step = 100, count = 9, fallbackColor = '#a0aec0'} = {}) {
  return [...Array(count).keys()].reduce((acc, i) => {
    const cssProp = `--color-${name}-${start + i * step}`;
    const contrast = 1 - 0.1 * (i / count);
    const brightness = 200 * (1 - i / count);
    acc[cssProp] = convertFallbackColor(color, 'css-rgb', contrastBrightness({contrast, brightness}), fallbackColor);
    return acc;
  }, {});
}
