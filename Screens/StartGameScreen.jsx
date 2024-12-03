import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";
import Title from "../Components/Title";
import Card from "../Components/Card";
import InstructionText from "../Components/InstructionText";

function StartGameScreen({ onpickedNumber }) {
  const [enteredNumber, setenteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setenteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 to 99",
        [{ text: "Okay", style: "cancel", onPress: resetInputNumber }]
      );
      return;
    }
    onpickedNumber(chosenNumber);
  }
  function resetInputNumber() {
    setenteredNumber("");
  }

  const MarginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={Styles.screen}>
      <KeyboardAvoidingView style={Styles.screen} behavior="position">
        <View style={[Styles.rootContainer, { marginTop: MarginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            style={Styles.inputContainer}
            <InstructionText style={Styles.instructionText}>
              Enter a Number
            </InstructionText>
            <TextInput
              style={Styles.numberinput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={Styles.buttoncontainer}>
              <View style={Styles.buttoninner}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={Styles.buttoninner}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 130,
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },

  numberinput: {
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    height: 50,
    fontSize: 32,
    color: "#ddb52f",
    fontWeight: "bold",
    width: 50,
    marginVertical: 8,
    paddingTop: 5,
  },
  buttoncontainer: {
    flexDirection: "row",
  },
  buttoninner: {
    flex: 1,
  },
});
