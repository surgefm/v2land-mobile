import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { PasswordInput, LoginInput as EditView } from './profile';
import { pageStyle, paddings } from '../styles';

const widthOfMargin = Dimensions.get('window').width;

const Profile = () => (
  <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={[pageStyle.background, paddings.pageTop]}
    >
      <View style={paddings.largeInterval}>
        <View style={[styles.backcontainer, paddings.side, paddings.interval]}>
          <Icon
            size={40}
            name='md-arrow-round-back'
            type='ionicon'
            color='dimgrey'/>
          <Text style={styles.loginText}>登入</Text>
        </View>
        <View style={[styles.loginInterface, paddings.side]}>
          <View style={[{ alignItems: 'flex-start' }, paddings.side]}>
            <Text style={[styles.welcome, paddings.side]}>用户名</Text>
            <View style={{ alignItems: 'center', width: widthOfMargin }}>
              <EditView name='' onChangeText={(text) => {
                userName = text;
              }} />
            </View>
            <View style={{ paddingTop: 10 }}>
              <Text style={[styles.welcome, paddings.side]}>密码</Text>
              <View style={{ marginTop: 0, alignItems: 'center', width: widthOfMargin }}>
                <PasswordInput name='' onChangeText={(text) => {
                  userName = text;
                }}/>
              </View>
            </View>
          </View>
          <Button
            borderRadius={40}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            backgroundColor='dimgrey'
            title='登入' />
          <View style={{ marginTop: 10, width: widthOfMargin }}>
            <Text style={[styles.login, paddings.side]}>或使用以下账号登入</Text>
          </View>
          <Button
            borderRadius={40}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            backgroundColor='tomato'
            rightIcon={{ name: 'md-arrow-round-forward', type: 'ionicon', color: 'white' }}
            iconContainerStyle={{ marginRight: 0 }}
            title='微博' />
          <Button
            borderRadius={40}
            backgroundColor='dodgerblue'
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            rightIcon={{ name: 'md-arrow-round-forward', type: 'ionicon', color: 'white' }}
            title='Twitter' />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  backcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  loginText: {
    color: 'grey',
    fontSize: 50,
    fontWeight: 'bold',
  },
  loginInterface: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    color: 'grey',
    backgroundColor: '#FFFFFF',
  },
  login: {
    fontSize: 15,
    paddingTop: 30,
  },
  buttonStyle: {
    height: 50,
    width: widthOfMargin * 0.75,
    marginTop: 30,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Profile;
