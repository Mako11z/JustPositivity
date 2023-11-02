import { View, Text, SafeAreaView, TouchableOpacity, AppState, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button 
            title='Positive Messages'
            onPress={() => {
            navigation.navigate('PosMessage')
        }}
        />
        </View>
    )
}

export default HomeScreen;