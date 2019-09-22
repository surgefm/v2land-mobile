import React from 'react';
import {Share} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HeaderButtons, {
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import {getEventURL, getShortenedDescription, log} from 'util';

const ArticleHeaderButtons = ({color, event, beginSubscriptionEditing}) => (
  <HeaderButtons
    HeaderButtonComponent={props => (
      <HeaderButton
        {...props}
        IconComponent={EvilIcons}
        iconSize={26}
        color={color || '#fff'}
      />
    )}>
    {/* <Item
      title="subscribe"
      iconName="bell"
      onPress={() => beginSubscriptionEditing({ eventId: event.id })}
    /> */}
    <Item title="share" iconName="share-apple" onPress={onShare(event)} />
  </HeaderButtons>
);

const onShare = event => async () => {
  try {
    await Share.share({
      title: event.name,
      message: getShortenedDescription(event.name + ' | ' + event.description),
      url: getEventURL(event),
    });
  } catch (error) {
    log(error.message);
  }
};

export default ArticleHeaderButtons;
