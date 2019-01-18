import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    RefreshControl
 } from "react-native";

import { createStackNavigator } from "react-navigation";
import NavigationItem from "../../components/NavigationItem";

import { List } from "@ant-design/react-native";
const Item = List.Item

const styles = StyleSheet.create({
    header: {
        backgroundColor: gColor.mainColor,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 30
    },
    avatar: {
        marginRight: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 5
    }
})


class Header extends Component {
    render () {
        return (
            <View style={styles.header}>
                <Image style={styles.avatar} source={require('../../assets/img/mine/avatar.png')}></Image>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.name}>李星文</Text>
                        <Image style={{width: 20, height: 20}} source={require('../../assets/img/mine/beauty_technician_v15.png')}></Image>
                    </View>
                    <Text style={{color: 'white', fontSize: 13, marginTop: 4}}>
                        个人信息 >>
                    </Text>
                </View>
            </View>
        );
    }
}

class AccountCell extends Component {

    renderItem = (list) => {
        return (
            list.map(item => (
                <Item 
                    key={item.title}
                    thumb={(<Image
                        style={{width: 20, height: 20, marginRight: 5}}
                        source={item.image}/>
                    )} 
                    extra={(
                        <Text style={{fontSize: 13}}>{item.subtitle}</Text>
                    )} 
                    arrow="horizontal">
                    <Text style={{fontSize: 13}}>{item.title}</Text>
                </Item>
            ))
        )
    }

    render () {
        return (
            <View>
                {
                    this.getDataList().map((list, index) => (
                        <List 
                            renderHeader={(
                                <View
                                    style={{height: 15, backgroundColor: "#f3f3f3"}}>
                                </View>
                            )}
                            key={index}>
                            {
                                this.renderItem(list)
                            }
                        </List>
                    ))
                }
            </View>
        )
    }
    getDataList() {
        return (
          [
            [
              { title: '我的钱包', subtitle: '办信用卡', image: require('../../assets/img/mine/icon_mine_wallet.png') },
              { title: '余额', subtitle: '￥95872385', image: require('../../assets/img/mine/icon_mine_balance.png') },
              { title: '抵用券', subtitle: '63', image: require('../../assets/img/mine/icon_mine_voucher.png') },
              { title: '会员卡', subtitle: '2', image: require('../../assets/img/mine/icon_mine_membercard.png') }
            ],
            [
              { title: '好友去哪', image: require('../../assets/img/mine/icon_mine_friends.png') },
              { title: '我的评价', image: require('../../assets/img/mine/icon_mine_comment.png') },
              { title: '我的收藏', image: require('../../assets/img/mine/icon_mine_collection.png') },
              { title: '会员中心', subtitle: 'v15', image: require('../../assets/img/mine/icon_mine_membercenter.png') },
              { title: '积分商城', subtitle: '好礼已上线', image: require('../../assets/img/mine/icon_mine_member.png') }
            ],
            [
              { title: '客服中心', image: require('../../assets/img/mine/icon_mine_customerService.png') },
              { title: '关于美团', subtitle: '我要合作', image: require('../../assets/img/mine/icon_mine_aboutmeituan.png') }
            ]
          ]
        )
    }
}



class AccountScreen extends Component {
    
    constructor () {
        super()
        this.state = {
            isRefreshing: false
        }
    }

    onRefresh () {
        this.setState({
            isRefreshing: true
        })
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            })
        }, 2000);
    }

    render() {
        return (
            <View>
                <View style={{position: 'absolute', height: gScreen.screen_height/2, width: gScreen.screen_width,backgroundColor: gColor.mainColor}}></View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            tintColor
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}
                            tintColor='gray'/>
                    }>
                    <Header/>
                    <AccountCell/>
                </ScrollView>
            </View>
        )
    }
    static navigationOptions = ({navigator}: any) => ({
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <NavigationItem
                    icon={require('../../assets/img/mine/icon_navigation_item_set_white.png')}
                    onPress={() => {

                    }}/>
                <NavigationItem
                    icon={require('../../assets/img/mine/icon_navigation_item_message_white.png')}
                    onPress={() => {

                    }}/>
            </View>
        ),
        headerStyle: {
            backgroundColor: gColor.mainColor,
            evevation: 0,
            borderBottomWidth: 0,
        }
    })
}
const Account = createStackNavigator({
    Account: {
        screen: AccountScreen
    }
},{
    initialRouteName: 'Account',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: gColor.mainColor
        }
    },
    navigationOptions: {
        tabBarLabel: 'Account'
    }
});

export default Account