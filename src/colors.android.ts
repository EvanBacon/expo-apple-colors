import {PlatformColor} from 'react-native';
// @ts-expect-error: internal global
const isExpoGo = typeof expo !== 'undefined' && globalThis.expo?.modules?.ExpoGo; 
/**
 * A blue color that automatically adapts to the current trait environment.
 * @light rgba(0, 122, 255, 1)
 * @dark rgba(10, 132, 255, 1)
 */ 
export const systemBlue = isExpoGo ? "rgba(0, 122, 255, 1)" : PlatformColor("@color/systemBlue");
/**
 * A brown color that automatically adapts to the current trait environment.
 * @light rgba(162, 132, 94, 1)
 * @dark rgba(172, 142, 104, 1)
 */ 
export const systemBrown = isExpoGo ? "rgba(162, 132, 94, 1)" : PlatformColor("@color/systemBrown");
/**
 * A cyan color that automatically adapts to the current trait environment.
 * @light rgba(50, 173, 230, 1)
 * @dark rgba(100, 210, 255, 1)
 */ 
export const systemCyan = isExpoGo ? "rgba(50, 173, 230, 1)" : PlatformColor("@color/systemCyan");
/**
 * A green color that automatically adapts to the current trait environment.
 * @light rgba(52, 199, 89, 1)
 * @dark rgba(48.45, 209.1, 89.25, 1)
 */ 
export const systemGreen = isExpoGo ? "rgba(52, 199, 89, 1)" : PlatformColor("@color/systemGreen");
/**
 * An indigo color that automatically adapts to the current trait environment.
 * @light rgba(88, 86, 214, 1)
 * @dark rgba(94, 92, 230, 1)
 */ 
export const systemIndigo = isExpoGo ? "rgba(88, 86, 214, 1)" : PlatformColor("@color/systemIndigo");
/**
 * A mint color that automatically adapts to the current trait environment.
 * @light rgba(0, 199, 190, 1)
 * @dark rgba(99, 230, 226, 1)
 */ 
export const systemMint = isExpoGo ? "rgba(0, 199, 190, 1)" : PlatformColor("@color/systemMint");
/**
 * An orange color that automatically adapts to the current trait environment.
 * @light rgba(255, 149, 0, 1)
 * @dark rgba(255, 159, 10, 1)
 */ 
export const systemOrange = isExpoGo ? "rgba(255, 149, 0, 1)" : PlatformColor("@color/systemOrange");
/**
 * A pink color that automatically adapts to the current trait environment.
 * @light rgba(255, 45, 85, 1)
 * @dark rgba(255, 55, 95, 1)
 */ 
export const systemPink = isExpoGo ? "rgba(255, 45, 85, 1)" : PlatformColor("@color/systemPink");
/**
 * A purple color that automatically adapts to the current trait environment.
 * @light rgba(175, 82, 222, 1)
 * @dark rgba(191, 90, 242, 1)
 */ 
export const systemPurple = isExpoGo ? "rgba(175, 82, 222, 1)" : PlatformColor("@color/systemPurple");
/**
 * A red color that automatically adapts to the current trait environment.
 * @light rgba(255, 59, 48, 1)
 * @dark rgba(255, 69, 58, 1)
 */ 
export const systemRed = isExpoGo ? "rgba(255, 59, 48, 1)" : PlatformColor("@color/systemRed");
/**
 * A teal color that automatically adapts to the current trait environment.
 * @light rgba(48, 176, 199, 1)
 * @dark rgba(64, 200, 224, 1)
 */ 
export const systemTeal = isExpoGo ? "rgba(48, 176, 199, 1)" : PlatformColor("@color/systemTeal");
/**
 * A yellow color that automatically adapts to the current trait environment.
 * @light rgba(255, 204, 0, 1)
 * @dark rgba(255, 214, 10, 1)
 */ 
export const systemYellow = isExpoGo ? "rgba(255, 204, 0, 1)" : PlatformColor("@color/systemYellow");
/**
 * The standard base gray color that adapts to the environment.
 * @light rgba(142, 142, 147, 1)
 * @dark rgba(142, 142, 147, 1)
 */ 
export const systemGray = isExpoGo ? "rgba(142, 142, 147, 1)" : PlatformColor("@color/systemGray");
/**
 * A second-level shade of gray that adapts to the environment.
 * @light rgba(174, 174, 178, 1)
 * @dark rgba(99, 99, 102, 1)
 */ 
export const systemGray2 = isExpoGo ? "rgba(174, 174, 178, 1)" : PlatformColor("@color/systemGray2");
/**
 * A third-level shade of gray that adapts to the environment.
 * @light rgba(199, 199, 204, 1)
 * @dark rgba(72, 72, 74, 1)
 */ 
export const systemGray3 = isExpoGo ? "rgba(199, 199, 204, 1)" : PlatformColor("@color/systemGray3");
/**
 * A fourth-level shade of gray that adapts to the environment.
 * @light rgba(209, 209, 214, 1)
 * @dark rgba(58, 58, 60, 1)
 */ 
export const systemGray4 = isExpoGo ? "rgba(209, 209, 214, 1)" : PlatformColor("@color/systemGray4");
/**
 * A fifth-level shade of gray that adapts to the environment.
 * @light rgba(229, 229, 234, 1)
 * @dark rgba(44, 44, 46, 1)
 */ 
export const systemGray5 = isExpoGo ? "rgba(229, 229, 234, 1)" : PlatformColor("@color/systemGray5");
/**
 * A sixth-level shade of gray that adapts to the environment.
 * @light rgba(242, 242, 247, 1)
 * @dark rgba(28, 28, 30, 1)
 */ 
export const systemGray6 = isExpoGo ? "rgba(242, 242, 247, 1)" : PlatformColor("@color/systemGray6");
/**
 * The color for text labels that contain primary content.
 * @light rgba(0, 0, 0, 1)
 * @dark rgba(255, 255, 255, 1)
 */ 
export const label = isExpoGo ? "rgba(0, 0, 0, 1)" : PlatformColor("@color/label");
/**
 * The color for text labels that contain secondary content.
 * @light rgba(61.2, 61.2, 66, 0.6)
 * @dark rgba(234.6, 234.6, 244.8, 0.6)
 */ 
export const secondaryLabel = isExpoGo ? "rgba(61.2, 61.2, 66, 0.6)" : PlatformColor("@color/secondaryLabel");
/**
 * The color for text labels that contain tertiary content.
 * @light rgba(61.2, 61.2, 66, 0.3)
 * @dark rgba(234.6, 234.6, 244.8, 0.3)
 */ 
export const tertiaryLabel = isExpoGo ? "rgba(61.2, 61.2, 66, 0.3)" : PlatformColor("@color/tertiaryLabel");
/**
 * The color for text labels that contain quaternary content.
 * @light rgba(61.2, 61.2, 66, 0.18)
 * @dark rgba(234.6, 234.6, 244.8, 0.16)
 */ 
export const quaternaryLabel = isExpoGo ? "rgba(61.2, 61.2, 66, 0.18)" : PlatformColor("@color/quaternaryLabel");
/**
 * An overlay fill color for thin and small shapes.
 * @light rgba(119.85, 119.85, 127.5, 0.2)
 * @dark rgba(119.85, 119.85, 127.5, 0.36)
 */ 
export const systemFill = isExpoGo ? "rgba(119.85, 119.85, 127.5, 0.2)" : PlatformColor("@color/systemFill");
/**
 * An overlay fill color for medium-size shapes.
 * @light rgba(119.85, 119.85, 127.5, 0.16)
 * @dark rgba(119.85, 119.85, 127.5, 0.32)
 */ 
export const secondarySystemFill = isExpoGo ? "rgba(119.85, 119.85, 127.5, 0.16)" : PlatformColor("@color/secondarySystemFill");
/**
 * An overlay fill color for large shapes.
 * @light rgba(117.3, 117.3, 127.5, 0.12)
 * @dark rgba(117.3, 117.3, 127.5, 0.24)
 */ 
export const tertiarySystemFill = isExpoGo ? "rgba(117.3, 117.3, 127.5, 0.12)" : PlatformColor("@color/tertiarySystemFill");
/**
 * An overlay fill color for large areas that contain complex content.
 * @light rgba(114.75, 114.75, 127.5, 0.08)
 * @dark rgba(117.3, 117.3, 127.5, 0.18)
 */ 
export const quaternarySystemFill = isExpoGo ? "rgba(114.75, 114.75, 127.5, 0.08)" : PlatformColor("@color/quaternarySystemFill");
/**
 * The color for placeholder text in controls or text views.
 * @light rgba(61.2, 61.2, 66, 0.3)
 * @dark rgba(234.6, 234.6, 244.8, 0.3)
 */ 
export const placeholderText = isExpoGo ? "rgba(61.2, 61.2, 66, 0.3)" : PlatformColor("@color/placeholderText");
/**
 * The color for the main background of your interface. Use this color for standard table views and designs that have a white primary background in a light environment.
 * @light rgba(255, 255, 255, 1)
 * @dark rgba(0, 0, 0, 1)
 */ 
export const systemBackground = isExpoGo ? "rgba(255, 255, 255, 1)" : PlatformColor("@color/systemBackground");
/**
 * The color for content layered on top of the main background. Use this color for standard table views and designs that have a white primary background in a light environment.
 * @light rgba(242.25, 242.25, 247.35, 1)
 * @dark rgba(28.05, 28.05, 30.6, 1)
 */ 
export const secondarySystemBackground = isExpoGo ? "rgba(242.25, 242.25, 247.35, 1)" : PlatformColor("@color/secondarySystemBackground");
/**
 * The color for content layered on top of secondary backgrounds. Use this color for standard table views and designs that have a white primary background in a light environment.
 * @light rgba(255, 255, 255, 1)
 * @dark rgba(43.35, 43.35, 46.35, 1)
 */ 
export const tertiarySystemBackground = isExpoGo ? "rgba(255, 255, 255, 1)" : PlatformColor("@color/tertiarySystemBackground");
/**
 * The color for the main background of your grouped interface.
 * @light rgba(242.25, 242.25, 247.35, 1)
 * @dark rgba(0, 0, 0, 1)
 */ 
export const systemGroupedBackground = isExpoGo ? "rgba(242.25, 242.25, 247.35, 1)" : PlatformColor("@color/systemGroupedBackground");
/**
 * The color for content layered on top of the main background of your grouped interface. Use this color for grouped content, including table views and platter-based designs.
 * @light rgba(255, 255, 255, 1)
 * @dark rgba(28.05, 28.05, 30.6, 1)
 */ 
export const secondarySystemGroupedBackground = isExpoGo ? "rgba(255, 255, 255, 1)" : PlatformColor("@color/secondarySystemGroupedBackground");
/**
 * The color for content layered on top of secondary backgrounds of your grouped interface.
 * @light rgba(242.25, 242.25, 247.35, 1)
 * @dark rgba(43.35, 43.35, 46.35, 1)
 */ 
export const tertiarySystemGroupedBackground = isExpoGo ? "rgba(242.25, 242.25, 247.35, 1)" : PlatformColor("@color/tertiarySystemGroupedBackground");
/**
 * The color for thin borders or divider lines that allows some underlying content to be visible.
 * @light rgba(61.2, 61.2, 66, 0.29)
 * @dark rgba(84.15, 84.15, 89.25, 0.6)
 */ 
export const separator = isExpoGo ? "rgba(61.2, 61.2, 66, 0.29)" : PlatformColor("@color/separator");
/**
 * The color for borders or divider lines that hides any underlying content.
 * @light rgba(198.9, 198.9, 198.9, 1)
 * @dark rgba(56.1, 56.1, 58.65, 1)
 */ 
export const opaqueSeparator = isExpoGo ? "rgba(198.9, 198.9, 198.9, 1)" : PlatformColor("@color/opaqueSeparator");
/**
 * The specified color for links.
 * @light rgba(0, 122.4, 255, 1)
 * @dark rgba(10.2, 132.6, 255, 1)
 */ 
export const link = isExpoGo ? "rgba(0, 122.4, 255, 1)" : PlatformColor("@color/link");
/**
 * The nonadaptable system color for text on a light background.
 * @light rgba(0, 0, 0, 1)
 * @dark rgba(0, 0, 0, 1)
 */ 
export const darkText = isExpoGo ? "rgba(0, 0, 0, 1)" : PlatformColor("@color/darkText");
/**
 * The nonadaptable system color for text on a dark background.
 * @light rgba(255, 255, 255, 0.6)
 * @dark rgba(255, 255, 255, 0.6)
 */ 
export const lightText = isExpoGo ? "rgba(255, 255, 255, 0.6)" : PlatformColor("@color/lightText");