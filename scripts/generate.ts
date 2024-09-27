import fs from "fs";
import path from "path";
import { COLORS } from "../plugin/src/apple-colors";

const COLORS_P3 = {
  /** A blue color that automatically adapts to the current trait environment. */
  systemBlue: ["color(display-p3 0 0.48 1)", "color(display-p3 0.04 0.52 1)"],
  /** A brown color that automatically adapts to the current trait environment. */
  systemBrown: [
    "color(display-p3 0.64 0.52 0.37)",
    "color(display-p3 0.67 0.56 0.41)",
  ],
  /** A green color that automatically adapts to the current trait environment. */
  systemGreen: [
    "color(display-p3 0.2 0.78 0.35)",
    "color(display-p3 0.19 0.82 0.35)",
  ],
  /** An indigo color that automatically adapts to the current trait environment. */
  systemIndigo: [
    "color(display-p3 0.35 0.34 0.84)",
    "color(display-p3 0.37 0.36 0.9)",
  ],
  /** An orange color that automatically adapts to the current trait environment. */
  systemOrange: ["color(display-p3 1 0.58 0)", "color(display-p3 1 0.62 0.04)"],
  /** A pink color that automatically adapts to the current trait environment. */
  systemPink: [
    "color(display-p3 1 0.18 0.33)",
    "color(display-p3 1 0.22 0.37)",
  ],
  /** A purple color that automatically adapts to the current trait environment. */
  systemPurple: [
    "color(display-p3 0.69 0.32 0.87)",
    "color(display-p3 0.75 0.35 0.95)",
  ],
  /** A red color that automatically adapts to the current trait environment. */
  systemRed: ["color(display-p3 1 0.23 0.19)", "color(display-p3 1 0.27 0.23)"],
  /** A teal color that automatically adapts to the current trait environment. */
  systemTeal: [
    "color(display-p3 0.19 0.69 0.78)",
    "color(display-p3 0.25 0.78 0.88)",
  ],
  /** A yellow color that automatically adapts to the current trait environment. */
  systemYellow: ["color(display-p3 1 0.8 0)", "color(display-p3 1 0.84 0.04)"],
  // Adaptable gray colors
  /** The standard base gray color that adapts to the environment. */
  systemGray: [
    "color(display-p3 0.56 0.56 0.58)",
    "color(display-p3 0.56 0.56 0.58)",
  ],
  /** A second-level shade of gray that adapts to the environment. */
  systemGray2: [
    "color(display-p3 0.68 0.68 0.7)",
    "color(display-p3 0.39 0.39 0.4)",
  ],
  /** A third-level shade of gray that adapts to the environment. */
  systemGray3: [
    "color(display-p3 0.78 0.78 0.8)",
    "color(display-p3 0.28 0.28 0.29)",
  ],
  /** A fourth-level shade of gray that adapts to the environment. */
  systemGray4: [
    "color(display-p3 0.82 0.82 0.84)",
    "color(display-p3 0.23 0.23 0.24)",
  ],
  /** A fifth-level shade of gray that adapts to the environment. */
  systemGray5: [
    "color(display-p3 0.9 0.9 0.92)",
    "color(display-p3 0.17 0.17 0.18)",
  ],
  /** A sixth-level shade of gray that adapts to the environment. */
  systemGray6: [
    "color(display-p3 0.95 0.95 0.97)",
    "color(display-p3 0.11 0.11 0.12)",
  ],
  /** The color for text labels that contain primary content. */
  label: ["color(display-p3 0 0 0)", "color(display-p3 1 1 1)"],
  /** The color for text labels that contain secondary content. */
  secondaryLabel: [
    "color(display-p3 0.24 0.24 0.26 / 0.6)",
    "color(display-p3 0.92 0.92 0.96 / 0.6)",
  ],
  /** The color for text labels that contain tertiary content. */
  tertiaryLabel: [
    "color(display-p3 0.24 0.24 0.26 / 0.3)",
    "color(display-p3 0.92 0.92 0.96 / 0.3)",
  ],
  /** The color for text labels that contain quaternary content. */
  quaternaryLabel: [
    "color(display-p3 0.24 0.24 0.26 / 0.18)",
    "color(display-p3 0.92 0.92 0.96 / 0.16)",
  ],
  /** An overlay fill color for thin and small shapes. */
  systemFill: [
    "color(display-p3 0.47 0.47 0.5 / 0.2)",
    "color(display-p3 0.47 0.47 0.5 / 0.36)",
  ],
  /** An overlay fill color for medium-size shapes. */
  secondarySystemFill: [
    "color(display-p3 0.47 0.47 0.5 / 0.16)",
    "color(display-p3 0.47 0.47 0.5 / 0.32)",
  ],
  /** An overlay fill color for large shapes. */
  tertiarySystemFill: [
    "color(display-p3 0.46 0.46 0.5 / 0.12)",
    "color(display-p3 0.46 0.46 0.5 / 0.24)",
  ],
  /** An overlay fill color for large areas that contain complex content. */
  quaternarySystemFill: [
    "color(display-p3 0.45 0.45 0.5 / 0.08)",
    "color(display-p3 0.46 0.46 0.5 / 0.18)",
  ],
  /** The color for placeholder text in controls or text views. */
  placeholderText: [
    "color(display-p3 0.24 0.24 0.26 / 0.3)",
    "color(display-p3 0.92 0.92 0.96 / 0.3)",
  ],
  /** The color for the main background of your interface. */
  systemBackground: ["color(display-p3 1 1 1)", "color(display-p3 0 0 0)"],
  /** The color for content layered on top of the main background. */
  secondarySystemBackground: [
    "color(display-p3 0.95 0.95 0.97)",
    "color(display-p3 0.11 0.11 0.12)",
  ],
  /** The color for content layered on top of secondary backgrounds. */
  tertiarySystemBackground: [
    "color(display-p3 1 1 1)",
    "color(display-p3 0.17 0.17 0.18)",
  ],
  /** The color for the main background of your grouped interface. */
  systemGroupedBackground: [
    "color(display-p3 0.95 0.95 0.97)",
    "color(display-p3 0 0 0)",
  ],
  /** The color for content layered on top of the main background of your grouped interface. */
  secondarySystemGroupedBackground: [
    "color(display-p3 1 1 1)",
    "color(display-p3 0.11 0.11 0.12)",
  ],
  /** The color for content layered on top of secondary backgrounds of your grouped interface. */
  tertiarySystemGroupedBackground: [
    "color(display-p3 0.95 0.95 0.97)",
    "color(display-p3 0.17 0.17 0.18)",
  ],
  /** The color for thin borders or divider lines that allows some underlying content to be visible. */
  separator: [
    "color(display-p3 0.24 0.24 0.26 / 0.29)",
    "color(display-p3 0.33 0.33 0.35 / 0.6)",
  ],
  /** The color for borders or divider lines that hides any underlying content. */
  opaqueSeparator: [
    "color(display-p3 0.78 0.78 0.78)",
    "color(display-p3 0.22 0.22 0.23)",
  ],
  /** The specified color for links. */
  link: ["color(display-p3 0 0.48 1)", "color(display-p3 0.04 0.52 1)"],
  /** The nonadaptable system color for text on a light background. */
  darkText: ["color(display-p3 0 0 0)", "color(display-p3 0 0 0)"],
  /** The nonadaptable system color for text on a dark background. */
  lightText: ["color(display-p3 1 1 1 / 0.6)", "color(display-p3 1 1 1 / 0.6)"],
} as const;

const descriptions = {
  systemBlue:
    "A blue color that automatically adapts to the current trait environment.",
  systemBrown:
    "A brown color that automatically adapts to the current trait environment.",
  systemGreen:
    "A green color that automatically adapts to the current trait environment.",
  systemIndigo:
    "An indigo color that automatically adapts to the current trait environment.",
  systemOrange:
    "An orange color that automatically adapts to the current trait environment.",
  systemPink:
    "A pink color that automatically adapts to the current trait environment.",
  systemPurple:
    "A purple color that automatically adapts to the current trait environment.",
  systemRed:
    "A red color that automatically adapts to the current trait environment.",
  systemTeal:
    "A teal color that automatically adapts to the current trait environment.",
  systemYellow:
    "A yellow color that automatically adapts to the current trait environment.",
  systemGray: "The standard base gray color that adapts to the environment.",
  systemGray2: "A second-level shade of gray that adapts to the environment.",
  systemGray3: "A third-level shade of gray that adapts to the environment.",
  systemGray4: "A fourth-level shade of gray that adapts to the environment.",
  systemGray5: "A fifth-level shade of gray that adapts to the environment.",
  systemGray6: "A sixth-level shade of gray that adapts to the environment.",
  label: "The color for text labels that contain primary content.",
  secondaryLabel: "The color for text labels that contain secondary content.",
  tertiaryLabel: "The color for text labels that contain tertiary content.",
  quaternaryLabel: "The color for text labels that contain quaternary content.",
  systemFill: "An overlay fill color for thin and small shapes.",
  secondarySystemFill: "An overlay fill color for medium-size shapes.",
  tertiarySystemFill: "An overlay fill color for large shapes.",
  quaternarySystemFill:
    "An overlay fill color for large areas that contain complex content.",
  placeholderText: "The color for placeholder text in controls or text views.",
  systemBackground: "The color for the main background of your interface.",
  secondarySystemBackground:
    "The color for content layered on top of the main background.",
  tertiarySystemBackground:
    "The color for content layered on top of secondary backgrounds.",
  systemGroupedBackground:
    "The color for the main background of your grouped interface.",
  secondarySystemGroupedBackground:
    "The color for content layered on top of the main background of your grouped interface.",
  tertiarySystemGroupedBackground:
    "The color for content layered on top of secondary backgrounds of your grouped interface.",
  separator:
    "The color for thin borders or divider lines that allows some underlying content to be visible.",
  opaqueSeparator:
    "The color for borders or divider lines that hides any underlying content.",
  link: "The specified color for links.",
  darkText: "The nonadaptable system color for text on a light background.",
  lightText: "The nonadaptable system color for text on a dark background.",
};

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
