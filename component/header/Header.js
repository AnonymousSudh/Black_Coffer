import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("window")
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    const drawer = () => {
        console.log("hello");
        // navigation.navigate("Briecase")
        console.log("hello");
    }
    return (
        <View style={styles.header}>
            <View style={styles.section1}>
                <TouchableOpacity
                    style={styles.menuTouch}
                >
                    <Image
                        style={{ height: 60, width: 60 }}
                        source={require("../../assests/menu.png")}
                    />
                </TouchableOpacity>

                <View style={styles.userInfo}>
                    <Text style={styles.text}>Howdy Sudhanshu Kumar !!</Text>

                    <View style={styles.location}>
                        <Image style={{ width: 15, height: 15, marginRight: 4 }} source={require("../../assests/location.png")} />
                        <Text style={styles.text}>mughalsarai</Text>
                    </View>

                </View>

            </View>
            <View style={styles.section2}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate("Refine")}
                >
                    <Image
                        style={{ height: 35, width: 35 }}
                        source={require("../../assests/checklist.png")}
                    />
                </TouchableOpacity>
                <Text style={{ color: "white" }}>Refine</Text>
            </View>
        </View>
    )
}

export default Header

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