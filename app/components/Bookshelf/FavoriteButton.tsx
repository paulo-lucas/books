import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Icon, useTheme } from '@rneui/themed';

interface FavoriteButtonProps {
  checked: boolean;
  onCheck(): void;
  style: ViewStyle;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  checked,
  onCheck,
  style,
}) => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <View style={style}>
      <Icon
        name="favorite"
        type="fontisto"
        color={checked ? colors.secondary : colors.grey3}
        onPress={onCheck}
        size={32}
      />
    </View>
  );
};

export default FavoriteButton;
