import React, { Component } from 'react'
import { 
    View,
    Text
 } from "react-native";
 import BaseView from '../../common/BaseView.js'
export default class Market extends Component {
  render() {
    return (
      <BaseView>
          <Text>
            我是Market
          </Text>
      </BaseView>
    )
  }
}
