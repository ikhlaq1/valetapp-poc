import React from "react";

import {
  Layout,
  Input,
  Button,
  Text,
  ApplicationProvider,
} from "@ui-kitten/components";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as eva from "@eva-design/eva";

import { default as theme } from "../theme.json";

import { StyleSheet, View, TouchableOpacity } from "react-native";

const ChangePassword = () => {
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <View style={{ marginHorizontal: wp("20") }}>
          <Input
            style={styles.inputField}
            placeholder="Enter new password"
            secureTextEntry={secureTextEntry}
            onChangeText={(nextValue) => setValue(nextValue)}
          />
          <Input
            style={styles.inputField}
            placeholder="Re-enter new password"
            secureTextEntry={secureTextEntry}
            onChangeText={(nextValue) => setValue(nextValue)}
          />
        </View>
        <Button
          style={{
            width: wp("90"),
            marginBottom: 8,
            backgroundColor: theme["color-primary-500"],
          }}
          size="giant"
        >
          Update Password
        </Button>

        <TouchableOpacity>
          <Text
            style={[styles.text, { color: theme["color-primary-600"] }]}
            category="p1"
          >
            Not now
          </Text>
        </TouchableOpacity>
      </Layout>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
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
export default ChangePassword;
