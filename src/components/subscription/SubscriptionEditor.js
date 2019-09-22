import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Slider, Text, Icon, Overlay, Button} from 'react-native-elements';
import {paddings, paddingConstants, colors, buttonStyle} from 'styles';
import Picker from 'react-native-picker-select';

const SubscriptionEditor = ({
  eventId,
  method,
  methods,
  updateMethod,
  mode,
  modeLabel,
  updateMode,
  isVisible,
  endSubscriptionEditing,
  submitSubscriptionRequest,
}) => (
  <Overlay
    borderRadius={8}
    onBackdropPress={() => endSubscriptionEditing({eventId})}
    isVisible={isVisible}
    animationType="fade"
    height="auto"
    width={Dimensions.get('screen').width - 30}>
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>关注事件</Text>
        <Icon
          type="antDesign"
          name="close"
          color={colors.darkGrey}
          size={24}
          onPress={() => endSubscriptionEditing({eventId})}
        />
      </View>
      <View style={paddings.interval}>
        <Text style={styles.label}>通知方式</Text>
        <Picker
          placeholder={{
            label: '选择通知方式',
            value: null,
            color: '#9EA0A4',
          }}
          items={methods}
          onValueChange={value => updateMethod(value)}
          style={{...pickerSelectStyles}}
          value={method}
        />
      </View>
      <View style={paddings.largeInterval}>
        <Text style={styles.label}>通知时间</Text>
        <Slider
          value={mode}
          onValueChange={value => updateMode(value)}
          maximumValue={2}
          minimumValue={0}
          step={1}
          minimumTrackTintColor="rgb(189, 219, 228)"
          maximumTrackTintColor="#ddd"
          thumbTintColor={colors.theme}
          animateTransitions={true}
          animationType="spring"
        />
        <Text style={styles.modeLabel}>{modeLabel}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="关注"
          buttonStyle={[{width: 80}, buttonStyle.primary]}
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
    fontFamily: 'SourceHanSansCN-Medium',
    lineHeight: 30,
  },
  label: {
    fontSize: 16,
    fontFamily: 'SourceHanSansCN-Regular',
    marginBottom: 4,
  },
  modeLabel: {
    fontSize: 16,
    fontFamily: 'SourceHanSansCN-Regular',
    color: colors.theme,
    width: '100%',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default SubscriptionEditor;
