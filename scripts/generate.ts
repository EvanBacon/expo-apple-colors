import fs from "fs";
import path from "path";

import Spec from "../spec.json";

function twoFiftyFiveTo1(value: number) {
  return (value / 255).toFixed(2);
}

const COLORS_P3 = Object.fromEntries(
  Spec.colors
    // .sort((a, b) => a.systemName.localeCompare(b.systemName))
    .map((color) => [
      color.systemName,
      [
        `color(display-p3 ${twoFiftyFiveTo1(
          color.defaultLight.R
        )} ${twoFiftyFiveTo1(color.defaultLight.G)} ${twoFiftyFiveTo1(
          color.defaultLight.B
        )}${color.defaultLight.A != null ? ` / ${color.defaultLight.A}` : ""})`,
        `color(display-p3 ${twoFiftyFiveTo1(
          color.defaultDark.R
        )} ${twoFiftyFiveTo1(color.defaultDark.G)} ${twoFiftyFiveTo1(
          color.defaultDark.B
        )}${color.defaultDark.A != null ? ` / ${color.defaultDark.A}` : ""})`,
      ],
    ])
);

const COLORS = Object.fromEntries(
  Spec.colors
    // .sort((a, b) => a.systemName.localeCompare(b.systemName))
    .map((color) => [
      color.systemName,
      [
        `rgba(${color.defaultLight.R}, ${color.defaultLight.G}, ${
          color.defaultLight.B
        }, ${color.defaultLight.A ?? 1})`,
        `rgba(${color.defaultDark.R}, ${color.defaultDark.G}, ${
          color.defaultDark.B
        }, ${color.defaultDark.A ?? 1})`,
      ],
    ])
);

const descriptions = Object.fromEntries(
  Spec.colors.map((color) => [color.systemName, color.description])
);

function generateCss() {
  // Create a CSS file with the colors as CSS variables, accounting for dark mode.

  const css = `
:root {
${Object.entries(COLORS)
  .map(([key, value]) => {
    const [light] = value;
    return `  --apple-${key}: ${light};`;
  })
  .join("\n")}
}
@media (color-gamut: p3) {
    :root {
${Object.entries(COLORS_P3)
  .map(([key, value]) => {
    const [light, dark] = value;
    return `        --apple-${key}: ${light};`;
  })
  .join("\n")}

    }
}

@media (prefers-color-scheme: dark) {
    :root {
${Object.entries(COLORS)
  .map(([key, value]) => {
    const [light, dark] = value;
    return `        --apple-${key}: ${dark};`;
  })
  .join("\n")}
    }

    @media (color-gamut: p3) {
        :root {
${Object.entries(COLORS_P3)
  .map(([key, value]) => {
    const [light, dark] = value;
    return `            --apple-${key}: ${dark};`;
  })
  .join("\n")}
        }
    }
}
`;

  fs.writeFileSync(path.join(__dirname, "../colors.css"), css);
}

generateCss();

function generateModule() {
  // Create a module with the colors as named exports.

  const getDescription = (key: string) => {
    if (key in descriptions) {
      return `/**
 * ${descriptions[key]}
 * @light ${COLORS[key][0]}
 * @dark ${COLORS[key][1]}
 */ `;
    }
    return "";
  };

  const module =
    `import {PlatformColor} from 'react-native';\n` +
    Object.entries(descriptions)
      .map(([key]) => {
        return `${getDescription(key)}
export const ${key} = PlatformColor("${key}");`;
      })
      .join("\n");

  fs.writeFileSync(path.join(__dirname, "../src/colors.ts"), module);

  const androidModule =
    `import {PlatformColor} from 'react-native';\n` +
    Object.entries(descriptions)
      .map(([key]) => {
        return `${getDescription(key)}
export const ${key} = PlatformColor("@color/${key}");`;
      })
      .join("\n");

  fs.writeFileSync(
    path.join(__dirname, "../src/colors.android.ts"),
    androidModule
  );
  const webModule =
    `import '@bacons/apple-colors/colors.css';\n` +
    Object.entries(descriptions)
      .map(([key]) => {
        return `${getDescription(key)}
export const ${key} = 'var(--apple-${key})';`;
      })
      .join("\n");

  fs.writeFileSync(path.join(__dirname, "../src/colors.web.ts"), webModule);
}

generateModule();
