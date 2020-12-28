import React from "react";
import {View, Text, TextInput, Button, StyleSheet, Modal} from "react-native";

const Input = (props) => {
    return (
    <Modal visible={props.visible}>
      <View style={styles.div}>
        <TextInput style={styles.input} placeholder="Type something here" onChangeText={props.functionInput} value={props.value}/>
        <View style={styles.buttonDiv}>
        <View style={styles.btn}>
        <Button title="Enter" onPress={props.functionSubmit}/>
        </View>
        <View style={styles.btn}>
        <Button color="black" title="Cancel" onPress={props.functionCancel}/>
        </View>
        </View>
      </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    div: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // marginVertical:20,
      },
      input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
      },
      btn: {
        width: "40%",
        padding:0,
      },
      buttonDiv: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "50%",
      }
});
export default Input;