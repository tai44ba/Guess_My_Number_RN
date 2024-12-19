import { View, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../utils/color";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceHeight < 800 ? 20 : 40,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 12,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
});
