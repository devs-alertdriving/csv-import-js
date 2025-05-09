import type { ThemeConfig } from "./theme.types";
declare const theme: {
    styles: import("@chakra-ui/theme-tools").Styles;
    config: ThemeConfig;
    components: {
        Button: {
            baseStyle?: {
                fontWeight: string;
                borderRadius: string;
                height: string;
                lineHeight: string;
                fontSize: string;
                border: string;
                cursor: string;
            } | undefined;
            sizes?: {
                sm: {
                    fontSize: string;
                    px: number;
                    py: number;
                };
                md: {
                    fontSize: string;
                    px: number;
                    py: number;
                };
            } | undefined;
            variants?: {
                solid: (props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
                    _hover: {
                        backgroundColor: string;
                    };
                    color: string;
                };
            } | undefined;
            defaultProps?: {
                size?: "sm" | "md" | undefined;
                variant?: "solid" | undefined;
                colorScheme?: string | undefined;
            } | undefined;
        };
        Alert: {
            baseStyle?: ((props: import("@chakra-ui/styled-system").StyleFunctionProps) => {
                container: {
                    backgroundColor: string;
                    border: string;
                    borderRadius: string;
                    fontWeight: string;
                };
                title: {
                    color: string;
                };
                description: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            }) | undefined;
            sizes?: {
                [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
            } | undefined;
            variants?: {
                [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
            } | undefined;
            defaultProps?: {
                size?: string | number | undefined;
                variant?: string | number | undefined;
                colorScheme?: string | undefined;
            } | undefined;
        };
    };
    sizes: {
        container: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        max: string;
        min: string;
        full: string;
        "3xs": string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        prose: string;
        px: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    shadows: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        outline: string;
        inner: string;
        none: string;
        "dark-lg": string;
    };
    space: {
        px: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    borders: {
        none: number;
        "1px": string;
        "2px": string;
        "4px": string;
        "8px": string;
    };
    transition: {
        property: {
            common: string;
            colors: string;
            dimensions: string;
            position: string;
            background: string;
        };
        easing: {
            "ease-in": string;
            "ease-out": string;
            "ease-in-out": string;
        };
        duration: {
            "ultra-fast": string;
            faster: string;
            fast: string;
            normal: string;
            slow: string;
            slower: string;
            "ultra-slow": string;
        };
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        normal: string;
        none: number;
        shorter: number;
        short: number;
        base: number;
        tall: number;
        taller: string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
    };
    fontWeights: {
        hairline: number;
        thin: number;
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
    };
    fonts: {
        heading: string;
        body: string;
        mono: string;
    };
    fontSizes: {
        "3xs": string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        "9xl": string;
    };
    breakpoints: {
        base: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    radii: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    blur: {
        none: number;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
    };
    colors: {
        transparent: string;
        current: string;
        black: string;
        white: string;
        primary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        secondary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        whiteAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blackAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        red: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        orange: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        yellow: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        green: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        teal: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        cyan: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        purple: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        pink: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        linkedin: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        facebook: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        messenger: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        whatsapp: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        twitter: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        telegram: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };
    semanticTokens: {
        colors: {
            "chakra-body-text": {
                _light: string;
                _dark: string;
            };
            "chakra-body-bg": {
                _light: string;
                _dark: string;
            };
            "chakra-border-color": {
                _light: string;
                _dark: string;
            };
            "chakra-inverse-text": {
                _light: string;
                _dark: string;
            };
            "chakra-subtle-bg": {
                _light: string;
                _dark: string;
            };
            "chakra-subtle-text": {
                _light: string;
                _dark: string;
            };
            "chakra-placeholder-color": {
                _light: string;
                _dark: string;
            };
        };
    };
    direction: "ltr";
};
export default theme;
