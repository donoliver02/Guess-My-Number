import { View, Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[Styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const Styles = StyleSheet.create({
  instructionText: {
    color: "white",
    fontSize: 17,
  },
});
