import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons, Ionicons, AntDesign, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Cart({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Nav */}
      <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22,}}>
        <TouchableOpacity style={{padding: 15, borderRadius: 50, backgroundColor: '#f8f8f8'}} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 14}}>Cart</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={{padding: 15, borderRadius: 50, backgroundColor: '#f8f8f8'}} onPress={() => navigation.navigate("Checkout")}>
            <SimpleLineIcons name="handbag" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>


      <View style={{
        flexDirection: 'row', 
        backgroundColor: 'black', 
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0,
      }}>
        <TouchableOpacity style={{backgroundColor: '#29282b', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 50}}>
          <FontAwesome5 name="bookmark" size={24} color="#fff"/>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#ff5b38', marginLeft: 20, borderRadius: 15, paddingVertical: 15}}  onPress={() => navigation.navigate("Checkout")}>
          <Text style={{color: "#fff"}}>Checkout</Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2ee',
    marginTop: 10,
  },
});
