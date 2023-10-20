import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';


const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item day={item.name} temp={item.temp} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const Item = ( day, temp ) => {
    return (
        <View style={styles.container}>
            <Text>{day}</Text>
            <Text>{temp}</Text>
        </View>
    )
}

const data = [
    {
        id: 1,
        name: "Monday",
        temp: 6,
    },
    {
        id: 2,
        name: "Tuesday",
        temp: 7,
    },
    {
        id: 3,
        name: "Wednesday",
        temp: 8,
    },
    {
        id: 4,
        name: "Thursday",
        temp: 9,
    },
    {
        id: 5,
        name: "Friday",
        temp: 10,
    },
    {
        id: 6,
        name: "Saturday",
        temp: 11,
    },
    {
        id: 7,
        name: "Sunday",
        temp: 12,
    }
]

export default UpcomingWeather;