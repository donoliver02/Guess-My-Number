import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  let imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={Styles.Screen}>
      <View style={Styles.rootScreen}>
        <Title>GAME OVER!</Title>
        <View style={[Styles.imagecontainer, imageStyle]}>
          <Image
            style={Styles.image}
            source={require("../assets/DiceImage.jpg")}
          />
        </View>
        <Text style={Styles.text}>
          Your Phone needed{" "}
          <Text style={Styles.texthighlight}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={Styles.texthighlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  imagecontainer: {
    // width: deviceWidth <380 ? 150:300,
    // height:  deviceWidth <380 ? 150:300,
    // borderRadius:  deviceWidth <380 ? 75:150,
    borderWidth: 3,
    borderColor: "black",
    margin: 36,
    overflow: "hidden",
  },
  Screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootScreen: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texthighlight: {
    color: "#440424",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
});
