import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const SignIn = () => {
  const [details, setDetails] = React.useState({ username: "", password: "" });
  const { signIn } = useContext(AuthContext);
  const handleTextChange = (text) => {
    setDetails((value) => ({ ...value, username: text }));
  };
  const handlePasswordChange = (text) => {
    setDetails((value) => ({ ...value, password: text }));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>SignIn</Text>
      </View>
      <Text>Username:</Text>
      <TextInput onChangeText={handleTextChange} placeholder="username" />
      <Text>Password:</Text>
      <TextInput onChangeText={handlePasswordChange} placeholder="password" />
      <Button onPress={() => signIn(details)} title="Sign In" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignIn;
