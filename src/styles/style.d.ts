import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    color: {
      main: string;

      g900: string;
      g800: string;
      g700: string;
      g600: string;
      g500: string;
      g400: string;
      g300: string;
      g200: string;
      g100: string;

      success: string;
      warning: string;
      error: string;

      border: string;
    };

    maxWidth: string;
    bottomNavigatorHeight: string;
    mobileScreenPadding: string;
  }
}
