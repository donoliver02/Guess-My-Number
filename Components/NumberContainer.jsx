import { View, StyleSheet, Text, Dimensions } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#ddb52f",
    fontSize: deviceWidth < 380 ? 28 : 32,
    fontWeight: "bold",
  },
});
