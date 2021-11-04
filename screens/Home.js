import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Top Bar */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', padding: 15, flex: 3, backgroundColor: '#f8f8f8', borderRadius: 15}}>
          <AntDesign name="search1" size={24} color="black" style={{marginHorizontal: 10}}/>
          <TextInput placeholder="Search" style={{flex: 1}}/>
        </View>
        <View style={{backgroundColor: "black", padding: 10, borderRadius: 50, marginLeft: 10 }}>
          <Ionicons name="ios-options-sharp" size={24} color="white" />
        </View>
      </View>

      {/* Categories */}
      <View style={{marginTop: 20}}>
        <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16}}>Top Categories</Text>
        <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', }}>

          <ImageBackground source={require("../assets/product_images/categories/apple_img.jpg")} style={{flex: 1, marginRight: 20,}} imageStyle={{borderRadius: 10, borderColor: '#ea736d', borderWidth: 2}}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}  style={styles.linearGradient}>
              <Text style={{margin: 15, fontWeight: 'bold', color: "white"}}>Apple</Text>
            </LinearGradient>
          </ImageBackground>

          <ImageBackground source={require("../assets/product_images/categories/samsung_img.jpg")} style={{flex: 1, marginRight: 20}} imageStyle={{borderRadius: 10,}}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}  style={styles.linearGradient}>
              <Text style={{margin: 15, fontWeight: 'bold', color: "white"}}>Samsung</Text>
            </LinearGradient>
          </ImageBackground>

          <ImageBackground source={require("../assets/product_images/categories/huawei_img.jpg")} style={{flex: 1, marginRight: 20}} imageStyle={{borderRadius: 10,}}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}  style={styles.linearGradient}>
              <Text style={{margin: 15, fontWeight: 'bold', color: "white"}}>Huawei</Text>
            </LinearGradient>
          </ImageBackground>

        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 23}}>
        <Text style={{flex: 1, fontSize: 17, fontWeight: 'bold'}}>All Products</Text>
        <View style={{justifyContent: 'flex-end', marginRight: 10}}>
          <Text>Sort by: <Text style={{fontWeight: 'bold', fontSize: 16}}>Latest</Text></Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 90}}>
        {/* Products Container */}
        <View style={{flex:1, flexDirection: 'row', marginTop: 15, flexWrap: 'wrap', justifyContent: 'space-between'}}>

          {/* first product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/test/airpod-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 

          {/* second product */}
          <TouchableOpacity style={{backgroundColor: '#f8ecea', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/test/headphone-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 

          {/* third product */}
          <View style={{backgroundColor: '#e7ebe4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/test/watch-2.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </View> 

          {/* fourth product */}
          <View style={{backgroundColor: '#f0f1f2', padding: 20, borderRadius: 20, marginBottom: 15,}}>
            <Image source={require("../assets/product_images/test/watch-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </View>  

          <View style={{backgroundColor: '#f0f1f2', padding: 20, borderRadius: 20, marginBottom: 15,}}>
            <Image source={require("../assets/product_images/test/watch-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </View>          

        </View>
      </ScrollView>

      {/* Custom bottom NavBar */}
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
        <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
          <AntDesign name="home" size={24} color="#ea736d" />
          <Text style={{color: "#ea736d"}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
          <AntDesign name="shoppingcart" size={24} color="#ffff" />
          <Text style={{color: "#fff"}}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
          <Ionicons name="bookmarks-outline" size={24} color="#fff" />
          <Text style={{color: "#fff"}}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={{color: "#fff"}}>Profile</Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  linearGradient: {
    borderRadius: 10,
  },
});
