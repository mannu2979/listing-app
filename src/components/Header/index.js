import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const tabs = [
    { id: 1, name: 'purchased', title: 'purchased services' },
    { id: 2, name: 'additional', title: 'additional services' }
]
const Header = (props) => {
    const { activeTab, setActiveTab } = props
    return (
        <View style={styles.container}>
            <View style={styles.headbar}>
                <Image
                    style={styles.headerIcon}
                    source={require('../../assets/images/listIcon.png')}
                />
                <Text style={styles.headerTitle}>Services</Text>
            </View>
            <View style={styles.tabBar}>
                {tabs.map((items) => (
                    <TouchableOpacity onPress={() => {
                        setActiveTab(items.name);
                    }} style={items.name === activeTab ? styles.activeTab : styles.tab}>
                        <Text style={items.name === activeTab ? styles.activeTabTitle : styles.tabTitle}>{items.title}</Text>
                    </TouchableOpacity>
                ))}
            </View></View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    headbar: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 16,
    },
    headerIcon: {
        height: 30,
        width: 30
    },
    headerTitle: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: '600',
        color:'#000',
    },
    tabBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    activeTab: {
        borderBottomWidth: 3,
        flex: 1,
        alignItems: 'center',
        paddingBottom: 12,
        borderColor: '#808080',
    },
    tab: {
        borderBottomWidth: 1,
        flex: 1,
        alignItems: 'center',
        paddingBottom: 12,
        borderColor: '#808080',
    },
    activeTabTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
        textTransform: 'uppercase',
    },
    tabTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#808080',
        textTransform: 'uppercase',
    }
})