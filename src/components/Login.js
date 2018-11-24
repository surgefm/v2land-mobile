import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { TwitterButton, WeiboButton } from './login';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { commonStyle, paddings, buttonStyle, buttonTextStyle } from '../styles';
import { Title } from './elements';

const Login = ({ onLoginClick, onRegisterClick, errorMessage }) => (
  <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
    <ScrollView style={[paddings.pageTop]}>
      <View style={[paddings.largeInterval, paddings.side, { flex: 1 }]}>
        <Title style={paddings.largeInterval}>登录</Title>
        <View style={[styles.loginInterface, paddings.largeInterval]}>
          <FormLabel labelStyle={commonStyle.noSideMargins}>
            用户名或邮箱
          </FormLabel>
          <FormInput containerStyle={commonStyle.noSideMargins} />
          <FormLabel labelStyle={commonStyle.noSideMargins}>密码</FormLabel>
          <FormInput
            containerStyle={commonStyle.noSideMargins}
            secureTextEntry
          />
          <FormValidationMessage>
            {errorMessage}
          </FormValidationMessage>
        </View>
        <View style={styles.loginButtons}>
          <Button
            onClick={onRegisterClick}
            containerViewStyle={commonStyle.noSideMargins}
            buttonStyle={[buttonStyle.button, buttonStyle.outline]}
            textStyle={[buttonTextStyle.button, buttonTextStyle.outline]}
            title="注册"
            outline
          />
          <Button
            onClick={onLoginClick}
            containerViewStyle={commonStyle.noSideMargins}
            buttonStyle={[buttonStyle.button, buttonStyle.primary]}
            textStyle={buttonTextStyle.button}
            backgroundColor="dimgrey"
            title="登入"
          />
        </View>
        <View>
          <Text style={[styles.socialText]}>或使用第三方账号登入</Text>
          <View style={styles.socialButtons}>
            <WeiboButton />
            <TwitterButton />
          </View>
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

export default Login;
