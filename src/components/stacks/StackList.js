import React from 'react';
import {FlatList} from 'react-native';
import StackItem from 'containers/StackItem';

const StackList = ({stacks, onPress, onNewsPress}) =>
  !stacks || (
    <FlatList
      data={stacks}
      scrollEnabled={false}
      renderItem={({item, index}) => (
        <StackItem
          stackId={item}
          index={stacks.length - index}
          isLastStack={item === stacks[stacks.length - 1]}
          onPress={onPress}
          onNewsPress={onNewsPress}
        />
      )}
      keyExtractor={stack => `Stack#${stack}`}
      extraData={stacks}
    />
  );

export default StackList;
