import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {LinearGradient} from 'expo';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Top Bar */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', padding: 15, flex: 3, backgroundColor: '#BEC2CC', borderRadius: 15}}>
          <AntDesign name="search1" size={24} color="black" style={{marginHorizontal: 10}}/>
          <TextInput placeholder="Search"/>
        </View>
        <View style={{backgroundColor: "black", padding: 10, borderRadius: 50, marginLeft: 10 }}>
          <Ionicons name="ios-options-sharp" size={24} color="white" />
        </View>
      </View>

      {/* Categories */}
      <View style={{marginTop: 15}}>
        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Top Categories</Text>
        <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', }}>
          <ImageBackground source={require("../assets/product_images/categories/apple_img.jpg")} style={{flex: 1, marginRight: 20}} imageStyle={{borderRadius: 10,}}>
            <Text style={{margin: 15, fontWeight: 'bold', color: "red"}}>Apple</Text>
          </ImageBackground>

          <ImageBackground source={require("../assets/product_images/categories/samsung_img.jpg")} style={{flex: 1, marginRight: 20}} imageStyle={{borderRadius: 10,}}>
            <Text style={{margin: 15, fontWeight: 'bold', color: "red"}}>Samsung</Text>
          </ImageBackground>

          <ImageBackground source={require("../assets/product_images/categories/huawei_img.jpg")} style={{flex: 1, marginRight: 20}} imageStyle={{borderRadius: 10,}}>
            <Text style={{margin: 15, fontWeight: 'bold', color: "red"}}>Huawei</Text>
          </ImageBackground>
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
