import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { commonStyle, paddings, buttonStyle, buttonTextStyle } from '../../styles';
import SvgUri from 'react-native-svg-uri';

const Registration = ({
  onRegisterClick,
  goBack,
  errorMessage,
  setUsername,
  setEmail,
  setPassword,
  isLoading,
  username,
  email,
  password,
}) => (
  <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <ScrollView style={paddings.pageTop}>
      <View style={[paddings.largeInterval, paddings.side, { flex: 1 }]}>
        <View style={paddings.largeInterval}>
          <SvgUri
            width="82.31"
            height="40"
            source={require('../../static/registration.svg')}
          />
        </View>
        <View style={[styles.loginInterface, paddings.largeInterval]}>
          <Input
            label="用户名"
            containerStyle={{ paddingHorizontal: 0 }}
            onChangeText={setUsername}
            spellCheck={false}
            autoCapitalize='none'
            value={username}
            shake={true}
          />
          <Input
            label="邮箱"
            containerStyle={{ marginTop: 16, paddingHorizontal: 0 }}
            onChangeText={setEmail}
            spellCheck={false}
            autoCapitalize='none'
            value={email}
            shake={true}
          />
          <Input
            label="密码"
            containerStyle={{ marginTop: 16, paddingHorizontal: 0 }}
            onChangeText={setPassword}
            value={password}
            errorMessage={errorMessage}
            errorStyle={[commonStyle.noSideMargins, { fontSize: 14 }]}
            secureTextEntry
          />
        </View>
        <View style={styles.loginButtons}>
          <Button
            onPress={() => goBack()}
            title="返回"
            type="clear"
          />
          <Button
            onPress={onRegisterClick}
            loading={isLoading}
            containerStyle={commonStyle.noSideMargins}
            buttonStyle={[buttonStyle.button, buttonStyle.primary]}
            textStyle={buttonTextStyle.button}
            title="注册"
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  loginInterface: {
    flex: 1,
    width: '100%',
  },
  loginButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  socialText: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 30,
    marginBottom: 10,
    color: '#333',
  },
  socialButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Registration;
