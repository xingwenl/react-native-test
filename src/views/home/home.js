import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    SectionList
 } from "react-native";
import Banner from './components/banner'
import FeatureList from "./components/FeatureList";
import SpecialItem from './components/SpecialItem'
import { 
    Button, 
 } from '@ant-design/react-native';
import { SpacingView } from "../../components";
import { menuInfo, discount } from "../../request/home";

export default class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <TouchableOpacity
                style={{
                    width: gScreen.screen_width*0.7,
                    height: 30,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Image 
                    source={require('../../assets/img/home/search_icon.png')}
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 8
                    }}>
                </Image>
                <Text style={{fontSize: 13}}>搜索</Text>
            </TouchableOpacity>
        )
    })
    render() {
        return (
            <View style={{flex: 1}}>
                <SectionList
                    sections={[
                        {title: 'banner', data: [[]]},
                        {title: 'feature', data: [menuInfo]},
                        {title: 'special', data: [discount]},
                    ]}
                    renderSectionHeader={({ section: { title } }) => {
                        if (title === "banner") {
                            return (<View/>)
                        }
                        return (<SpacingView/>)
                    }}
                    renderItem={({item, index, section}) => {
                        switch (section.title) {
                            case 'banner':
                                return <Banner/>
                            break;
                            case 'feature':
                                return <FeatureList data={item}/>
                            break;
                            case 'special':
                                return <SpecialItem data={item}/>
                            break;
                            default:
                                break;
                        }
                    }}/>
                {/* <ScrollView>
                    <Banner/>
                    <FeatureList/>
                    <SpacingView/>
                    <SpecialItem/>
                    <SpacingView/>
                    <Button 
                        onPress={() => this.props.navigation.navigate('Details', {
                            name: '你好'
                        })}
                        type="primary">Details</Button>
                </ScrollView> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {

    }
})