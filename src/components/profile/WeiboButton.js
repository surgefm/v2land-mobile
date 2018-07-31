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
  Dimensions,
  resizeMode,
  Alert
} from 'react-native';

const {height,width} = Dimensions.get('window');
let widthOfMargin = Dimensions.get('window').width*0.75

const onButtonPress = () => {
  Alert.alert('weibo');
}

export default class ImageButton extends Component{
  render(){
    return(
      <TouchableOpacity  onPress={onButtonPress}  activeOpacity={0.2} focusedOpacity={0.5}>
         <View style=  {{justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFF'}}>
          <Image source={require('./image/weibo.png')} style={{resizeMode:'contain',width:widthOfMargin}}>
          </Image>
         </View>
      </TouchableOpacity>
  );
  }
}

// export default class WeiboButton extends Component {
//   constructor(props) {
//    super(props);
//    this.state = {text: ''};
//   }
//   render() {
//     return (
//       <TouchableOpacity onPress={this.props.onPressCallback} style={LoginStyles.weiboTextView}>
//         <Text style={LoginStyles.loginText} >
//             {this.props.name}
//         </Text>
//       </TouchableOpacity>
//     );
//   }
// }



// const LoginStyles = StyleSheet.create({

//   loginText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize:20,
//     width:70,
//   },
//   weiboTextView: {
//     marginTop: 10,
//     backgroundColor:'red',
//     height:60,
//     borderRadius:30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width:widthOfMargin,
//     alignItems:'center',
//   },
// });