import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Icon, useTheme } from '@rneui/themed';
import { useFavorites } from '@app/hooks';

interface FavoriteButtonProps {
  identifier: string;
  style: ViewStyle;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  identifier,
  style,
}) => {
  const {
    theme: { colors },
  } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();

  const checked = () => isFavorite(identifier);
  const onCheck = () => toggleFavorite(identifier);

  return (
    <View style={style}>
      <Icon
        name="favorite"
        type="fontisto"
        color={checked() ? colors.secondary : colors.grey3}
        onPress={onCheck}
        size={32}
      />
    </View>
  );
};

export default FavoriteButton;
