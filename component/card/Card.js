import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
// import {Slider} from '@miblanchard/react-native-slider';
// const profileImage = require("../card/")
// import imagee from "../component/assests/AM.png"
// import image from "../card/component/assests/AM.png"
import AM from "./AM.png"



const { width, height } = Dimensions.get("window")

const userData = [
    {
        name: "Ayiush Mishra",
        city: "Vadodara",
        professtion: "student",
        distance: 3.3,
        hobby: ["coffe", "Business", "hobbies", "FrinedShip", "coffe", "Business", "hobbies", "FrinedShip"],
        message: "Hi community! I am open to new connection 😊 ",
        // image:
    },
    {
        name: "Ayiush Mishra",
        city: "Vadodara",
        professtion: "student",
        distance: 3.3,
        hobby: ["coffe", "Business", "hobbies", "FrinedShip"],
        message: "Hi community! I am open to new connection"
    },
    {
        name: "Ayiush Mishra",
        city: "Vadodara",
        professtion: "student",
        distance: 9.3,
        hobby: ["coffe", "Business", "hobbies", "FrinedShip"],
        message: "Hi community! I am open to new connection"
    }
]


const Card = () => {
    return (
        <ScrollView >
            {userData.map((val) => {
                return (
                    <View style={styles.cardView}>
                        <View style={styles.card}>

                            <View style={styles.section1}>
                                <View style={styles.invite} >
                                    <Text style={styles.hobbyText}>+ INVITE</Text>
                                </View>
                                <View style={styles.userInfo}>
                                    <Text style={styles.hobbyText}>{val.name}</Text>
                                    <View style={styles.userAddress}>
                                        <Text>{val.city}</Text>
                                        <Text> | </Text>
                                        <Text>{val.professtion}</Text>
                                    </View>
                                    <Text style={styles.hobbyText}>Within {val.distance} KM</Text>
                                    <Slider
                                        style={{ width: 200, height: 40 }}
                                        onValueChange={(v) => {
                                            console.log(v)
                                        }}
                                        minimumValue={0}
                                        maximumValue={15}
                                        value={val.distance}
                                        minimumTrackTintColor="#0E2E43"
                                        maximumTrackTintColor="#34024"
                                    />

                                    {/* <Slider
                                        value={4}
                                        minimumValue={2}
                                    // maximumValue={15}

                                    /> */}

                                </View>

                            </View>
                            <View style={styles.section3}>
                                <View style={styles.hobby}>

                                    {val.hobby.map((l, index) => {
                                        return (
                                            index == 0 ? <Text style={styles.hobbyText}>{l}</Text> : <Text style={styles.hobbyText}> | {l}</Text>
                                        )
                                    })}
                                </View>
                                <View style={styles.message}>
                                    <Text style={{fontSize:16}}>{val.message}</Text>
                                </View>

                            </View>
                            <View style={styles.nameCard}>
                                <Image source={AM} style={{ width: "100%", height: "100%", borderRadius: 20 }} />
                            </View>
                        </View>
                    </View>
                )

            })}
        </ScrollView>

    )
}

export default Card

const styles = StyleSheet.create({
    cardView: {
        // borderWidth: 1,
        // borderColor: "black",
        display: "flex",

        alignItems: "flex-end",
        marginHorizontal: 11,
        marginBottom: 20

    },
    card: {
        borderWidth: 1,
        borderColor: "black",
        minWidth: "90%",
        maxWidth: "90%",
        minHeight: height * 0.3,
        borderRadius: 20,
        position: "relative"
    },
    nameCard: {
        // borderWidth: 1,
        // borderColor: "black",
        position: "absolute",
        minHeight: height * 0.122,
        minWidth: width * 0.22,
        marginTop: 30,
        // marginRight:10,
        marginLeft: -30
    },
    section1: {
        // borderWidth: 1,
        // borderColor: "black",
        display: "flex",
        // flexDirection:'/'
        minHeight: (height * 0.3) / 2,
        // maxHeight:(height * 0.3)/2,
        alignItems: "flex-end"
    },
    invite: {
        // borderWidth: 1,
        // borderColor: "black",
        marginRight: 30,
        // marginTop:10
        // marginHorizontal:10
        marginVertical: 10

    },
    userInfo: {
        // borderWidth: 10,
        // borderColor: "black",
        // minHeight: "40%",
        minWidth: "80%"

    },
    userAddress: {
        display: "flex",
        flexDirection: "row"
    },
    section3: {
        // borderWidth: 1,
        // borderColor: "black",
        minHeight: (height * 0.3) / 2,
        display: "flex",
        // justifyContent
        // alignItems:""
        marginHorizontal: 20,
        justifyContent: "space-evenly"
        // alignSelf:"baseline",        
        // overflow:"scroll"
    },
    hobby: {
        // borderWidth: 1,
        // borderColor: "black",
        display: "flex",
        flexDirection: "row",
        // maxWidth: "80%",
        flexWrap: "wrap",
    },
    message: {
        // borderWidth: 1,
        // borderColor: "black",
        // minHeight:50
    },
    TextColour: {
        colour: "#143D59"
    },
    hobbyText: {
        color: "#143D59",
        fontSize:16,
        fontWeight:"600",
        // fontWeight
    }

})