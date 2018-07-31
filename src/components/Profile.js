import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, TextInput,Dimensions, ScrollView } from 'react-native';
import LoginButton from './profile/LoginButton'
import WeiboButton from './profile/WeiboButton'
import TwitterButton from './profile/TwitterButton'
import EditView from './profile/LoginInput'
import ImageButton from './profile/BackButton'
import PasswordInput from './profile/PasswordInput'

const {height,width} = Dimensions.get('window');
let widthOfMargin = Dimensions.get('window').width

const onButtonPress = () => {
  Alert.alert('click');
}

export default class Profile extends Component {

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={{backgroundColor:'#FFFFFF'}}
      >
	      <View style={styles.container}>
	      <View style={styles.backcontainer}>
	        <ImageButton />
	        <Text style={styles.loginText}>登入</Text>
	      </View>
	        <View style={styles.loginInterface}>
	        <View style={{alginItems:'flex-start',width:widthOfMargin}}>
	                  <Text style={styles.welcome}>用户名</Text>
	                      <View style={{alignItems:'center',width:widthOfMargin}}>
	                        <EditView  name='' onChangeText={(text) => {
	                          this.userName = text;}}/>
	                      </View>
	                  <View style={{paddingTop:10}}>
	                        <Text style={styles.welcome}>密码</Text>
	                        <View style={{marginTop:0,alignItems:'center',width:widthOfMargin}}>
	                          <PasswordInput name='' onChangeText={(text) => {
	                            this.userName = text;}}/>
	                        </View>
	                  </View>
	        </View>
	          <View style={{marginTop:10}}>
	            <LoginButton name='登入' onPressCallBack={this.onButtonPress} /> 
	          </View> 
	            <View style={{marginTop:10}}>
	              <Text style={styles.login}>或使用以下账号登入</Text>
	              <WeiboButton name='微博' onPressCallBack={this.onButtonPress} /> 
	              <TwitterButton name='Twitter' onPressCallBack={this.onButtonPress} /> 
	            </View>
	        </View>
	      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    alignItems:'flex-start',
    backgroundColor:'#FFFFFF',
  },
  backcontainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
  },
  loginText: {
    color: 'grey',
    fontSize:50,
    fontWeight:'bold',
  },
  loginInterface: {
    marginTop:0,
    width: widthOfMargin,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    color: 'grey',
    paddingLeft:20,
    backgroundColor:'#FFFFFF',
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'bold',
    backgroundColor:'#FFFFFF',
  },
});

