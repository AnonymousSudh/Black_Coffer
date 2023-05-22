import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("window")
import Card from '../../component/card/Card'
import TopNav from '../../component/topNav/TopNav'
import Header from '../../component/header/Header'



const App = () => {

  return (
    <View>
      <Header />
      <TopNav />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  header: {
    // borderColor: "red",
    // borderWidth: 1,
    minHeight: height * 0.09,
    maxHeight: height * 0.09,
    backgroundColor: "#0E2E43",
    display: "flex",
    // // justifyContent
    flexDirection: "row",
    justifyContent: "space-between",
    Color: "#FFFF"
    // fontColor:"white"
  },
  section1: {
    // borderColor: "red",
    // borderWidth: 1,
    display: "flex",
    // justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
    // marginLeft:10,
    minWidth: "80%"
  },
  menuTouch: {
    // borderColor: "red",
    // borderWidth: 1,
    marginHorizontal: 10
  },
  userInfo: {
    // borderColor: "red",
    // borderWidth: 1,
    marginLeft: 10,
    display: "flex",
    height: "90%",
    justifyContent: "space-evenly"
  },
  location: {
    // borderColor: "red",
    // borderWidth: 1,
    // marginTop: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"

  },
  section2: {
    // borderColor: "red",
    // borderWidth: 1,
    minWidth: "20%",
    marginRight: 10,
    display: "flex",
    // flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "10%"
  },
  text: {
    color: "white"
  },


})