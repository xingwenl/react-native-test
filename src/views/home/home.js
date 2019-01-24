import React, { PureComponent } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    SectionList
 } from "react-native";
import Banner from './components/banner'
import FeatureList from "./components/FeatureList";
import SpecialItem from './components/SpecialItem'
import { SpacingView } from "../../components";
import { menuInfo, discount } from "../../request/home";
import { recommendRequest } from "../../request/home";
import YourLike from './components/YourLike';
export default class HomeScreen extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <TouchableOpacity
                style={styles.nav}>
                <Image 
                    source={require('../../assets/img/home/search_icon.png')}
                    style={styles.navImg}>
                </Image>
                <Text style={styles.navText}>搜索</Text>
            </TouchableOpacity>
        )
    })
    constructor () {
        super()
        this.state = {
            recommend: [],
            refreshing: false
        }
    }
    componentWillMount () {
        this.recommendRequest()
    }

    recommendRequest () {
        this.setState({
            refreshing: true
        })
        recommendRequest.get()
            .then(res => {
                this.setState({
                    refreshing: false
                })
                this.setState({
                    recommend: res.data
                })
            })
    }

    featureHandleClick (param) {
        setTimeout(() => {
            this.props.navigation.push('Details', {
                name: param.text
            })
        }, 1000);
    }

    renderSectionHeader({ section: { title } }) {
        if (title === "banner") {
            return null
        }
        if (title === 'recommend') {
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{padding: 10, fontSize: 15}}>猜你喜欢</Text>
                </View>
            )
        }
        return null
    }
    renderSectionFooter({section: {title}}) {
        if (title === 'recommend') {
            return null
        }
        return (
            <SpacingView/>
        )
    }
    renderItem({item, section}) {
        switch (section.title) {
            case 'banner':
                return <Banner/>
            break;
            case 'feature':
                return <FeatureList data={item} handleClick={this.featureHandleClick.bind(this)}/>
            break;
            case 'special':
                return <SpecialItem data={item}/>
            break;
            case 'recommend':
                return <YourLike data={item}/>
            break;
            default:
                break;
        }
    }
    ItemSeparatorComponent() {
        return (
            <View style={{height: gScreen.onePixelRatio, backgroundColor: '#e0e0e0'}}>
            </View>
        )
    }
    render() {
        const { recommend, refreshing } = this.state
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'banner', data: [[]]},
                        {title: 'feature', data: [menuInfo]},
                        {title: 'special', data: [discount]},
                        {title: 'recommend', data: recommend}
                    ]}
                    keyExtractor={(item, index) => {
                        return index
                    }}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                    renderSectionFooter={this.renderSectionFooter.bind(this)}
                    renderItem={this.renderItem.bind(this)}
                    ItemSeparatorComponent={this.ItemSeparatorComponent.bind(this)}
                    refreshing={refreshing}
                    onRefresh={this.recommendRequest.bind(this)}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    nav: {
        width: gScreen.screen_width*0.7,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navImg: {
        width: 18,
        height: 18,
        marginRight: 8
    },
    navText: {
        fontSize: 13
    },
    container: {
        flex: 1
    }
})