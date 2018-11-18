import React from 'react';
import { FlatList } from 'react-native';
import StackItem from './StackItem';

const StackList = ({ stacks, onPress, onNewsPress }) => !stacks || (
  <FlatList
    data={stacks}
    renderItem={({ item }) => <StackItem
      stack={item}
      isLastStack={item.id === stacks[stacks.length - 1].id}
      onPress={onPress}
      onNewsPress={onNewsPress} /> }
    keyExtractor={stack => `Stack#${stack.id}`}
    extraData={stacks}
  />
);

export default StackList;
