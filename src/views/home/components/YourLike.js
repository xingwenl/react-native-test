import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class YourLike extends Component {
    render() {
        const { data } = this.props
        const imgUri = data.imgurl.replace('w.h', '160.0')
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: imgUri}}></Image>
                <View style={styles.detail}>
                    <Text numberOfLines={0} style={styles.brandname}>{data.brandname}</Text>
                    <Text style={styles.title}>{data.title}</Text>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={styles.price}>{data.price} 元</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        // borderBottomWidth: gScreen.onePixelRatio,
        // borderColor: '#e0e0e0',
        // backgroundColor: 'white',
    },
    img: {
        height: 100,
        width: 100,
        marginRight: 15,
        borderRadius: 5
    },
    detail: {
        flex: 1
    },
    brandname: {
        fontSize: 15,
    },
    title: {
        fontSize: 13,
        marginTop: 8,
        color: '#777777'
    },
    price: {
        color: gColor.mainColor,
        fontSize: 14,
    }
})
