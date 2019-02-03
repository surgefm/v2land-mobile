import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ButtonGroup, Slider, Text, Icon, Overlay, Button } from 'react-native-elements';
import { commonStyle, paddings, paddingConstants, colors, buttonStyle } from '../../styles';

const SubscriptionEditor = ({
  eventId,
  method,
  mode,
  modeLabel,
  updateMode,
  isVisible,
  endSubscriptionEditing,
  submitSubscriptionRequest,
}) => (
  <Overlay
    borderRadius={8}
    onBackdropPress={() => endSubscriptionEditing({ eventId })}
    isVisible={isVisible}
    animationType='fade'
    height='auto'
    width={Dimensions.get('screen').width - 30}
  >
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>关注事件</Text>
        <Icon
          type='antDesign'
          name='close'
          color={colors.darkGrey}
          size={24}
          onPress={() => endSubscriptionEditing({ eventId })}
        />
      </View>
      <View style={paddings.interval}>
        <Text style={styles.label}>通知方式</Text>
        <ButtonGroup
          buttons={['应用通知', 'Twitter', '微博', '邮件']}
          selectedIndex={method}
          containerStyle={commonStyle.noSideMargins}
          selectedButtonStyle={buttonStyle.primary}
        />
      </View>
      <View style={paddings.largeInterval}>
        <Text style={styles.label}>通知时间</Text>
        <Slider
          value={mode}
          onValueChange={value => updateMode(value)}
          maximumValue={4}
          minimumValue={0}
          step={1}
          minimumTrackTintColor='rgb(189, 219, 228)'
          maximumTrackTintColor='#ddd'
          thumbTintColor={colors.theme}
        />
        <Text style={styles.modeLabel}>{modeLabel}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='重置' buttonStyle={{ width: 80 }} type='clear' />
        <Button
          title='关注'
          buttonStyle={[{ width: 80 }, buttonStyle.primary]}
          onPress={() => submitSubscriptionRequest()}
        />
      </View>
    </View>
  </Overlay>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: paddingConstants.interval,
  },
  title: {
    fontSize: 20,
    fontFamily: 'source-han-sans-medium',
    lineHeight: 30,
  },
  label: {
    fontSize: 16,
    fontFamily: 'source-han-sans',
    marginBottom: 4,
  },
  modeLabel: {
    fontSize: 16,
    fontFamily: 'source-han-sans',
    color: colors.theme,
    width: '100%',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SubscriptionEditor;
