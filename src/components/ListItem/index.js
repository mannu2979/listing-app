import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

const ListItem = (props) => {
    const { items, title, handleBilling, } = props;
    useEffect(() => {
        handleBilling(items)
    }, [])
    const trimText = (text, maxLength) => {
        if (text.length > maxLength) {
            return `${text.slice(0, maxLength)}...`
        }
        return text;
    }
    return (
        <View >
            <Text style={styles.postHeader}>{title} :</Text>
            <TouchableOpacity style={styles.postCard}>
                <Image source={{ uri: items?.image }} style={styles.postImage} resizeMode='stretch' />
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                    <Text style={styles.postTitle}>{items?.name}</Text>
                    <Text style={styles.postDescription}>{trimText(items?.description, 60)}</Text>
                    <Text style={styles.price}>KR {items?.price}</Text>
                </View>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Image tintColor='#808080' source={require('../../assets/images/infoIcon.png')} style={styles.rightIcon} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    postHeader: {
        fontSize: 18,
        color: '#000',
        marginBottom: 5,
    },
    postCard: {
        borderWidth: 1,
        borderColor: '#808080',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    postImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
    },
    postTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    postDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: '#808080',
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ff0000',
        flex: 1,
    },
    rightIcon: {
        height: 20,
        width: 20,
    },
})