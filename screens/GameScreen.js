import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Card from "../components/Card";
import InstructorText from "../components/InstructorText";
import NumberContaner from "../components/NumberContaner";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessRoundsItem from "../components/GuessRoundsItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNum = 1;
let maxNum = 100;

const GameScreen = ({ userNum, gameOverHandler }) => {
  const initGuess = generateRandomBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (userNum === currentGuess) {
      gameOverHandler(guessRounds.length);
    }
  }, [userNum, currentGuess, gameOverHandler]);

  useEffect(() => {
    minNum = 1;
    maxNum = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNum) ||
      (direction === "greater" && currentGuess > userNum)
    ) {
      Alert.alert("Don't lie", "You know this is wrong,,,", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxNum = currentGuess;
    } else {
      minNum = currentGuess + 1;
    }
    const newRumNum = generateRandomBetween(minNum, maxNum, currentGuess);
    setCurrentGuess(newRumNum);
    setGuessRounds((rounds) => [newRumNum, ...rounds]);
  };

  const GRLlength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContaner>{currentGuess}</NumberContaner>
      <Card>
        <InstructorText style={styles.instructionText}>
          High or Low ?
        </InstructorText>
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="arrow-down" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="arrow-up" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.GRContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessRoundsItem
                guess={currentGuess}
                roundsNum={GRLlength - itemData.index}
              >
                {itemData.item}
              </GuessRoundsItem>
            );
          }}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 50,
    alignItems:'center'
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 24,
  },
  GRContainer:{
    flex:1,
    padding:8
  }
});
