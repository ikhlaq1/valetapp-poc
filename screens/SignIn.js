import React from "react";

import {
  Layout,
  Text,
  Input,
  Button,
  ApplicationProvider,
} from "@ui-kitten/components";

import * as eva from "@eva-design/eva";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { default as theme } from "../theme.json";

import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

const SignIn = ({ navigation }) => {
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
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
          Sign In
        </Text>

        <View style={{ marginHorizontal: wp("10") }}>
          <Input style={styles.inputField} placeholder="Organisation Name" />

          <Input style={styles.inputField} placeholder="User ID" />

          <Input
            style={styles.inputField}
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            onChangeText={(nextValue) => setValue(nextValue)}
          />
        </View>
        <Button
          style={{
            width: wp("90"),
            marginBottom: 8,
            backgroundColor: theme["color-primary-600"],
          }}
          size="giant"
        >
          Proceed
        </Button>
        <View style={styles.row}>
          <TouchableOpacity>
            <Text
              style={[styles.text, { color: theme["color-primary-500"] }]}
              category="p1"
            >
              Remember me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Change Password")}
          >
            <Text
              style={[styles.text, { color: theme["color-primary-600"] }]}
              category="p1"
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </ApplicationProvider>
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

export default SignIn;
