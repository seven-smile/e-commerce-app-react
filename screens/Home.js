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

          <ImageBackground source={require("../assets/product_images/categories/apple_img.jpg")} style={{flex: 1, marginRight: 20,}} imageStyle={{borderRadius: 10, borderColor: '#ea736d', borderWidth: 2, height: 70}}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}  style={styles.linearGradient}>
              <Text style={{margin: 15, fontWeight: 'bold', color: "white"}}>Apple</Text>
            </LinearGradient>
          </ImageBackground>

          <ImageBackground source={require("../assets/product_images/categories/samsung_img.jpg")} style={{flex: 1, marginRight: 20}} imageStyle={{borderRadius: 10, height: 70}}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}  style={styles.linearGradient}>
              <Text style={{margin: 15, fontWeight: 'bold', color: "white"}}>Samsung</Text>
            </LinearGradient>
          </ImageBackground>

          <ImageBackground source={require("../assets/product_images/categories/huawei_img.jpg")} style={{flex: 1, marginRight: 20}} imageStyle={{borderRadius: 10, height: 70}}>
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

          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20,alignItems: "center", marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {product_name:"MacBook Pro", price: "$210.00", image: require("../assets/product_images/apple/macbook/pro.png")})}>
            <Image source={require("../assets/product_images/apple/macbook/pro.png")} style={{width: 130, height: 90}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>MacBook Pro </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$210.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 2nd product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 20}}  onPress={() => navigation.navigate("Product", {product_name:"Apple Airpod", price: "$60.00", image: require("../assets/product_images/apple/airpods/blue.png")})}>
            <Image source={require("../assets/product_images/apple/airpods/blue.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$60.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.2
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 3rd product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 20}}  onPress={() => navigation.navigate("Product", {name: "Wired Airpods", price: "$70.00", image: require("../assets/product_images/apple/airpods/wired.png")})}>
            <Image source={require("../assets/product_images/apple/airpods/wired.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Wired Airpods</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$70.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 

          {/* 4th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Apple MacBook", price: "$220.00", image: require("../assets/product_images/apple/macbook/m1.png")})}>
            <Image source={require("../assets/product_images/apple/macbook/m1.png")} style={{width: 130, height: 90}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple MacBook</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$220.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 5th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 20}}  onPress={() => navigation.navigate("Product", {name: "Series 2", price: "$90.00", image: require("../assets/product_images/apple/watches/watch-2.png")})}>
            <Image source={require("../assets/product_images/apple/watches/watch-2.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Series 2</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$90.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 

          {/* 6th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 20}}  onPress={() => navigation.navigate("Product", {name: "Apple iPad", price: "$100.00", image: require("../assets/product_images/apple/ipad/pad.png")})}>
            <Image source={require("../assets/product_images/apple/ipad/pad.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple iPad</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$100.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 7th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 20}}  onPress={() => navigation.navigate("Product", {name: "iPhone 7 Black", price: "$110.00", image: require("../assets/product_images/apple/iphones/7/black.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/7/black.png")} style={{width: 120, height: 100}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 7 Black</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$110.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 8th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15}}  onPress={() => navigation.navigate("Product", {name:"iPhone 8 Gold", price: "$120.00", image: require("../assets/product_images/apple/iphones/8/gold.jpg")})}>
            <Image source={require("../assets/product_images/apple/iphones/8/gold.jpg")} style={{width: 120, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 8 Gold</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$120.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 9th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,}}  onPress={() => navigation.navigate("Product", {name: "iPhone 12 Pro", price: "$1470.00", image: require("../assets/product_images/apple/iphones/12 pro/graph.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/12 pro/graph.png")} style={{width: 130, height: 180}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 12 Pro</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$1470.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 10th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Apple Airpod pro", price: "$50.00", image: require("../assets/product_images/test/airpod-1.png")})}>
            <Image source={require("../assets/product_images/test/airpod-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Apple Airpod pro</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$50.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.1
                </Text>
              </View>
              
            </View>
          </TouchableOpacity> 
          {/* 11th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight:5}}  onPress={() => navigation.navigate("Product", {name: "iPhone XR", price: "$200.00", image: require("../assets/product_images/apple/iphones/XR/yellow.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/XR/yellow.png")} style={{width: 120, height: 120}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone XR</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$200.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 12th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Series 1", price: "$80.00", image: require("../assets/product_images/apple/watches/watch-1.png")})}>
            <Image source={require("../assets/product_images/apple/watches/watch-1.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Series 1</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$80.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.4
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "iPhone 12 red", price: "$150.00", image: require("../assets/product_images/apple/iphones/12/red.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/12/red.png")} style={{width: 120, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 12 red</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$150.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "iPhone 12 Purple", price: "$160.00", image: require("../assets/product_images/apple/iphones/12 mini/purple.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/12 mini/purple.png")} style={{width: 120, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 12 Purple</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$160.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 13th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "EarBuds Live", price: "$230.00", image: require("../assets/product_images/samsung/ear buds/live/live.png")})}>
            <Image source={require("../assets/product_images/samsung/ear buds/live/live.png")} style={{width: 120, height: 180}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>EarBuds Live</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$230.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product",{name: "Galaxy A21s",price: "$260.00", image: require("../assets/product_images/samsung/galaxy_A21s/blue.png")})}>
            <Image source={require("../assets/product_images/samsung/galaxy_A21s/blue.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy A21s</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$260.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, paddingTop: 100, borderRadius: 20, marginBottom: 15, marginRight: 10, alignItems: "center"}}  onPress={() => navigation.navigate("Product", {name: "EarBuds Plus", price: "$240.00", image: require("../assets/product_images/samsung/ear buds/plus/blue.png")})}>
            <Image source={require("../assets/product_images/samsung/ear buds/plus/blue.png")} style={{width: 120, height: 80}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>EarBuds Plus</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$240.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Galaxy S20", price: "$290.00", image: require("../assets/product_images/samsung/galaxy_S20/orange.png")})}>
            <Image source={require("../assets/product_images/samsung/galaxy_S20/orange.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy S20</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$290.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Galaxy Note 20", price: "$280.00", image: require("../assets/product_images/samsung/galaxy_Note 20/bronze.png")})}>
            <Image source={require("../assets/product_images/samsung/galaxy_Note 20/bronze.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy Note 20</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$280.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Galaxy Z Fold", price: "$310.00", image: require("../assets/product_images/samsung/Z_Flip/green.png")})}>
            <Image source={require("../assets/product_images/samsung/Z_Flip/green.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy Z Fold</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$310.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,marginRight:10}}  onPress={() => navigation.navigate("Product", {name: "iPhone 11 Green", price: "$130.00", image: require("../assets/product_images/apple/iphones/11/green.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/11/green.png")} style={{width: 110, height: 160}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 11 Green</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$130.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product",{name: "Sumsumg QLED", price: "$330.00", image: require("../assets/product_images/samsung/tv/qled.png")})}>
            <Image source={require("../assets/product_images/samsung/tv/qled.png")} style={{width: 130, height: 90}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Sumsumg QLED</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$330.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Galaxy SATA-III", price: "$340.00", image: require("../assets/product_images/samsung/SSD/sataIII.png")})}>
            <Image source={require("../assets/product_images/samsung/SSD/sataIII.png")} style={{width: 130, height: 90}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy SATA-III </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$340.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product",{name: "Galaxy S21", proice: "$300.00", image: require("../assets/product_images/samsung/galaxy_S21/violet.png")})}>
            <Image source={require("../assets/product_images/samsung/galaxy_S21/violet.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy S21</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$300.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Galaxy A51", price: "$270.00", image: require("../assets/product_images/samsung/galaxy_A51/black.png")})}>
            <Image source={require("../assets/product_images/samsung/galaxy_A51/black.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy A51</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$270.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei 4i freeBuds", price: "$360.00", image: require("../assets/product_images/huawei/airpods/free buds 4i/black.png")})}>
            <Image source={require("../assets/product_images/huawei/airpods/free buds 4i/black.png")} style={{width: 140, height: 160}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei 4i freeBuds</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$360.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei P40 Lite", price: "$400.00", image: require("../assets/product_images/huawei/Phones/P40 lite/black.png")})}>
            <Image source={require("../assets/product_images/huawei/Phones/P40 lite/black.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei P40 Lite</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$400.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product",{name: "iPhone 11 Pro", price: "$140.00", image: require("../assets/product_images/apple/iphones/11 pro/gray.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/11 pro/gray.png")} style={{width: 110, height: 160}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone 11 Pro</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$140.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei Y7", price: "$410.00", image: require("../assets/product_images/huawei/Phones/Y7/blue.png")})}>
            <Image source={require("../assets/product_images/huawei/Phones/Y7/blue.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei Y7</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$410.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei P30", price: "$390.00", image: require("../assets/product_images/huawei/Phones/P30/black.png")})}>
            <Image source={require("../assets/product_images/huawei/Phones/P30/black.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei P30</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$390.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei Freepod 3", price: "$370.00", image: require("../assets/product_images/huawei/airpods/freepods 3/cover.png")})}>
            <Image source={require("../assets/product_images/huawei/airpods/freepods 3/cover.png")} style={{width: 130, height: 90}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei Freepod 3</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$370.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Freepod Pro", price: "$380.00", image: require("../assets/product_images/huawei/airpods/freepods pro/grey.png")})}>
            <Image source={require("../assets/product_images/huawei/airpods/freepods pro/grey.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Freepod Pro</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$380.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei NOVA 5T", price: "$420.00", image: require("../assets/product_images/huawei/Phones/nova/blue.png")})}>
            <Image source={require("../assets/product_images/huawei/Phones/nova/blue.png")} style={{width: 130, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei NOVA 5T</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$420.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product",{name: "Huawei Sport watch", price: "$460.00", image: require("../assets/product_images/huawei/watches/sport watches/white.png")})}>
            <Image source={require("../assets/product_images/huawei/watches/sport watches/white.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei Sport watch</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$460.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 20, alignItems: "center"}}  onPress={() => navigation.navigate("Product", {name: "iPhone XS", price: "$190.00", image: require("../assets/product_images/apple/iphones/XS/gray.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/XS/gray.png")} style={{width: 100, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone XS</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$190.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei Sport 2", price: "$470.00", image: require("../assets/product_images/huawei/watches/sport watches/black.png")})}>
            <Image source={require("../assets/product_images/huawei/watches/sport watches/black.png")} style={{width: 130, height: 140}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei Sport 2</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$470.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product",{name: "mediaPAd M5", price: "$430.00", image: require("../assets/product_images/huawei/tablets/front.png")})}>
            <Image source={require("../assets/product_images/huawei/tablets/front.png")} style={{width: 130, height: 90}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>mediaPAd M5</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$430.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Sumsumg QLED", price: "$330.00", image: require("../assets/product_images/samsung/tv/qled.png")})}>
            <Image source={require("../assets/product_images/samsung/tv/qled.png")} style={{width: 130, height: 90}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Sumsumg QLED</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$330.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei GT2 Pro", price: "$440.00", image: require("../assets/product_images/huawei/watches/GT 2 PRO/black.png")})}>
            <Image source={require("../assets/product_images/huawei/watches/GT 2 PRO/black.png")} style={{width: 130, height: 150}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei GT2 Pro</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$440.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15, marginRight: 10}}  onPress={() => navigation.navigate("Product", {name: "Huawei GT2 Pro", price : "$440.00", image: require("../assets/product_images/huawei/watches/fit bluetooth/pink.png")})}>
            <Image source={require("../assets/product_images/huawei/watches/fit bluetooth/pink.png")} style={{width: 130, height: 150}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Huawei Fit</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$450.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          {/* 14th product */}
          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, marginBottom: 15,marginRight: 10, alignItems: "center"}}  onPress={() => navigation.navigate("Product", {name: "iPhone X", price: "$180.00", image: require("../assets/product_images/apple/iphones/X/x.png")})}>
            <Image source={require("../assets/product_images/apple/iphones/X/x.png")} style={{width: 80, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>iPhone X</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$180.00</Text>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15.5}}>
                  <AntDesign name="star" size={15} color="orange"/> 4.3
                </Text>
              </View>
              
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: '#eceef4', padding: 20, borderRadius: 20, alignItems: "center", marginBottom: 15, marginRight: 30}}  onPress={() => navigation.navigate("Product",{name: "Galaxy A10e", price: "$250.00",  image: require("../assets/product_images/samsung/galaxy_A10e/front.png")})}>
            <Image source={require("../assets/product_images/samsung/galaxy_A10e/front.png")} style={{width: 80, height: 170}}/>
            <Text style={{color: '#7e7f83', fontWeight: 'bold'}}>Galaxy A10e</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', fontSize: 15.5}}>$250.00</Text>

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

        <TouchableOpacity style={{alignItems: 'center', flex: 1}} onPress={() => navigation.navigate("Cart")}>
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
