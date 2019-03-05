import React from 'react';
import { Share } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HeaderButtons, {
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { getNewsURL, getShortenedDescription, log } from '../../util';

const NewsHeaderButtons = ({ color, news }) => (
  <HeaderButtons
    HeaderButtonComponent={props => (
      <HeaderButton
        {...props}
        IconComponent={EvilIcons}
        iconSize={26}
        color={color || '#000'}
      />
    )}
  >
    <Item title="share" iconName="share-apple" onPress={onShare(news)} />
  </HeaderButtons>
);

const onShare = news => async () => {
  try {
    await Share.share({
      title: news.title,
      message: getShortenedDescription(news.title + ' | ' + news.abstract),
      url: getNewsURL(news),
    });
  } catch (error) {
    log(error.message);
  }
};

export default NewsHeaderButtons;
