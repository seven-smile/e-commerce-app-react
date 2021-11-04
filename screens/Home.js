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

          {/* 1st iphone product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/test/airpod-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod pro</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 

          {/* 2nd product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/airpods/blue.png")} style={{width: 130, height: 140}}/>
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

          {/* 3rd product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/airpods/wired.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Wired Airpods</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 

          {/* 4th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/watches/watch-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Series 1</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 5th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/watches/watch-2.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Series 2</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 

          {/* 6th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/ipad/pad.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple iPad </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 7th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/7/black.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 7 Black </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 8th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/8/gold.jpg")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 8 Gold  </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 9th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/11/green.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 11 Green</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 10th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/11 pro/gray.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 11 Pro Gray </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 11th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/12/red.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 12 red </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 12th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/12 mini/purple.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 12 Purple </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 13th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/12 pro/graph.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 12 Pro </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 14th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/X/x.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone X </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 15th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/XS/gray.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone XS </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 16th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/iphones/XR/yellow.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone XR  </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 17th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/macbook/pro.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>MacBook Pro </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 17th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/apple/macbook/m1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple MacBook</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 1st samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/ear buds/live/live.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>EarBuds Live </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 2nd samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/ear buds/plus/blue.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>EarBuds Plus </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 3rd samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/galaxy_A10e/front.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy A10e </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 4th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/galaxy_A21s/blue.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy A21s </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 5th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/galaxy_A51/black.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy A51</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 6th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/galaxy_Note 20/bronze.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy Note 20 </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 7th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/galaxy_S20/orange.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy S20 </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 8th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/galaxy_S21/violet.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy S21 </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 9th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/Z_Flip/green.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy Z Fold </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 10th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/SSD/ssd.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>970_V-NAND</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 9th samsung product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product")}>
            <Image source={require("../assets/product_images/samsung/tv/qled.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy Z Fold </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

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
