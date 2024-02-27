import { Image, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ResultDetail = ({ result }) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        marginBottom: 5,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    },
    container: { marginLeft: 10, marginBottom: 10 }
})

export default ResultDetail;