import React from 'react';
import { RefreshControl as RC } from 'react-native';
import { colors } from 'styles';

const RefreshControl = ({ refreshing, title, onRefresh = () => {} }) => (
  <RC
    refreshing={refreshing}
    onRefresh={() => onRefresh()}
    title={title || '下拉刷新'}
    progressBackgroundColor={colors.lightGrey}
  />
);

export default RefreshControl;
