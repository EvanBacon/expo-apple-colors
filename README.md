# @bacons/apple-colors

Use native adaptive iOS colors in your Expo app on all platforms.

This package provides typed bindings for all [UIKit colors](https://developer.apple.com/documentation/uikit/uicolor/standard_colors#3281252) and native adaptive shims on Android and web. The web colors use CSS variables and support high gamut displays.

## Add the package to your npm dependencies

This project requires a dev client on Android as the colors are added to the native resources via a config plugin.

```
yarn add @bacons/apple-colors
```

In your app.json:

```json
{
  "expo": {
    "plugins": ["@bacons/apple-colors"]
  }
}
```

## Usage

```tsx
import * as Colors from "@bacons/apple-colors";

function App() {
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.systemBackground,
        }}
      >
        {/* No TypeScript errors... */}
        <Text style={{ color: Colors.label }}>Link</Text>
      </View>
    </>
  );
}
```

You can lock the colors to a single scheme with `Appearance.setColorScheme()` from `react-native`.

## Colors

<img width="531" alt="Screenshot 2024-09-27 at 7 10 44 PM" src="https://github.com/user-attachments/assets/9d76866c-93d0-4538-b2d8-35c5c5004a35">

## Issue with Android

While this technically works and is setup correctly on Android, the PlatformColor API in React Native [has a bug](https://github.com/facebook/react-native/issues/32823) that makes it not update at runtime. This means the first time a component is mounted with the color, it will be the correct color, but if the appearance changes at runtime, it will not update. This is a limitation of React Native and not this package.
