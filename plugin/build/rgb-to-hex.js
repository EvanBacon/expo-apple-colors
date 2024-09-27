"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbHex = rgbHex;
// Android requires `#AARRGGBB` format
// https://developer.android.com/guide/topics/resources/color-list-resource
const toHex = (red, green, blue, alpha) => alpha + (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1);
function rgbHex(input) {
    // Single string parameter.
    const parsed = parseCssRgbString(input);
    if (!parsed) {
        throw new TypeError("Invalid or unsupported color format.");
    }
    let isPercent = false;
    let [red, green, blue, alpha] = parsed;
    if (typeof red !== "number" ||
        typeof green !== "number" ||
        typeof blue !== "number" ||
        red > 255 ||
        green > 255 ||
        blue > 255) {
        throw new TypeError("Expected three numbers below 256");
    }
    if (typeof alpha === "number") {
        if (!isPercent && alpha >= 0 && alpha <= 1) {
            alpha = Math.round(255 * alpha);
        }
        else if (isPercent && alpha >= 0 && alpha <= 100) {
            alpha = Math.round((255 * alpha) / 100);
        }
        else {
            throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
        }
        // @ts-expect-error
        alpha = (alpha | (1 << 8)).toString(16).slice(1); // eslint-disable-line no-mixed-operators
    }
    else {
        // @ts-expect-error
        alpha = "";
    }
    return "#" + toHex(red, green, blue, alpha);
}
const parseCssRgbString = (input) => {
    const parts = input
        .replace(/rgba?\(([^)]+)\)/, "$1")
        .split(/[,\s/]+/)
        .filter(Boolean);
    if (parts.length < 3) {
        return;
    }
    const parseValue = (value, max) => {
        value = value.trim();
        if (value.endsWith("%")) {
            return Math.min((Number.parseFloat(value) * max) / 100, max);
        }
        return Math.min(Number.parseFloat(value), max);
    };
    const red = parseValue(parts[0], 255);
    const green = parseValue(parts[1], 255);
    const blue = parseValue(parts[2], 255);
    let alpha;
    if (parts.length === 4) {
        alpha = parseValue(parts[3], 1);
    }
    return [red, green, blue, alpha];
};
