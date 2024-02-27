import { Image, Text } from '@rneui/base'
import React, { useEffect, useState, LinearGradient } from 'react'
import yelp from '../api/yelp'
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import { Skeleton } from '@rneui/themed';


const ResturentDetail = ({ route }) => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { id } = route.params;

    useEffect(() => {
        const getApi = async (id) => {
            setLoading(true)
            try {
                const res = await yelp.get(`/${id}`);
                if (res.error) {
                    throw new Error(res.error)
                }
                setResults(res.data);
                console.log(res.data);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        }
        getApi(id)
    }, []);
    if (!results) {
        return null;
    }

    return (
        <>
            {loading ?
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    <Skeleton style={styles.container}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={250}
                        height={10}
                    />
                    <Skeleton style={styles.container}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={250}
                        height={120}
                    />
                    <Skeleton style={styles.container}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={250}
                        height={120}
                    />
                    <Skeleton style={styles.container}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={250}
                        height={120}
                    />

                </View>
                : <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text>{results.name}</Text><View style={`${results.is_closed} ` ? styles.open : styles.close}></View>
                    </View>
                    {errorMessage ? <Text>errorMessage</Text> : null}
                    <FlatList
                        style={{ alignSelf: 'center' }}
                        data={results.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({ item }) => {
                            return (
                                <Image style={styles.image} source={{ uri: `${item}` }} />
                            )
                        }}
                    /></View>}
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250, height: 120,
        borderRadius: 5, margin: 10
    }
    ,
    open: { height: 10, width: 10, borderRadius: 50, backgroundColor: 'green', alignSelf: 'center', marginLeft: 5 },
    close: {
        height: 10, width: 10, borderRadius: 50, backgroundColor: 'black', alignSelf: 'center', marginLeft: 5
    }, container: { marginLeft: 10, marginBottom: 10 }
});

export default ResturentDetail;