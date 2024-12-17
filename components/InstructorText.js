import { Text, StyleSheet } from "react-native";
import { Colors } from "../utils/color";

const InstructorText = ({ children,style }) => {
  return <Text style={[styles.instructorText,style]}>{children}</Text>;
};

export default InstructorText;

const styles = StyleSheet.create({
  instructorText: {
    color: Colors.accent500,
    fontSize: 22,
    fontFamily:'open-sans'
  },
});
