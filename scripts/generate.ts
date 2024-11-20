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

function generateCircleSvg(color1: string): string {
  const radius = 6; // Reduced radius for padding
  const diameter = radius * 2 + 4; // Add padding (2 units on each side)
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${diameter}" height="${diameter}" viewBox="0 0 ${diameter} ${diameter}">
      <defs>
        <filter id="contrastFilter">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="1 0" />
            <feFuncG type="table" tableValues="1 0" />
            <feFuncB type="table" tableValues="1 0" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="${diameter}" height="${diameter}" fill="${color1}" filter="url(#contrastFilter)" opacity="0.1" />
      <circle cx="${diameter / 2}" cy="${
    diameter / 2
  }" r="${radius}" fill="${color1}" />
    </svg>
  `;
}
// Function to convert the SVG string to a base64 image string
function svgToBase64(svg: string): string {
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

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
    const [light] = value;
    return `        --apple-${key}: ${light};`;
  })
  .join("\n")}

    }
}

@media (prefers-color-scheme: dark) {
    :root {
${Object.entries(COLORS)
  .map(([key, value]) => {
    const [, dark] = value;
    return `        --apple-${key}: ${dark};`;
  })
  .join("\n")}
    }

    @media (color-gamut: p3) {
        :root {
${Object.entries(COLORS_P3)
  .map(([key, value]) => {
    const [, dark] = value;
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
 * @light ${COLORS[key][0]} - ![img](${svgToBase64(
        generateCircleSvg(COLORS[key][0])
      )})
 * @dark ${COLORS[key][1]} - ![img](${svgToBase64(
        generateCircleSvg(COLORS[key][1])
      )})
 */ `;
    }
    return "";
  };

  const module =
    `import type { OpaqueColorValue } from "react-native";
const PlatformColor = (...semantic: string[]) =>
  ({ semantic } as unknown as OpaqueColorValue);\n` +
    Object.entries(descriptions)
      .map(([key]) => {
        return `${getDescription(key)}
export const ${key} = PlatformColor("${key}");`;
      })
      .join("\n");

  fs.writeFileSync(path.join(__dirname, "../src/colors.ts"), module);

  const androidModule =
    `import type { OpaqueColorValue } from "react-native";
const PlatformColor = (...resource_paths: string[]) =>
  ({ resource_paths } as unknown as OpaqueColorValue);\n` +
    "// @ts-expect-error: internal global\n" +
    `const isExpoGo = typeof expo !== 'undefined' && globalThis.expo?.modules?.ExpoGo; \n` +
    Object.entries(descriptions)
      .map(([key]) => {
        return `${getDescription(key)}
export const ${key} = isExpoGo ? ${JSON.stringify(
          COLORS[key][0]
        )} : PlatformColor("@color/${key}");`;
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
