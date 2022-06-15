import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 104 + getStatusBarHeight(),
    backgroundColor: "#8257E5",
    zIndex: 1,
  },
  content: {
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18 + getStatusBarHeight(),
    zIndex: 2,
  },
  image: {
    marginRight: 126,
  },
  text: {
    marginRight: 5,
    color: "#fff",
    fontSize: 15,
    fontFamily: theme.fonts.text500,
  },
  boldText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: theme.fonts.text700,
  },
  textArea: {
    zIndex: 1,
  },
});
