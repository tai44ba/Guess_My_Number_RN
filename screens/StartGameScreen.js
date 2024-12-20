import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import InstructorText from "../components/InstructorText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Colors } from "../utils/color";

function StartGameScreen({ onPickedNum }) {
  const [enterNum, setEnterNum] = useState("");
  const { width, height } = useWindowDimensions();

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
        { text: "Okey", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    onPickedNum(parsedToNum);
  };

  const dinamicMarginTop = height < 700 ? 25 : 100;
  
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior={"position"}>
        <View style={[styles.rootContainer, { marginTop: dinamicMarginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructorText>Enter the Number</InstructorText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
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
