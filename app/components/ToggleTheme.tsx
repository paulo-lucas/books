import React from 'react';
import { Icon, useTheme, useThemeMode } from '@rneui/themed';

export const ToggleTheme = () => {
  const { mode, setMode } = useThemeMode();
  const {
    theme: { colors },
  } = useTheme();

  const isDark = () => mode === 'dark';
  const toggle = () => setMode(isDark() ? 'light' : 'dark');

  return (
    <Icon
      name={isDark() ? 'moon' : 'sun'}
      type="feather"
      color={colors.black}
      onPress={toggle}
    />
  );
};
