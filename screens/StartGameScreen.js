import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#894c4c",
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
    borderBottomColor: "#e8f6dc",
    borderBottomWidth: 2,
    fontSize: 32,
    color: "#e8f6dc",
    marginVertical: 8,
    fontWeight: "bold",
  },
});

export default StartGameScreen;
