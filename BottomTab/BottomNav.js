import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Explore from "../src/Explore/Explore"
import Hashtag from '../src/OtherScreens/Hashtag';
import Network from '../src/OtherScreens/Network';
import Chat from '../src/OtherScreens/Chat';
import Contacts from '../src/OtherScreens/Contacts';
// import Contact from "../src/OtherScreens/Contacts"


import inactiveExplore from "../assests/inactiveExplore.png"
import activeExplore from "../assests/activeExplore.png"
import inactiveChat from "../assests/inactiveChat.png"
import activeChat from "../assests/activeChat.png"

import inactiveNetwork from "../assests/inactiveNetwork.png"
import activeNetwork from "../assests/activeNetwork.png"

import inactiveHashtag from "../assests/inactiveHashtag.png"
import activeHashtag from "../assests/activeHashtag.png"


import inactiveContact from "../assests/inactiveContact.png"
import activeContact from "../assests/activeContact.png"

const Tab = createBottomTabNavigator();


const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Explore" component={Explore}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {

                            if (focused) {
                                return <Image source={activeExplore} style={{ height: 30, width: 30 }} />
                            }
                            return <Image source={inactiveExplore} style={{ height: 28, width: 28 }} />
                        }
                    }
                }



            />
            < Tab.Screen name="Network" component={Network}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {

                            if (focused) {
                                return <Image source={activeNetwork} style={{ height: 30, width: 30 }} />
                            }
                            return <Image source={inactiveNetwork} style={{ height: 28, width: 28 }} />
                        }
                    }
                } />
            <Tab.Screen name="Chat" component={Chat}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {

                            if (focused) {
                                return <Image source={activeChat} style={{ height: 30, width: 30 }} />
                            }
                            return <Image source={inactiveChat} style={{ height: 28, width: 28 }} />
                        }
                    }
                }
            />
            <Tab.Screen name="Contacts" component={Contacts}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {

                            if (focused) {
                                return <Image source={activeContact} style={{ height: 30, width: 30 }} />
                            }
                            return <Image source={inactiveContact} style={{ height: 28, width: 28 }} />
                        }
                    }
                }
            />
            <Tab.Screen name="Hashtag" component={Hashtag}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {

                            if (focused) {
                                return <Image source={activeHashtag} style={{ height: 30, width: 30 }} />
                            }
                            return <Image source={inactiveHashtag} style={{ height: 28, width: 28 }} />
                        }
                    }
                }
            />

        </Tab.Navigator>
    )
}

export default BottomNav