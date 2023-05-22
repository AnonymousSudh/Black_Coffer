import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("window")
import Card from "../card/Card"
import inactiveBriefcase from "../../assests/inactiveBriefcase.png"
import activeBriefcase from "../../assests/activeBriefcase.png"
import activePeople from "../../assests/activePeople.png"
import inactivePeople from "../../assests/inactivePeople.png"
import inactiveStore from "../../assests/inactiveStore.png"
import activeStore from "../../assests/activeStore.png"


const TopNav = () => {
    const navigation = useNavigation({ navigation });
    const [value, setValue] = useState(0);
    const people = () => {
        return (
            <Card />
        )
    }
    const briefcase = () => {
        return (
            <Text>briefcase</Text>
        )
    }
    const store = () => {
        return (
            <Text>store</Text>
        )
    }
    // useEffect(() => {
    //     console.log("");
    // }, [])
    return (
        <View>

            <View style={styles.section1}>
                <TouchableOpacity
                    onPress={() => setValue(0)}
                    style={[styles.button1, value == 0 ? styles.bottomWidth : null]}
                >
                    <Image source={value == 0 ? activePeople : inactivePeople} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setValue(1)}
                    style={[styles.button1, value == 1 ? styles.bottomWidth : null]}
                >
                    <Image source={value == 1 ? activeBriefcase : inactiveBriefcase} style={styles.icon} />
                </TouchableOpacity>


                <TouchableOpacity
                    style={[styles.button1, value == 2 ? styles.bottomWidth : null]}
                    onPress={() => {
                        setValue(2)

                    }
                    }
                >
                    <Image source={value == 2 ? activeStore : inactiveStore} style={styles.icon} />
                </TouchableOpacity>


            </View>

            <View style={styles.section2}>
                {value == 0 ? people() : value == 1 ? briefcase() : store()}
            </View>
        </View>

    )
}

export default TopNav

const styles = StyleSheet.create({
    section1: {
        // minWidth: width * 0.3,
        minHeight: height * 0.065,
        // maxwidth: width * 0.1,
        // borderColor: "red",
        // borderWidth: 10,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#143D59",
    },
    button1: {
        // borderColor: "red",
        // borderWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width / 3
    },
    icon: {
        display: "flex",
        alignItems: "center",
        height: 30,
        width: 30

    },
    bottomWidth: {

        borderBottomWidth: 2,
        borderBottomColor: '#ffff',

    },

    section2: {
        marginTop: 10,
        height: height * 0.73,
        // marginVertical:30
        // paddingVertical:30
    }
})