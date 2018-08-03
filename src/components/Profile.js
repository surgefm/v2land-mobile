import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TextInput,Dimensions, ScrollView } from 'react-native';
import LoginButton from './profile/LoginButton'
import WeiboButton from './profile/WeiboButton'
import TwitterButton from './profile/TwitterButton'
import EditView from './profile/LoginInput'
import ImageButton from './profile/BackButton'
import PasswordInput from './profile/PasswordInput'
import {Icon,Button} from 'react-native-elements'
import { pageStyle, paddings} from '../styles';

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
        style={[pageStyle.background, paddings.pageTop]}
      >
	      <View style={paddings.largeInterval}>
	      <View style={[styles.backcontainer,paddings.side, paddings.interval]}>
        <Icon
          size='40'
          name='md-arrow-round-back'
          type='ionicon'
          color='dimgrey'/>
	        <Text style={styles.loginText}>登入</Text>
	      </View>
	        <View style={[styles.loginInterface,paddings.side]}>
	        <View style={[{alginItems:'flex-start'},paddings.side]}>
	                  <Text style={[styles.welcome,paddings.side]}>用户名</Text>
	                      <View style={{alignItems:'center',width:widthOfMargin}}>
	                        <EditView  name='' onChangeText={(text) => {
	                          this.userName = text;}}/>
	                      </View>
	                  <View style={{paddingTop:10}}>
	                        <Text style={[styles.welcome,paddings.side]}>密码</Text>
	                        <View style={{marginTop:0,alignItems:'center',width:widthOfMargin}}>
	                          <PasswordInput name='' onChangeText={(text) => {
	                            this.userName = text;}}/>
	                        </View>
	                  </View>
	        </View>
              <Button
                  borderRadius = '40'
                  buttonStyle={styles.buttonStyle}
                  textStyle={styles.textStyle}
                  backgroundColor = 'dimgrey'
                  containerViewStyle='borderRadius'
                  title='登入' />
	            <View style={{marginTop:10, width:widthOfMargin}}>
	              <Text style={[styles.login,paddings.side]}>或使用以下账号登入</Text>
                </View>
                  <Button
                    borderRadius = '40'
                    containerViewStyle='borderRadius'
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    backgroundColor='tomato'
                    rightIcon={{name: 'md-arrow-round-forward',type:'ionicon',color:'white'}}
                    iconContainerStyle={{marginRight:0}}
                    title='微博' />
                  <Button
                    borderRadius = '40'
                    backgroundColor='dodgerblue'
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    containerViewStyle='borderRadius'
                    rightIcon={{name: 'md-arrow-round-forward',type:'ionicon',color:'white'}}
                    title='Twitter' />
	        </View>
	      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'flex-start',
    backgroundColor:'#FFFFFF',
  },
  backcontainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    paddingBottom:20,
  },
  loginText: {
    color: 'grey',
    fontSize:50,
    fontWeight:'bold',
  },
  loginInterface: {
    marginTop:0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    color: 'grey',
    backgroundColor:'#FFFFFF',
  },
  login: {
    fontSize: 15,
    paddingTop:30,
  },
  buttonStyle: {
    height:50,
    width:widthOfMargin*0.75,
    marginTop:30,
  },
  textStyle: {
    fontWeight:'bold',
    fontSize:20,
  },
});

