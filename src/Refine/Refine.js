import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Dimensions, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import SelectDropdown from 'react-native-select-dropdown'
import Slider from '@react-native-community/slider';
const { width, height } = Dimensions.get("window")

const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const Refine = () => {
  const [selected, setSelected] = React.useState("");
  const [length, setlength] = React.useState(0);
  const [text, setText] = React.useState("Hi community! I am open to new connection 😊");
  const [selectedPurpose, setSelectedPurpose] = useState(["Cofee", "Business", "Friendship"])

  const [sliderValue, setSliderValue] = React.useState(10);

  const data = [
    { key: '1', value: 'Available | Hey Lets Us Connect' },
    { key: '2', value: 'Away | Stay Discret And Watch' },
    { key: '3', value: 'Busy | Do Not Disturb | Will Catch UP' },
    { key: '4', value: 'SOS | Emetgency | Need Assistance!' },

  ]

  const purpose = ["Cofee", "Business", "Hobbies", "Friendship", "Movie", "Dinning", "Dating", "matrimony"]

  useEffect(() => {
    setlength(text.length);
  }, [])

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.section1}>
          <Text style={styles.styleHeading} > Select Your Availability</Text>
          <View style={styles.dropDownView}>

            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              search={false}
            />
          </View>
        </View>
        <View style={styles.section2}>
          <Text style={styles.styleHeading}>Add Your Status</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(val) => {
              // setCount(count + 1)
              setText(val);
              // console.log(val.length)
              setlength(val.length)
            }}
            maxLength={250}
            value={text}
            multiline
          />
          <View style={{
            alignSelf: "flex-end"
          }}>

            <Text style={{ textAlign: 'right' }}>{length}/250</Text>
          </View>
        </View>
        <View style={styles.section3}>
          <Text style={styles.styleHeading}>Select Hyper local Distance</Text>
          <View style={styles.sliderSection}>

            <Slider
              style={styles.slider}
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#307ecc"
              maximumTrackTintColor="#000000"
              step={1}
              value={50}
            // onValueChange={(sliderValue) => setSliderValue(sliderValue)}
            />

            <View style={styles.sliderValue}>

              <Text style={{ color: "#143D59" }}>1 KM</Text>
              <Text style={{ color: "#143D59" }}>100 KM</Text>
            </View>
          </View>
        </View>

        <View style={styles.section4}>
          <Text style={styles.styleHeading}>Select Purpose</Text>
          <View style={styles.buttonContainer}>
            {purpose.map((val, index) => {
              return (
                <View >
                  <Pressable style={[styles.buttonPurpose, selectedPurpose.includes(val) ? { backgroundColor: "#143D59" } : { backgroundColor: "white" }]}
                    onPress={() => {
                      // console.log(selectedPurpose.includes(val))
                      // const shortArray = new Set(selectedPurpose);
                      // console.log(typeof(shortArray))
                      // console.log(`----------------------------`)

                      // console.log(selectedPurpose)
                      if (selectedPurpose.length == 1) {
                        // console.log(`length is 1 ${selectedPurpose}`)
                        // return
                        // console.log(selectedPurpose)
                        // selectedPurpose.splice(selectedPurpose.indexOf(val), 1)
                        // setSelectedPurpose((previousVal) => [...previousVal, val])
                      }

                      if (selectedPurpose.includes(val)) {
                        selectedPurpose.splice(selectedPurpose.indexOf(val), 1)
                        setSelectedPurpose((v) => [...v])
                      }
                      else {

                        setSelectedPurpose((previousVal) => [...previousVal, val])
                      }
                      // console.log(`updated value ${selectedPurpose}`)
                      // console.log(`----------------------------`)
                      // selectedPurpose.includes(val) ? selectedPurpose.pop(val):null

                    }}>
                    <Text style={[styles.textStyle, selectedPurpose.includes(val) ? { color: "#ffff" } : { color: "#143D59" }]}>{val}</Text>
                  </Pressable >
                </View>
              )
            })}



          </View>
          <View style={styles.saveButton}>

            <TouchableOpacity style={{
              backgroundColor: "#143D59",
              // padding: 15,
              borderRadius: 20,
              width: width * 0.5,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: 10
            }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>Save & Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView >
  )

  // #143D59
}

export default Refine

const styles = StyleSheet.create({
  styleHeading: {
    color: "#143D59",
    fontSize: 20,
    fontWeight: "500"
  },
  section1: {
    display: "flex",
    height: height * 0.15,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: "black",
  },
  dropDownView: {
    marginVertical: 10

  },
  section2: {
    // borderWidth: 1,
    // borderColor: "black",
    minHeight: height * 0.15
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 20,
    padding: 13
  },
  section3: {
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 5
  },
  slider: {

  },
  sliderSection: {
    // borderWidth: 10,
    // borderColor: "red",
    marginTop: 30
    // marginVertical:10
  },
  sliderValue: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginHorizontal: 10
  },
  section4: {
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 10
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    flexWrap: "wrap",

  },
  buttonPurpose: {
    display: "flex",
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 10

    // minHeight: 40
  },
  textStyle: {
    // color: "#ffff"
  },
  back: {
    backgroundColor: "black"
  },
  saveButton: {
    // borderWidth: 1,
    // borderColor: "red",
    alignItems: "center",
    // padding
    marginTop: 20
  }
})