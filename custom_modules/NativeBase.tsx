import React from 'react';
import {
  SafeAreaProvider,
  Metrics,
  initialWindowMetrics as defaultInitialWindowMetrics,
} from 'react-native-safe-area-context';
import { theme as defaultTheme, ITheme } from 'native-base/src/theme';
import type { IColorModeProviderProps } from 'native-base/src/core/color-mode';
import HybridProvider from 'native-base/src/core/hybrid-overlay/HybridProvider';
import { OverlayProvider } from '@react-native-aria/overlays';
import {
  ToastProvider,
  ToastRef,
} from 'native-base/src/components/composites/Toast';
import {
  defaultConfig,
  INativebaseConfig,
  NativeBaseConfigProvider,
} from 'native-base/src/core/NativeBaseContext';
import { useToast } from 'native-base/src/components/composites/Toast';
import { Platform, useWindowDimensions } from 'react-native';
import {
  getClosestBreakpoint,
  platformSpecificSpaceUnits,
} from 'native-base/src/theme/tools/utils';
import { ResponsiveQueryProvider } from 'native-base/src/utils/useResponsiveQuery';

// For SSR to work, we need to pass initial insets as 0 values on web.

// https://github.com/th3rdwave/react-native-safe-area-context/issues/132
const defaultInitialWindowMetricsBasedOnPlatform: Metrics | null =
  Platform.select({
    web: {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    },
    default: defaultInitialWindowMetrics,
  });

export interface NativeBaseProviderProps {
  theme?: ITheme;
  colorModeManager?: IColorModeProviderProps['colorModeManager'];
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialWindowMetrics?: any;
  config?: INativebaseConfig;
  isSSR?: boolean;
  disableContrastText?: boolean;
  // Refer https://github.com/th3rdwave/react-native-safe-area-context#testing
}

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const {
    colorModeManager,
    config = defaultConfig,
    children,
    theme: propsTheme = defaultTheme,
    initialWindowMetrics,
    isSSR,
    disableContrastText,
  } = props;
  const theme = config.theme ?? propsTheme;

  const newTheme = React.useMemo(() => {
    if (config.enableRem) {
      return platformSpecificSpaceUnits(theme);
    }
    return theme;
  }, [config.enableRem, theme]);

  const windowWidth = useWindowDimensions()?.width;

  const currentBreakpoint = React.useMemo(
    () => getClosestBreakpoint(newTheme.breakpoints, windowWidth),
    [windowWidth, newTheme.breakpoints]
  );

  return (
    <NativeBaseConfigProvider
      theme={newTheme}
      config={config}
      currentBreakpoint={currentBreakpoint}
      isSSR={isSSR}
      disableContrastText={disableContrastText}
    >
      <SafeAreaProvider
        initialMetrics={
          initialWindowMetrics ?? defaultInitialWindowMetricsBasedOnPlatform
        }
      >
        <ResponsiveQueryProvider disableCSSMediaQueries={!isSSR}>
          <HybridProvider
            colorModeManager={colorModeManager}
            options={theme.config}
          >
            <OverlayProvider isSSR>
              <ToastProvider>
                <InitializeToastRef />
                {children}
              </ToastProvider>
            </OverlayProvider>
          </HybridProvider>
        </ResponsiveQueryProvider>
      </SafeAreaProvider>
    </NativeBaseConfigProvider>
  );
};

const InitializeToastRef = () => {
  const toast = useToast();
  ToastRef.current = toast;
  return null;
};

export { NativeBaseProvider };
