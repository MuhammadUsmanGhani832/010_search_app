import React, { LinearGradient } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import { Skeleton } from '@rneui/themed';
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';


const Resturents = ({ title, results, loading }) => {
    const navigation = useNavigation();
    if (!results.length) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            {loading ?
                <View style={{
                    flexDirection: 'row',
                    overflow: 'hidden'
                }}>
                    <View>
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
                            height={10}
                        />
                    </View>
                    <View>
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
                            height={10}
                        />
                    </View>

                </View>
                :
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={results}
                    keyExtractor={(result) => result.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Gallery', { id: item.id })}
                            ><ResultDetail result={item} /></TouchableOpacity>
                        )
                    }}
                />}
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 5
    },
    container: { marginLeft: 10, marginBottom: 10 }
})
export default Resturents


//  {loading
//                 ? <View>
//                     <Skeleton animation="pulse" width={80} height={40} />
//                     <Skeleton
//                         LinearGradientComponent={LinearGradient}
//                         animation="wave"
//                         width={80}
//                         height={40}
//                     />
//                     <Skeleton animation="none" width={80} height={40} />
//                 </View>
//                 : <View>
//                     <Text>{result.length}</Text>
//                 </View>}