import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'
import { 
    Grid,
 } from '@ant-design/react-native';
export default class SpecialItem extends Component {
    render() {
        const { data } = this.props
        return (
        <Grid
            data={data}
            renderItem={this.renderItem.bind(this)}
            columnNum={2}
            itemStyle={{
                height: 100
            }}/>
        )
    }

    renderItem (el, index) {
        let item = this.props.data[index]
        return (
            <View style={styles.item}>
                <View >
                    <Text>{item.maintitle}</Text>
                    <Text>{item.deputytitle}</Text>
                </View>
                <Image style={styles.img} source={{uri: item.imageurl}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        ...gCss.flexCenter
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30
    }
})
