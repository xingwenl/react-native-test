import React, { Component } from 'react'
import { 
    View,
    Image,
    StyleSheet,
    Dimensions
 } from "react-native";
 import { 
    Carousel
 } from '@ant-design/react-native';
import { bannerRequest } from "../../../request/home";
 const styles = StyleSheet.create({
    swiperWrapper: {
        height: 180
    },
    slide: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiperImage: {
        width: Dimensions.get('window').width, 
        height: 180
    }
})
export default class Banner extends Component {
    constructor () {
        super()
        this.state = {
            bannerList: [
                'https://img.mineex.co.kr/img/upload/m/m_1231_banner.png',
                'https://img.mineex.co.kr/img/upload/m/m_bxa2_v1.png',
                'https://img.mineex.co.kr/img/upload/m/m_jackpot_v1.png'
            ]
        }
    }

    componentWillMount () {
        // console.log(bannerRequest)
        // bannerRequest.get()
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        // bannerRequest()
        //     .then(res => {
        //         console.log(res)
        //     })
    }

    render () {
        return (
            <Carousel 
                style={styles.swiperWrapper} 
                autoplay
                infinite>
                {
                    this.state.bannerList.map((obj) => {
                        return (
                            <View style={styles.slide} key={obj}>
                                <Image style={styles.swiperImage} source={{uri: obj}}></Image>
                            </View>
                        )
                    })
                }
            </Carousel>
        )
    }
}