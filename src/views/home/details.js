import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Details'
    }
    constructor () {
        super()
        // console.log(this.props.navigation)
        console.log(this.props)
        // const didBlurSubscription = this.props.navigation.addListener(
        //     'didBlur',
        //     payload => {
        //         console.log('didBlur', payload)
        //     }
        // )
    }
    componentWillMount () {
        console.log('DetailsScreencomponentWillMount')
        const didBlurSubscription = this.props.navigation.addListener(
            'didBlur',
            payload => {
                console.log('didBlur', payload)
            }
        )
    }
    componentDidMount () {
        console.log(this.props)
        console.log('DetailsScreencomponentDidMount')
    }
    // componentDidCatch () {
    //     console.log('DetailsScreencomponentDidCatch')
    // }
    // componentWillUnmount () {
    //     console.log('DetailsScreencomponentWillUnmount')
    // }
    // componentDidUpdate () {
    //     console.log('DetailsScreencomponentWillUnmount')
    // }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>
                Details Screen
                { this.props.navigation.state.params.name }
            </Text>
            <Button
                title="Set"
                onPress={() => this.props.navigation.setParams({
                    name: 'Detail'
                })}/>
        </View>
      );
    }
  }