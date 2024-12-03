import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={Styles.outercontainer}>
      <Pressable
        style={Styles.innercontainer}
        android_ripple={{ color: "#440424" }}
        onPress={onPress}
      >
        <Text style={Styles.Textbutton}>{children}</Text>
      </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  outercontainer: {
    margin: 5,
    borderRadius: 28,
    overflow: "hidden",
  },
  innercontainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  Textbutton: {
    textAlign: "center",
    color: "white",
  },
});

export default PrimaryButton;
