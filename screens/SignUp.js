import React from "react";

import { Layout, Text, Input, Button } from "@ui-kitten/components";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { default as theme } from "../theme.json";

import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <Layout style={{ flex: 1, alignItems: "center" }}>
      <Image
        style={{ width: wp("30"), height: hp("10"), marginVertical: hp("5") }}
        resizeMode={"contain"}
        source={require("../assets/icons/logo.png")}
      />

      <Image
        style={{ width: wp("45"), height: hp("20"), marginBottom: 30 }}
        resizeMode={"contain"}
        source={require("../assets/images/bike.png")}
      />

      <Text
        style={{
          marginBottom: 30,
          fontWeight: "400",
        }}
        category="h2"
      >
        Sign Up
      </Text>

      <View style={{ marginHorizontal: wp("10") }}>
        <Input style={styles.inputField} placeholder="Enter Full Name" />

        <Input style={styles.inputField} placeholder="Organisation ID" />

        <Input
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
      </View>

      <Button style={{ width: wp("90"), marginBottom: 8 }} size="giant">
        Proceed
      </Button>

      <View style={styles.row}>
        <Text style={styles.text} category="p2">
          Already a member?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text
            style={[styles.text, { color: theme["color-primary-600"] }]}
            category="p1"
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    margin: 2,
  },

  inputField: {
    width: wp("90"),
    height: hp("8"),
    backgroundColor: "rgb(255,255,255)",
    borderColor: "rgb(255,255,255)",
    borderBottomColor: theme["color-primary-600"],
  },
});

export default SignUp;
