import { View, StyleSheet, Dimensions } from "react-native";

function Card({ children }) {
  return <View style={Styles.inputContainer}>{children}</View>;
}

export default Card;
const deviceWidth = Dimensions.get("window").width;
const Styles = StyleSheet.create({
  inputContainer: {
    marginTop: deviceWidth < 380 ? 25 : 32,
    marginHorizontal: 30,
    padding: 16,
    backgroundColor: "#440424",
    borderRadius: 15,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
