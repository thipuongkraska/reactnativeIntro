import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const ShowInput = (props) => {
   return (
        <TouchableOpacity onPress={props.onRemove.bind(this, props.id)} activeOpacity={0.5}>
        <View style={styles.item} id={props.id}><Text>{props.value}</Text></View>
        </TouchableOpacity>
   );
}

const styles= StyleSheet.create({
    item: {
        padding: 10,
        marginVertical:5,
        marginHorizontal: 30,
        backgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 2,
        borderRadius:3,
      }
});

export default ShowInput;
