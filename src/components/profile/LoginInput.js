import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';


const {height,width} = Dimensions.get('window');
let widthOfMargin = Dimensions.get('window').width*0.85


export default class EditView extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }

  render() {
    return (
      <View style={LoginStyles.TextInputView}>
       <TextInput style={LoginStyles.TextInput}
         placeholder={this.props.name}
         onChangeText={
           (text) => {
             this.setState({text});
             this.props.onChangeText(text);
           }
        }
       />
       </View>
    );
  }
}


const LoginStyles = StyleSheet.create({
  TextInputView: {
    marginTop: 0,
    height:50,
    width:widthOfMargin,
    backgroundColor: '#ffffff',
    borderColor:'#000000',
    flexDirection: 'column',
    justifyContent: 'center', 
    borderTopWidth:0,
    borderBottomWidth:1,
    borderLeftWidth:0,
    borderRightWidth:0,
  },

  TextInput: {
    backgroundColor: '#ffffff',
    height:45,
    margin:18,
  },
});