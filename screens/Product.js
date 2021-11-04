import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons, Ionicons, AntDesign, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Product({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Nav */}
      <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22,}}>
        <TouchableOpacity style={{padding: 15, borderRadius: 50, backgroundColor: '#f8f8f8'}} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity style={{padding: 15, borderRadius: 50, backgroundColor: '#f8f8f8'}} onPress={() => navigation.navigate("Checkout")}>
            <SimpleLineIcons name="handbag" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 10, backgroundColor: '#fff2ee', alignItems: 'center'}}>
        <Image source={require("../assets/product_images/test/headphone-1.png")} style={{width: 360, height: 260}}/>
      </View>

      {/* Product Info */}
      <View style={{backgroundColor: '#fff', marginTop: 30, padding: 20, borderTopLeftRadius: 40, borderTopRightRadius: 40, flex: 1}}>
        
        {/* Colors */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Colours:</Text>
          <View style={{padding: 13, backgroundColor: 'red', borderRadius: 50, marginLeft: 15}}></View>
        </View>

        {/* Product Name */}
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Apple Airpods Max</Text>
          <Text style={{color: '#7e7f83'}}>Open this page using safari on your Iphone or Ipad</Text>
        </View>

        {/* Price */}
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#dc6059', fontWeight: 'bold', fontSize: 20}}>$549</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="star" size={21} color="orange" />
              <Text>4.9 (123 reviews)</Text>
            </View>
          </View>
        </View>

        {/* Line */}
        <View style={{borderWidth: 1, marginVertical: 20, borderColor: "#f8f8f8"}}></View>

        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <View style={{flex: 1}}>
            <Feather name="package" size={24} color="black" />
            <Text style={{color: '#7e7f83'}}>Free no-contact delivery</Text>
          </View>
          <View style={{flex: 1}}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="black" />
            <Text style={{color: '#7e7f83'}}>Free and easy delivery</Text>
          </View>
        </View>

        {/* product details */}
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold'}}>Details: </Text>
          <Text style={{color: '#7e7f83'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
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
          <Text style={{color: "#fff"}}>Add to Cart</Text>
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
