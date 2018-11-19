import React from 'react';
import { Share } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import { getEventURL, log } from '../../util';

const ArticleHeaderButtons = ({ color, event }) => (
  <HeaderButtons HeaderButtonComponent={props => (
    <HeaderButton
      {...props}
      IconComponent={EvilIcons}
      iconSize={26}
      color={color || '#fff'} />
  )}>
    <Item title="share" iconName="share-apple" onPress={onShare(event)} />
  </HeaderButtons>
);

const onShare = (event) => async () => {
  try {
    await Share.share({
      title: event.name,
      message: event.description,
      url: getEventURL(event),
    });
  } catch (error) {
    log(error.message);
  }
};

export default ArticleHeaderButtons;
