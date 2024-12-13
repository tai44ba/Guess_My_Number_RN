import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../utils/color";

function StartGameScreen({onPickedNum}) {
  const [enterNum, setEnterNum] = useState("");
  const handleInput = (Input) => {
    setEnterNum(Input);
  };
  const resetInput = () => {
    setEnterNum("");
  };
  const confirmInput = () => {
    const parsedToNum = parseInt(enterNum);
    if (isNaN(parsedToNum) || parsedToNum <= 0 || parsedToNum > 99) {
      Alert.alert("Invaild Number", "The number has to be between 1 and 99", [
        {text:'Okey',style:'destructive',onPress:resetInput},
      ]);
      return;
    }
    onPickedNum(parsedToNum)
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleInput}
        value={enterNum}
      />
      <View style={styles.BsContainer}>
        <View style={styles.BContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.BContainer}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor:Colors.primary800,
    elevation: 12,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
  input: {
    height: 55,
    width: 70,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    fontSize: 32,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  BsContainer: {
    flexDirection: "row",
  },
  BContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
