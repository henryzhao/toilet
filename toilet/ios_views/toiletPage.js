/**
 * Created by zhaoyuqi on 2017/9/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import TwebView from './twebview'

class  toiletPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TwebView url="https://www.baiduff.com"/>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    text:{
        fontSize: 60
    },
    container:{
        flex:1
    },


});
module.exports = toiletPage;