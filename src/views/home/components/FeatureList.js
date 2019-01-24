import React, { PureComponent } from 'react'
import { 
    View,
    Text,
    Image,
    StyleSheet
 } from "react-native";
import { 
    Grid,
 } from '@ant-design/react-native';

export default class FeatureList extends PureComponent {
    render() {
        const { data, handleClick } = this.props
        return (
            <View key={data.id} style={styles.container}>
                <Grid
                    data={data}
                    hasLine={false}
                    renderItem={this.featureItem.bind(this)}
                    isCarousel
                    columnNum={5}
                    carouselProps={2}
                    carouselProps={{
                        dotStyle: {bottom: -15}
                    }}
                    onPress={handleClick}
                />
            </View>
        )
    }
    featureItem (el, index) {
        const item = this.props.data[index]
        return (
            <View style={styles.item}>
                <Image style={styles.img} source={item.icon}/>
                <Text style={styles.text}>
                    {item.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10
    },
    item: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    img: {
        width: 35, 
        height: 35
    },
    text: {
        fontSize: 12, 
        marginTop: 4
    }
})