import React from 'react';
import { FlatList } from 'react-native';
import StackItem from './StackItem';

const StackList = ({ stacks, onPress }) => !stacks || (
  <FlatList
    data={stacks}
    renderItem={({ item }) => <StackItem
      stack={item}
      isLastStack={item.id === stacks[stacks.length - 1].id}
      onPress={onPress} /> }
    keyExtractor={stack => `Stack#${stack.id}`}
    extraData={stacks}
  />
);

export default StackList;
