"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = exports.UI_ELEMENT_COLORS = exports.STANDARD_COLORS = void 0;
exports.STANDARD_COLORS = [
    // Adaptable colors
    /** A blue color that automatically adapts to the current trait environment. */
    {
        // R:0 G:0.48 B:1 A:1
        // R:0.04 G:0.52 B:1 A:1
        name: "systemBlue",
        value: ["rgba(0, 122.4, 255, 1)", "rgba(10.2, 132.6, 255, 1)"],
    },
    /** A brown color that automatically adapts to the current trait environment. */
    {
        // R:0.64 G:0.52 B:0.37 A:1
        // R:0.67 G:0.56 B:0.41 A:1
        name: "systemBrown",
        value: ["rgba(163.2, 132.6, 94.8, 1)", "rgba(170.85, 142.8, 104.55, 1)"],
    },
    /** A green color that automatically adapts to the current trait environment. */
    {
        // R:0.2 G:0.78 B:0.35 A:1
        // R:0.19 G:0.82 B:0.35 A:1
        name: "systemGreen",
        value: ["rgba(51, 199.8, 89.25, 1)", "rgba(48.45, 209.1, 89.25, 1)"],
    },
    /** An indigo color that automatically adapts to the current trait environment. */
    {
        // R:0.35 G:0.34 B:0.84 A:1
        // R:0.37 G:0.36 B:0.9 A:1
        name: "systemIndigo",
        value: ["rgba(89.25, 86.7, 214.2, 1)", "rgba(94.35, 91.8, 229.5, 1)"],
    },
    /** An orange color that automatically adapts to the current trait environment. */
    {
        // R:1 G:0.58 B:0 A:1
        // R:1 G:0.62 B:0.04 A:1
        name: "systemOrange",
        value: ["rgba(255, 147.9, 0, 1)", "rgba(255, 158.1, 10.2, 1)"],
    },
    /** A pink color that automatically adapts to the current trait environment. */
    {
        // R:1 G:0.18 B:0.33 A:1
        // R:1 G:0.22 B:0.37 A:1
        name: "systemPink",
        value: ["rgba(255, 45.9, 84.15, 1)", "rgba(255, 56.1, 94.35, 1)"],
    },
    /** A purple color that automatically adapts to the current trait environment. */
    {
        // R:0.69 G:0.32 B:0.87 A:1
        // R:0.75 G:0.35 B:0.95 A:1
        name: "systemPurple",
        value: ["rgba(176.1, 81.6, 222.3, 1)", "rgba(191.25, 89.25, 242.25, 1)"],
    },
    /** A red color that automatically adapts to the current trait environment. */
    {
        // R:1 G:0.23 B:0.19 A:1
        // R:1 G:0.27 B:0.23 A:1
        name: "systemRed",
        value: ["rgba(255, 58.65, 48.45, 1)", "rgba(255, 69.3, 58.65, 1)"],
    },
    /** A teal color that automatically adapts to the current trait environment. */
    {
        // R:0.19 G:0.69 B:0.78 A:1
        // R:0.25 G:0.78 B:0.88 A:1
        name: "systemTeal",
        value: ["rgba(48.45, 176.1, 199.8, 1)", "rgba(63.75, 199.8, 224.4, 1)"],
    },
    /** A yellow color that automatically adapts to the current trait environment. */
    {
        // R:1 G:0.8 B:0 A:1
        // R:1 G:0.84 B:0.04 A:1
        name: "systemYellow",
        value: ["rgba(255, 204, 0, 1)", "rgba(255, 214.2, 10.2, 1)"],
    },
    // Adaptable gray colors
    /** The standard base gray color that adapts to the environment. */
    {
        // R:0.56 G:0.56 B:0.58 A:1
        // R:0.56 G:0.56 B:0.58 A:1
        name: "systemGray",
        value: ["rgba(142.8, 142.8, 147.9, 1)", "rgba(142.8, 142.8, 147.9, 1)"],
    },
    /** A second-level shade of gray that adapts to the environment. */
    {
        // R:0.68 G:0.68 B:0.7 A:1
        // R:0.39 G:0.39 B:0.4 A:1
        name: "systemGray2",
        value: ["rgba(173.4, 173.4, 179.55, 1)", "rgba(99.45, 99.45, 102.0, 1)"],
    },
    /** A third-level shade of gray that adapts to the environment. */
    {
        // R:0.78 G:0.78 B:0.8 A:1
        // R:0.28 G:0.28 B:0.29 A:1
        name: "systemGray3",
        value: ["rgba(198.9, 198.9, 204, 1)", "rgba(71.4, 71.4, 73.95, 1)"],
    },
    /** A fourth-level shade of gray that adapts to the environment. */
    {
        // R:0.82 G:0.82 B:0.84 A:1
        // R:0.23 G:0.23 B:0.24 A:1
        name: "systemGray4",
        value: ["rgba(209.1, 209.1, 214.2, 1)", "rgba(58.65, 58.65, 61.2, 1)"],
    },
    /** A fifth-level shade of gray that adapts to the environment. */
    {
        // R:0.9 G:0.9 B:0.92 A:1
        // R:0.17 G:0.17 B:0.18 A:1
        name: "systemGray5",
        value: ["rgba(229.5, 229.5, 234.6, 1)", "rgba(43.35, 43.35, 46.35, 1)"],
    },
    /** A sixth-level shade of gray that adapts to the environment. */
    {
        // R:0.95 G:0.95 B:0.97 A:1
        // R:0.11 G:0.11 B:0.12 A:1
        name: "systemGray6",
        value: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(28.05, 28.05, 30.6, 1)"],
    },
];
// https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors
exports.UI_ELEMENT_COLORS = [
    // Label colors
    /** The color for text labels that contain primary content. */
    {
        // White:0 Alpha:1
        // White:1 Alpha:1
        name: "label",
        value: ["rgba(0, 0, 0, 1)", "rgba(255, 255, 255, 1)"],
    },
    /** The color for text labels that contain secondary content. */
    {
        // R:0.24 G:0.24 B:0.26 A:0.6
        // R:0.92 G:0.92 B:0.96 A:0.6
        name: "secondaryLabel",
        value: ["rgba(61.2, 61.2, 66, 0.6)", "rgba(234.6, 234.6, 244.8, 0.6)"],
    },
    /** The color for text labels that contain tertiary content. */
    {
        // R:0.24 G:0.24 B:0.26 A:0.3
        // R:0.92 G:0.92 B:0.96 A:0.3
        name: "tertiaryLabel",
        value: ["rgba(61.2, 61.2, 66, 0.3)", "rgba(234.6, 234.6, 244.8, 0.3)"],
    },
    /** The color for text labels that contain quaternary content. */
    {
        // R:0.24 G:0.24 B:0.26 A:0.18
        // R:0.92 G:0.92 B:0.96 A:0.16
        name: "quaternaryLabel",
        value: ["rgba(61.2, 61.2, 66, 0.18)", "rgba(234.6, 234.6, 244.8, 0.16)"],
    },
    // Fill colors
    /** An overlay fill color for thin and small shapes. */
    {
        // R:0.47 G:0.47 B:0.5 A:0.2
        // R:0.47 G:0.47 B:0.5 A:0.36
        name: "systemFill",
        value: [
            "rgba(119.85, 119.85, 127.5, 0.2)",
            "rgba(119.85, 119.85, 127.5, 0.36)",
        ],
    },
    /** An overlay fill color for medium-size shapes. */
    {
        // R:0.47 G:0.47 B:0.5 A:0.16
        // R:0.47 G:0.47 B:0.5 A:0.32
        name: "secondarySystemFill",
        value: [
            "rgba(119.85, 119.85, 127.5, 0.16)",
            "rgba(119.85, 119.85, 127.5, 0.32)",
        ],
    },
    /** An overlay fill color for large shapes. */
    {
        // R:0.46 G:0.46 B:0.5 A:0.12
        // R:0.46 G:0.46 B:0.5 A:0.24
        name: "tertiarySystemFill",
        value: [
            "rgba(117.3, 117.3, 127.5, 0.12)",
            "rgba(117.3, 117.3, 127.5, 0.24)",
        ],
    },
    /** An overlay fill color for large areas that contain complex content. */
    {
        // R:0.45 G:0.45 B:0.5 A:0.08
        // R:0.46 G:0.46 B:0.5 A:0.18
        name: "quaternarySystemFill",
        value: [
            "rgba(114.75, 114.75, 127.5, 0.08)",
            "rgba(117.3, 117.3, 127.5, 0.18)",
        ],
    },
    // Text colors
    /** The color for placeholder text in controls or text views. */
    {
        // R:0.24 G:0.24 B:0.26 A:0.3
        // R:0.92 G:0.92 B:0.96 A:0.3
        name: "placeholderText",
        value: ["rgba(61.2, 61.2, 66, 0.3)", "rgba(234.6, 234.6, 244.8, 0.3)"],
    },
    // Standard content background colors
    /** The color for the main background of your interface. */
    {
        // White:1 Alpha:1
        // White:0 Alpha:1
        name: "systemBackground",
        value: ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"],
    },
    /** The color for content layered on top of the main background. */
    {
        // R:0.95 G:0.95 B:0.97 A:1
        // R:0.11 G:0.11 B:0.12 A:1
        name: "secondarySystemBackground",
        value: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(28.05, 28.05, 30.6, 1)"],
    },
    /** The color for content layered on top of secondary backgrounds. */
    {
        // White:1 Alpha:1
        // R:0.17 G:0.17 B:0.18 A:1
        name: "tertiarySystemBackground",
        value: ["rgba(255, 255, 255, 1)", "rgba(43.35, 43.35, 46.35, 1)"],
    },
    // Grouped content background colors
    /** The color for the main background of your grouped interface. */
    {
        // R:0.95 G:0.95 B:0.97 A:1
        // White:0 Alpha:1
        name: "systemGroupedBackground",
        value: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(0, 0, 0, 1)"],
    },
    /** The color for content layered on top of the main background of your grouped interface. */
    {
        // White:1 Alpha:1
        // R:0.11 G:0.11 B:0.12 A:1
        name: "secondarySystemGroupedBackground",
        value: ["rgba(255, 255, 255, 1)", "rgba(28.05, 28.05, 30.6, 1)"],
    },
    /** The color for content layered on top of secondary backgrounds of your grouped interface. */
    {
        // R:0.95 G:0.95 B:0.97 A:1
        // R:0.17 G:0.17 B:0.18 A:1
        name: "tertiarySystemGroupedBackground",
        value: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(43.35, 43.35, 46.35, 1)"],
    },
    // Separator colors
    /** The color for thin borders or divider lines that allows some underlying content to be visible. */
    {
        // R:0.24 G:0.24 B:0.26 A:0.29
        // R:0.33 G:0.33 B:0.35 A:0.6
        name: "separator",
        value: ["rgba(61.2, 61.2, 66, 0.29)", "rgba(84.15, 84.15, 89.25, 0.6)"],
    },
    /** The color for borders or divider lines that hides any underlying content. */
    {
        // R:0.78 G:0.78 B:0.78 A:1
        // R:0.22 G:0.22 B:0.23 A:1
        name: "opaqueSeparator",
        value: ["rgba(198.9, 198.9, 198.9, 1)", "rgba(56.1, 56.1, 58.65, 1)"],
    },
    // Link color
    /** The specified color for links. */
    {
        // R:0 G:0.48 B:1 A:1
        // R:0.04 G:0.52 B:1 A:1
        name: "link",
        value: ["rgba(0, 122.4, 255, 1)", "rgba(10.2, 132.6, 255, 1)"],
    },
    // Nonadaptable colors
    /** The nonadaptable system color for text on a light background. */
    {
        // White:0 Alpha:1
        // White:0 Alpha:1
        name: "darkText",
        value: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)"],
    },
    /** The nonadaptable system color for text on a dark background. */
    {
        // White:1 Alpha:0.6
        // White:1 Alpha:0.6
        name: "lightText",
        value: ["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.6)"],
    },
];
exports.COLORS = {
    // Adaptable colors
    /** A blue color that automatically adapts to the current trait environment. */
    systemBlue: ["rgba(0, 122.4, 255, 1)", "rgba(10.2, 132.6, 255, 1)"],
    /** A brown color that automatically adapts to the current trait environment. */
    systemBrown: ["rgba(163.2, 132.6, 94.8, 1)", "rgba(170.85, 142.8, 104.55, 1)"],
    /** A green color that automatically adapts to the current trait environment. */
    systemGreen: ["rgba(51, 199.8, 89.25, 1)", "rgba(48.45, 209.1, 89.25, 1)"],
    /** An indigo color that automatically adapts to the current trait environment. */
    systemIndigo: ["rgba(89.25, 86.7, 214.2, 1)", "rgba(94.35, 91.8, 229.5, 1)"],
    /** An orange color that automatically adapts to the current trait environment. */
    systemOrange: ["rgba(255, 147.9, 0, 1)", "rgba(255, 158.1, 10.2, 1)"],
    /** A pink color that automatically adapts to the current trait environment. */
    systemPink: ["rgba(255, 45.9, 84.15, 1)", "rgba(255, 56.1, 94.35, 1)"],
    /** A purple color that automatically adapts to the current trait environment. */
    systemPurple: ["rgba(176.1, 81.6, 222.3, 1)", "rgba(191.25, 89.25, 242.25, 1)"],
    /** A red color that automatically adapts to the current trait environment. */
    systemRed: ["rgba(255, 58.65, 48.45, 1)", "rgba(255, 69.3, 58.65, 1)"],
    /** A teal color that automatically adapts to the current trait environment. */
    systemTeal: ["rgba(48.45, 176.1, 199.8, 1)", "rgba(63.75, 199.8, 224.4, 1)"],
    /** A yellow color that automatically adapts to the current trait environment. */
    systemYellow: ["rgba(255, 204, 0, 1)", "rgba(255, 214.2, 10.2, 1)"],
    // Adaptable gray colors
    /** The standard base gray color that adapts to the environment. */
    systemGray: ["rgba(142.8, 142.8, 147.9, 1)", "rgba(142.8, 142.8, 147.9, 1)"],
    /** A second-level shade of gray that adapts to the environment. */
    systemGray2: ["rgba(173.4, 173.4, 179.55, 1)", "rgba(99.45, 99.45, 102.0, 1)"],
    /** A third-level shade of gray that adapts to the environment. */
    systemGray3: ["rgba(198.9, 198.9, 204, 1)", "rgba(71.4, 71.4, 73.95, 1)"],
    /** A fourth-level shade of gray that adapts to the environment. */
    systemGray4: ["rgba(209.1, 209.1, 214.2, 1)", "rgba(58.65, 58.65, 61.2, 1)"],
    /** A fifth-level shade of gray that adapts to the environment. */
    systemGray5: ["rgba(229.5, 229.5, 234.6, 1)", "rgba(43.35, 43.35, 46.35, 1)"],
    /** A sixth-level shade of gray that adapts to the environment. */
    systemGray6: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(28.05, 28.05, 30.6, 1)"],
    /** The color for text labels that contain primary content. */
    label: ["rgba(0, 0, 0, 1)", "rgba(255, 255, 255, 1)"],
    /** The color for text labels that contain secondary content. */
    secondaryLabel: ["rgba(61.2, 61.2, 66, 0.6)", "rgba(234.6, 234.6, 244.8, 0.6)"],
    /** The color for text labels that contain tertiary content. */
    tertiaryLabel: ["rgba(61.2, 61.2, 66, 0.3)", "rgba(234.6, 234.6, 244.8, 0.3)"],
    /** The color for text labels that contain quaternary content. */
    quaternaryLabel: ["rgba(61.2, 61.2, 66, 0.18)", "rgba(234.6, 234.6, 244.8, 0.16)"],
    /** An overlay fill color for thin and small shapes. */
    systemFill: ["rgba(119.85, 119.85, 127.5, 0.2)", "rgba(119.85, 119.85, 127.5, 0.36)"],
    /** An overlay fill color for medium-size shapes. */
    secondarySystemFill: ["rgba(119.85, 119.85, 127.5, 0.16)", "rgba(119.85, 119.85, 127.5, 0.32)"],
    /** An overlay fill color for large shapes. */
    tertiarySystemFill: ["rgba(117.3, 117.3, 127.5, 0.12)", "rgba(117.3, 117.3, 127.5, 0.24)"],
    /** An overlay fill color for large areas that contain complex content. */
    quaternarySystemFill: ["rgba(114.75, 114.75, 127.5, 0.08)", "rgba(117.3, 117.3, 127.5, 0.18)"],
    /** The color for placeholder text in controls or text views. */
    placeholderText: ["rgba(61.2, 61.2, 66, 0.3)", "rgba(234.6, 234.6, 244.8, 0.3)"],
    /** The color for the main background of your interface. */
    systemBackground: ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"],
    /** The color for content layered on top of the main background. */
    secondarySystemBackground: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(28.05, 28.05, 30.6, 1)"],
    /** The color for content layered on top of secondary backgrounds. */
    tertiarySystemBackground: ["rgba(255, 255, 255, 1)", "rgba(43.35, 43.35, 46.35, 1)"],
    /** The color for the main background of your grouped interface. */
    systemGroupedBackground: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(0, 0, 0, 1)"],
    /** The color for content layered on top of the main background of your grouped interface. */
    secondarySystemGroupedBackground: ["rgba(255, 255, 255, 1)", "rgba(28.05, 28.05, 30.6, 1)"],
    /** The color for content layered on top of secondary backgrounds of your grouped interface. */
    tertiarySystemGroupedBackground: ["rgba(242.25, 242.25, 247.35, 1)", "rgba(43.35, 43.35, 46.35, 1)"],
    /** The color for thin borders or divider lines that allows some underlying content to be visible. */
    separator: ["rgba(61.2, 61.2, 66, 0.29)", "rgba(84.15, 84.15, 89.25, 0.6)"],
    /** The color for borders or divider lines that hides any underlying content. */
    opaqueSeparator: ["rgba(198.9, 198.9, 198.9, 1)", "rgba(56.1, 56.1, 58.65, 1)"],
    /** The specified color for links. */
    link: ["rgba(0, 122.4, 255, 1)", "rgba(10.2, 132.6, 255, 1)"],
    /** The nonadaptable system color for text on a light background. */
    darkText: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)"],
    /** The nonadaptable system color for text on a dark background. */
    lightText: ["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.6)"],
};
