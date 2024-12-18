import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Colors } from "./utils/color";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";


export default function App() {
  const [userNum, setUserNum] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [rounds, setRounds] = useState(0)

  const pickedNumHandler = (pickedNum) => {
    setUserNum(pickedNum)
    setGameOver(false)
  }
  const gameOverHandler = (playedNum) => { 
    setGameOver(true)
    setRounds(playedNum)
  }
  const gamaStartAgain = () => {
    setUserNum(null)
    setRounds(0)
  }

  let screen = <StartGameScreen onPickedNum={pickedNumHandler} />
  if (userNum) {
    screen = <GameScreen userNum={userNum} gameOverHandler={gameOverHandler} />
  }
  if (gameOver && userNum) {
    screen = <GameOverScreen userNum={userNum} rounds={rounds} onStartAgain={gamaStartAgain}/>
  }
  const [fontsLoaded] =  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
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
