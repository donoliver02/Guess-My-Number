import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../Components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../Components/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Card from "../Components/Card";
import InstructionText from "../Components/InstructionText";
import GuessLogItem from "../Components/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ UserNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, UserNumber);
  const [currentGuess, setcurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === UserNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, UserNumber, onGameOver]);

  function nextGuesshandler(direction) {
    if (
      (direction === "Lower" && currentGuess < UserNumber) ||
      (direction === "greater" && currentGuess > UserNumber)
    ) {
      Alert.alert("Don't Lie!", "You Know that this is Wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "Lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(1, 100, currentGuess);
    setcurrentGuess(newRndNumber);
    setGuessRounds((prevGuess) => [newRndNumber, ...prevGuess]);
  }

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);
  const guessRoundsLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={Styles.instructionText}>
          Higher or Lower?{" "}
        </InstructionText>
        <View style={Styles.buttoncontainer}>
          <View style={Styles.buttoninner}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, "Lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={Styles.buttoninner}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={Styles.WideView}>
          <View style={Styles.wideAreaButton}>
            <View style={Styles.buttoncontainer}>
              <View style={Styles.buttoninner}>
                <PrimaryButton onPress={nextGuesshandler.bind(this, "Lower")}>
                  -
                </PrimaryButton>
              </View>
              <NumberContainer>{currentGuess}</NumberContainer>
              <View style={Styles.buttoninner}>
                <PrimaryButton onPress={nextGuesshandler.bind(this, "greater")}>
                  +
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={Styles.screen}>
      <Title>Opposite's Guess</Title>
      {content}
      <View style={Styles.listcontainer}>
        {/* {guessRounds.map(guessRound =><Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemdata) => (
            <GuessLogItem
              roundNumber={guessRoundsLength - itemdata.index}
              guess={itemdata.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 15,
  },

  titletext: {
    color: "white",
    fontSize: 25,
    textAlign: "center",

    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 2,
    padding: 8,
  },

  buttoncontainer: {
    flexDirection: "row",
  },
  buttoninner: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 15,
  },
  WideView: {
    marginTop: 35,
  },
  listcontainer: {
    flex: 1,
    padding: 16,
  },
  wideAreaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
