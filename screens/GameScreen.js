import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NumberContaner from "../components/NumberContaner";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNum
let maxNum

const GameScreen = ({userNum}) => {
    const initGuess = generateRandomBetween(1,100,userNum)
    const [currentGuess, setCurrentGuess] = useState(initGuess)
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContaner>{currentGuess}</NumberContaner>
      <View>
        <Text>High or Low ?</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
});
