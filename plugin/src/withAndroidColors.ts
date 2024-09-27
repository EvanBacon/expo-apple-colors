import {
  AndroidConfig,
  withAndroidColors,
  ConfigPlugin,
  withAndroidColorsNight,
} from "@expo/config-plugins";

import { STANDARD_COLORS, UI_ELEMENT_COLORS } from "./apple-colors.js";
import { rgbHex } from "./rgb-to-hex";

// Errors on: systemCyan, systemMint, tintColor

const cachedColors = new Map<string, string>();

function hexFromCssColor(color: string): string {
  if (cachedColors.has(color)) {
    return cachedColors.get(color)!;
  }
  const hex = rgbHex(color);
  cachedColors.set(color, hex);
  return hex;
}

const colors = {
  ...STANDARD_COLORS.reduce((acc, { name, value }) => {
    acc[name] = value;
    return acc;
  }, {} as Record<string, string | string[]>),
  ...UI_ELEMENT_COLORS.reduce((acc, { name, value }) => {
    acc[name] = value;
    return acc;
  }, {} as Record<string, string | string[]>),
} as Record<string, string | [string, string]>;

const withAppleBuiltInColors: ConfigPlugin = (config) => {
  const dark: Record<string, string> = {};
  const light = Object.entries(colors).reduce((acc, [name, value]) => {
    if (Array.isArray(value)) {
      acc[name] = value[0];
      dark[name] = value[1];
    } else {
      acc[name] = value;
      dark[name] = value;
    }
    return acc;
  }, {} as Record<string, string>);

  withAndroidColors(config, (config) => {
    Object.entries(light).forEach(([name, value]) => {
      AndroidConfig.Colors.assignColorValue(config.modResults, {
        name,
        value: hexFromCssColor(value as string),
      });
    });
    return config;
  });

  withAndroidColorsNight(config, (config) => {
    Object.entries(dark).forEach(([name, value]) => {
      AndroidConfig.Colors.assignColorValue(config.modResults, {
        name,
        value: hexFromCssColor(value as string),
      });
    });
    return config;
  });

  return config;
};

export default withAppleBuiltInColors;
