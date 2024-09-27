export declare const STANDARD_COLORS: {
    name: string;
    value: string[];
}[];
export declare const UI_ELEMENT_COLORS: {
    name: string;
    value: string[];
}[];
export declare const COLORS: {
    /** A blue color that automatically adapts to the current trait environment. */
    readonly systemBlue: readonly ["rgba(0, 122.4, 255, 1)", "rgba(10.2, 132.6, 255, 1)"];
    /** A brown color that automatically adapts to the current trait environment. */
    readonly systemBrown: readonly ["rgba(163.2, 132.6, 94.8, 1)", "rgba(170.85, 142.8, 104.55, 1)"];
    /** A green color that automatically adapts to the current trait environment. */
    readonly systemGreen: readonly ["rgba(51, 199.8, 89.25, 1)", "rgba(48.45, 209.1, 89.25, 1)"];
    /** An indigo color that automatically adapts to the current trait environment. */
    readonly systemIndigo: readonly ["rgba(89.25, 86.7, 214.2, 1)", "rgba(94.35, 91.8, 229.5, 1)"];
    /** An orange color that automatically adapts to the current trait environment. */
    readonly systemOrange: readonly ["rgba(255, 147.9, 0, 1)", "rgba(255, 158.1, 10.2, 1)"];
    /** A pink color that automatically adapts to the current trait environment. */
    readonly systemPink: readonly ["rgba(255, 45.9, 84.15, 1)", "rgba(255, 56.1, 94.35, 1)"];
    /** A purple color that automatically adapts to the current trait environment. */
    readonly systemPurple: readonly ["rgba(176.1, 81.6, 222.3, 1)", "rgba(191.25, 89.25, 242.25, 1)"];
    /** A red color that automatically adapts to the current trait environment. */
    readonly systemRed: readonly ["rgba(255, 58.65, 48.45, 1)", "rgba(255, 69.3, 58.65, 1)"];
    /** A teal color that automatically adapts to the current trait environment. */
    readonly systemTeal: readonly ["rgba(48.45, 176.1, 199.8, 1)", "rgba(63.75, 199.8, 224.4, 1)"];
    /** A yellow color that automatically adapts to the current trait environment. */
    readonly systemYellow: readonly ["rgba(255, 204, 0, 1)", "rgba(255, 214.2, 10.2, 1)"];
    /** The standard base gray color that adapts to the environment. */
    readonly systemGray: readonly ["rgba(142.8, 142.8, 147.9, 1)", "rgba(142.8, 142.8, 147.9, 1)"];
    /** A second-level shade of gray that adapts to the environment. */
    readonly systemGray2: readonly ["rgba(173.4, 173.4, 179.55, 1)", "rgba(99.45, 99.45, 102.0, 1)"];
    /** A third-level shade of gray that adapts to the environment. */
    readonly systemGray3: readonly ["rgba(198.9, 198.9, 204, 1)", "rgba(71.4, 71.4, 73.95, 1)"];
    /** A fourth-level shade of gray that adapts to the environment. */
    readonly systemGray4: readonly ["rgba(209.1, 209.1, 214.2, 1)", "rgba(58.65, 58.65, 61.2, 1)"];
    /** A fifth-level shade of gray that adapts to the environment. */
    readonly systemGray5: readonly ["rgba(229.5, 229.5, 234.6, 1)", "rgba(43.35, 43.35, 46.35, 1)"];
    /** A sixth-level shade of gray that adapts to the environment. */
    readonly systemGray6: readonly ["rgba(242.25, 242.25, 247.35, 1)", "rgba(28.05, 28.05, 30.6, 1)"];
    /** The color for text labels that contain primary content. */
    readonly label: readonly ["rgba(0, 0, 0, 1)", "rgba(255, 255, 255, 1)"];
    /** The color for text labels that contain secondary content. */
    readonly secondaryLabel: readonly ["rgba(61.2, 61.2, 66, 0.6)", "rgba(234.6, 234.6, 244.8, 0.6)"];
    /** The color for text labels that contain tertiary content. */
    readonly tertiaryLabel: readonly ["rgba(61.2, 61.2, 66, 0.3)", "rgba(234.6, 234.6, 244.8, 0.3)"];
    /** The color for text labels that contain quaternary content. */
    readonly quaternaryLabel: readonly ["rgba(61.2, 61.2, 66, 0.18)", "rgba(234.6, 234.6, 244.8, 0.16)"];
    /** An overlay fill color for thin and small shapes. */
    readonly systemFill: readonly ["rgba(119.85, 119.85, 127.5, 0.2)", "rgba(119.85, 119.85, 127.5, 0.36)"];
    /** An overlay fill color for medium-size shapes. */
    readonly secondarySystemFill: readonly ["rgba(119.85, 119.85, 127.5, 0.16)", "rgba(119.85, 119.85, 127.5, 0.32)"];
    /** An overlay fill color for large shapes. */
    readonly tertiarySystemFill: readonly ["rgba(117.3, 117.3, 127.5, 0.12)", "rgba(117.3, 117.3, 127.5, 0.24)"];
    /** An overlay fill color for large areas that contain complex content. */
    readonly quaternarySystemFill: readonly ["rgba(114.75, 114.75, 127.5, 0.08)", "rgba(117.3, 117.3, 127.5, 0.18)"];
    /** The color for placeholder text in controls or text views. */
    readonly placeholderText: readonly ["rgba(61.2, 61.2, 66, 0.3)", "rgba(234.6, 234.6, 244.8, 0.3)"];
    /** The color for the main background of your interface. */
    readonly systemBackground: readonly ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"];
    /** The color for content layered on top of the main background. */
    readonly secondarySystemBackground: readonly ["rgba(242.25, 242.25, 247.35, 1)", "rgba(28.05, 28.05, 30.6, 1)"];
    /** The color for content layered on top of secondary backgrounds. */
    readonly tertiarySystemBackground: readonly ["rgba(255, 255, 255, 1)", "rgba(43.35, 43.35, 46.35, 1)"];
    /** The color for the main background of your grouped interface. */
    readonly systemGroupedBackground: readonly ["rgba(242.25, 242.25, 247.35, 1)", "rgba(0, 0, 0, 1)"];
    /** The color for content layered on top of the main background of your grouped interface. */
    readonly secondarySystemGroupedBackground: readonly ["rgba(255, 255, 255, 1)", "rgba(28.05, 28.05, 30.6, 1)"];
    /** The color for content layered on top of secondary backgrounds of your grouped interface. */
    readonly tertiarySystemGroupedBackground: readonly ["rgba(242.25, 242.25, 247.35, 1)", "rgba(43.35, 43.35, 46.35, 1)"];
    /** The color for thin borders or divider lines that allows some underlying content to be visible. */
    readonly separator: readonly ["rgba(61.2, 61.2, 66, 0.29)", "rgba(84.15, 84.15, 89.25, 0.6)"];
    /** The color for borders or divider lines that hides any underlying content. */
    readonly opaqueSeparator: readonly ["rgba(198.9, 198.9, 198.9, 1)", "rgba(56.1, 56.1, 58.65, 1)"];
    /** The specified color for links. */
    readonly link: readonly ["rgba(0, 122.4, 255, 1)", "rgba(10.2, 132.6, 255, 1)"];
    /** The nonadaptable system color for text on a light background. */
    readonly darkText: readonly ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)"];
    /** The nonadaptable system color for text on a dark background. */
    readonly lightText: readonly ["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.6)"];
};
