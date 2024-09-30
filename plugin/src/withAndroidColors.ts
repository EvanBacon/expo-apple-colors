import {
  AndroidConfig,
  withAndroidColors,
  ConfigPlugin,
  withAndroidColorsNight,
} from "@expo/config-plugins";

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

import Spec from "../../spec.json";

const colors = Object.fromEntries(
  Object.entries(Spec.colors).map(([name, { defaultLight, defaultDark }]) => {
    return [
      name,
      [
        `rgba(${defaultLight.R}, ${defaultLight.G}, ${defaultLight.B}, ${
          defaultLight.A ?? 1
        })`,
        `rgba(${defaultDark.R}, ${defaultDark.G}, ${defaultDark.B}, ${
          defaultDark.A ?? 1
        })`,
      ],
    ];
  })
) as Record<string, string | [string, string]>;

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
