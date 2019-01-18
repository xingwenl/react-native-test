import React, { Component } from 'react'
import { SafeAreaView } from "react-navigation";

export default class BaseView extends Component {
  render() {
    return (
      <SafeAreaView>
        {this.props.children}
      </SafeAreaView>
    )
  }
}