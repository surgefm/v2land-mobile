import React from 'react';
import { FlatList } from 'react-native';
import StackItem from '../../containers/StackItem';

const StackList = ({ stacks, onPress, onNewsPress }) => !stacks || (
  <FlatList
    data={stacks}
    renderItem={({ item }) => <StackItem
      stackId={item}
      isLastStack={item === stacks[stacks.length - 1]}
      onPress={onPress}
      onNewsPress={onNewsPress} /> }
    keyExtractor={stack => `Stack#${stack.id}`}
    extraData={stacks}
  />
);

export default StackList;
