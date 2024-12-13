import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import { Colors } from "./utils/color";



export default function App() {
  const [userNum, setUserNum] = useState(null)
  const pickedNumHandler = (pickedNum) => {
    setUserNum(pickedNum)
  }

  let screen = <StartGameScreen onPickedNum={pickedNumHandler} />
  if (userNum) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={[Colors.primary600, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  bgImage:{
    opacity:0.15
  }
});
