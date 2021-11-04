import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Checkout({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Nav */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={{padding: 15, borderRadius: 50, backgroundColor: '#f8f8f8'}} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{fontWeight: 'bold'}}>2 items</Text>
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{fontWeight: 'bold'}}>Checkout</Text>
      </View>
        
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 15, marginBottom: 40}}>

          {/* Add card Button */}
          <TouchableOpacity style={{backgroundColor: '#eeeeee', justifyContent: 'center', padding: 20, marginRight: 15, borderRadius: 15, height: 200}}>
            <Text>+</Text>
          </TouchableOpacity>

          {/* First card */}
          <TouchableOpacity style={{paddingVertical: 20, paddingHorizontal: 30, backgroundColor: '#ff3b39', borderRadius: 15, height: 200}}>
            <Image source={require("../assets/product_images/test/visa.png")} style={{width: 70, height: 30}}/>
            <Text style={{color: '#fff', marginTop:5}}>National Bank</Text>
            <Text style={{color: '#fff', marginVertical: 20, fontWeight: 'bold'}}>8080 8070 8090 70</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name="credit-card-alt" size={35} color="white" />
              <View style={{marginHorizontal: 30}}>
                <Text style={{color: '#fff', marginTop:5}}>Expires On</Text>
                <Text style={{color: '#fff'}}>03/22</Text>
              </View>
            </View>
          </TouchableOpacity>


          {/* Second card */}
          <TouchableOpacity style={{paddingVertical: 20, paddingHorizontal: 30, backgroundColor: '#4066ff', borderRadius: 15, marginLeft: 10, height: 200}}>
            <Image source={require("../assets/product_images/test/mastercard.png")} style={{width: 70, height: 30}}/>
            <Text style={{color: '#fff', marginTop:5}}>National Bank</Text>
            <Text style={{color: '#fff', marginVertical: 20, fontWeight: 'bold'}}>8080 8070 8090 70</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name="credit-card-alt" size={35} color="white" />
              <View style={{marginHorizontal: 30}}>
                <Text style={{color: '#fff', marginTop:5}}>Expires On</Text>
                <Text style={{color: '#fff'}}>03/22</Text>
              </View>
            </View>
          </TouchableOpacity>

      </ScrollView>

      <View style={{marginTop: 20, backgroundColor: '#f5e7e7', padding: 20, marginHorizontal: -20, borderTopRightRadius: 20, borderTopLeftRadius: 20}}>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Shipping Address</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Entypo name="edit" size={24} color="black" />
          </View>
        </View>

        <Text>445 University of Ghana, East Legon,</Text>
        <Text>Ghana</Text>


        {/* Cart Calculations */}
        <View style={{backgroundColor: 'black', padding: 20, marginHorizontal: -22, borderTopRightRadius: 20, borderTopLeftRadius: 20, marginTop: 25}}>
          
          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
            <Text style={{color: '#fff',}}>Total (2 items)</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>$1098</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
            <Text style={{color: '#fff',}}>Delivery</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Free</Text>
            </View>
          </View>

          {/* line */}
          <View style={{borderWidth: 1, borderColor: '#fff', marginVertical: 10}}></View>

          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Total</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>$ 1098</Text>
            </View>
          </View>

          <TouchableOpacity style={{
            alignItems: 'center',
            padding: 20,
            backgroundColor: "#ff5b38",
            marginTop: 20,
            borderRadius: 15,
          }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Process to Confirm</Text>
          </TouchableOpacity>

        </View>

      </View> 


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    marginTop: 10
  },
});
