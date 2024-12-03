import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={Styles.titletext}>{children}</Text>;
}

export default Title;

const Styles = StyleSheet.create({
  titletext: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 2,
    padding: 8,
  },
});
