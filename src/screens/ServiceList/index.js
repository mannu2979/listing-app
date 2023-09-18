import { Alert, StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView, StatusBar, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getItemList } from '../../services/api'
import ListItem from '../../components/ListItem'
import Header from '../../components/Header'
const { height, width } = Dimensions.get('screen')
const ServiceList = () => {
    const [list, setList] = useState([]);
    const [activeTab, setActiveTab] = useState('purchased')
    const [purchasedAmountList, setPurchasedAmountList] = useState([])
    const [purchasedItemList, setPurchasedItemList] = useState([])
    const [totalAmount, setTotalAmount] = useState()
    useEffect(() => {
        getLists()
    }, [activeTab])
    const getLists = async () => {
        await getItemList().then(response => {
            setList(response.data.data.purchased_services)
        }).catch(res => {
            console.log(res, 'error')
        })
    }
    const handleBilling = (item) => {
        purchasedItemList.push(item)
        purchasedAmountList.push(item.service_selected.price)
        var sum = purchasedAmountList.reduce((accumulator, currentValue) => {
            return accumulator + +currentValue
        }, 0);
        setTotalAmount(sum)
    }
    const trimText = (text, maxLength) => {
        if (text.length > maxLength) {
            return `${text.slice(0, maxLength)}...`
        }
        return text;
    }
    const handleActiveTab = (prop) => {
        setPurchasedItemList([])
        setPurchasedAmountList([])
        setActiveTab(prop)
    }
    return (
        <SafeAreaView>
            <Header activeTab={activeTab} setActiveTab={handleActiveTab} />
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled style={{ zIndex: 0 }}>
                <FlatList
                    data={list}
                    nestedScrollEnabled
                    keyExtractor={(item) => item.id }
                    contentContainerStyle={{ padding: 20, zIndex: 0 }}
                    renderItem={({ item, index }) => (
                        <View>
                            {item.purchased_office_template.purchased_office_services.map((items, index) => (
                                <>{items.service_selected && activeTab === "purchased" &&
                                    <ListItem items={items} title={item.name} handleBilling={handleBilling} />}
                                    {!items.service_selected && activeTab !== "purchased" &&
                                        <ListItem items={items} title={item.name} handleBilling={() => {}} />}
                                </>
                            ))}
                        </View>
                    )}

                />
                {activeTab === 'purchased' ?
                    <View style={styles.billingContainer}>
                        <View style={styles.titleContainer} >
                            <Text style={styles.titles}>Items</Text>
                            <Text style={styles.titles}>Amount</Text>
                        </View>
                        <View style={styles.divider}></View>
                        {purchasedItemList.map((item, index) => (
                            <View style={styles.titleContainer} >
                                <Text style={styles.titles}>{item.name} (id : {item.id})</Text>
                                <Text style={styles.titles}>KR {item.service_selected.price}</Text>
                            </View>
                        ))}
                        <View style={styles.divider}></View>
                        <View style={styles.totalAmountContainer} >
                            <Text style={styles.total}>Total</Text>
                            <Text style={styles.total}>KR {totalAmount}</Text>
                        </View>
                    </View> : <View style={styles.whitespace}></View>}

            </ScrollView>
        </SafeAreaView>
    )
}
export default ServiceList
const styles = StyleSheet.create({
    billingContainer: {
        backgroundColor: 'black',
        padding: 10,
        flex: 1,
        paddingBottom: 300,
    },
    titleContainer: {
        backgroundColor: 'black',
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
    },
    titles: { color: 'white' },
    divider: {
        height: 2,
        backgroundColor: '#ff0080',
        marginVertical: 12,
    },
    totalAmountContainer: {
        backgroundColor: 'black',
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
    },
    total: {
        color: '#ff0080',
        fontSize: 16,
        fontWeight: '600',
    },
    whitespace:{
        height: 300,
        backgroundColor: '#ffffff',
    }
})