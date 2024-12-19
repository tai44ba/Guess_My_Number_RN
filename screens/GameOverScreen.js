import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Colors } from "../utils/color";

const GameOverScreen = ({userNum,rounds,onStartAgain}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/image/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.sumText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNum}</Text>
      </Text>
      <PrimaryButton onPress={onStartAgain}>Start next round</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: deviceHeight < 800 ? 150: 300,
    height: deviceHeight < 800 ? 150: 300,
    borderRadius: deviceHeight < 800 ? 75: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumText: {
    fontFamily: "open-sans",
    fontSize:24,
    textAlign:'center',
    marginBottom:24
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
  },
});
