"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const apple_colors_js_1 = require("./apple-colors.js");
const rgb_to_hex_1 = require("./rgb-to-hex");
// Errors on: systemCyan, systemMint, tintColor
const cachedColors = new Map();
function hexFromCssColor(color) {
    if (cachedColors.has(color)) {
        return cachedColors.get(color);
    }
    const hex = (0, rgb_to_hex_1.rgbHex)(color);
    cachedColors.set(color, hex);
    return hex;
}
const colors = {
    ...apple_colors_js_1.STANDARD_COLORS.reduce((acc, { name, value }) => {
        acc[name] = value;
        return acc;
    }, {}),
    ...apple_colors_js_1.UI_ELEMENT_COLORS.reduce((acc, { name, value }) => {
        acc[name] = value;
        return acc;
    }, {}),
};
const withAppleBuiltInColors = (config) => {
    const dark = {};
    const light = Object.entries(colors).reduce((acc, [name, value]) => {
        if (Array.isArray(value)) {
            acc[name] = value[0];
            dark[name] = value[1];
        }
        else {
            acc[name] = value;
            dark[name] = value;
        }
        return acc;
    }, {});
    (0, config_plugins_1.withAndroidColors)(config, (config) => {
        Object.entries(light).forEach(([name, value]) => {
            config_plugins_1.AndroidConfig.Colors.assignColorValue(config.modResults, {
                name,
                value: hexFromCssColor(value),
            });
        });
        return config;
    });
    (0, config_plugins_1.withAndroidColorsNight)(config, (config) => {
        Object.entries(dark).forEach(([name, value]) => {
            config_plugins_1.AndroidConfig.Colors.assignColorValue(config.modResults, {
                name,
                value: hexFromCssColor(value),
            });
        });
        return config;
    });
    return config;
};
exports.default = withAppleBuiltInColors;
