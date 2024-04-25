import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Weather = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Search For City</Text>

      <View style={styles.SearchBar}>{/* search bar */}</View>

      {/* Top Info Sec  */}
      <View style={styles.TopInfo}>
        <View style={styles.TopInfo_Sec1}>{/* sec1 */}</View>
        <View style={styles.TopInfo_Sec1}>{/* sec 2 */}</View>
      </View>

      <Text style={styles.Msg}>Have Chai & Pakoda!</Text>

      {/* Details Info Sec */}
      <View style={styles.detailInfo}>
        <View>
          <View></View>
          <View></View>
        </View>

        <View>
          <View></View>
        </View>

        <View>
          <View></View>
          <View></View>
        </View>
      </View>

      {/* Navrbar */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
    // color: '#EFEFEF'
    gap: 30
  },
  Title: {
    color: '#EFEFEF',
    fontSize: 25,
    fontWeight: "700",
    // fontFamily: 'lucida grande'
  },
  SearchBar: {
    borderWidth: 1,
    // borderColor: "#EFEFEF",
    width: 350,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#191919"
  },
  TopInfo: {
    flexDirection: "row",
    gap: 20
  },
  TopInfo_Sec1: {
    borderWidth: 1,
    // borderColor: "#EFEFEF",
    width: 150,
    height: 155,
    borderRadius: 10,
    backgroundColor: "#191919"
  },
  detailInfo: {
    borderWidth: 1,
    // borderColor: "#EFEFEF",
    width: 340,
    height: 230,
    borderRadius: 10,
    backgroundColor: "#191919"
  },
  Msg: {
    color: '#EFEFEF',
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "italic"
  }
});

export default Weather;
