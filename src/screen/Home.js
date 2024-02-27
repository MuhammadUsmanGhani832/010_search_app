import React, { useEffect, useState, LinearGradient } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import Resturents from '../components/Resturents';
import useSearch from '../hook/useSearch';


const Home = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const { fetchAPI, results, errorMessage, loading } = useSearch();
    const filterResultsByPrice = (price) => {
        return results.filter(item => item.price === price)
    }
    return (
        <>
            <SearchBar term={term} onChangeTerm={newTerm => setTerm(newTerm)} onEndTerm={() => fetchAPI(term)} />
            <TouchableOpacity />
            <ScrollView>
                <Resturents title={'Cost Effective'} results={filterResultsByPrice('$')} loading={loading} navigation={navigation} />
                <Resturents title={'Bit Pricier'} results={filterResultsByPrice('$$')} loading={loading} navigation={navigation} />
                <Resturents title={'Big Spender'} results={filterResultsByPrice('$$$')} loading={loading} navigation={navigation} />
            </ScrollView>

        </>
    )
}

export default Home;



