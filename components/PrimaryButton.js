import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../utils/color";

function PrimaryButton({ children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 25,
    margin: 4,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary700,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75
  },
});
