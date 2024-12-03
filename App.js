import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import { useState } from "react";
import GameOverScreen from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [UserNumber, setUserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(true);
  const [guessrounds, setguessrounds] = useState(0);

  function pickedNumberHandler(pickedNuber) {
    setUserNumber(pickedNuber);
    setgameIsOver(false);
  }

  function startNewgameHandler() {
    setUserNumber(null);
    setguessrounds(0);
  }

  function gameOverHandler(numberOfRounds) {
    setgameIsOver(true);
    setguessrounds(numberOfRounds);
  }
  let screen = <StartGameScreen onpickedNumber={pickedNumberHandler} />;

  if (UserNumber) {
    screen = (
      <GameScreen UserNumber={UserNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && UserNumber) {
    screen = (
      <GameOverScreen
        userNumber={UserNumber}
        roundsNumber={guessrounds}
        onStartNewGame={startNewgameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#440424", "#ddb52f", "#440424"]}
        style={Styles.background}
      >
        <ImageBackground
          source={require("./assets/DiceImage.jpg")}
          resizeMode="cover"
          style={Styles.background}
          imageStyle={Styles.image}
        >
          <SafeAreaView style={Styles.background}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const Styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.2,
  },
});
