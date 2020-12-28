import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import Input from "./components/Input";
import ShowInput from "./components/ShowInput";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [textInput, setTextInput] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const handlerChangeInput = (event) => {
    setInputValue(event);
  }
  const handlerSubmit = () => {
    setTextInput(currentText => [...currentText, {id: Math.random().toString(), value: inputValue}]);
    setVisibility(false);
    setInputValue("");
  }
  const handlerRemove = (id) => {
    setTextInput(currentText => {
      return currentText.filter((goal) => goal.id !== id)
    });
  }
  const visibleHandler = () => {
    setVisibility(true);
  }
  const handlerCancel = () => {
    setVisibility(false);
  }
  return (
    <View style={styles.container}>
      <Input 
      visible={visibility} 
      functionInput={handlerChangeInput} 
      functionSubmit={handlerSubmit}
      functionCancel={handlerCancel}
      value={inputValue} />
      <Button title="Add" onPress={visibleHandler}/>
      <FlatList 
      data={textInput}
      renderItem={
        i => 
      <ShowInput id={i.item.id} onRemove={handlerRemove} value={i.item.value}/>
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
