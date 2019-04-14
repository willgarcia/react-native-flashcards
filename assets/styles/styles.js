import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: "#ccc"
  },
  animation: {
    alignItems: "center",
    marginTop: 20
  },
  borderBottom: { borderBottomWidth: 1 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },

  buttons: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  button: {
    width: 200,
    padding: 10
  },
  quizzProgress: {
    width: 50,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: "violet"
  },
  answer: {
    marginTop: 10
  }
});
