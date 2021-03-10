import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import StyleConfig from "../../constants/StyleConfig";
import Headings from "../../components/TextStyles/Headings";
import BodyText from "../../components/TextStyles/BodyText";
import Ionicons from "react-native-vector-icons/Ionicons";

const SignInScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Headings headingType="H1" addStyles={styles.heading}>
        Welcome Back!
      </Headings>
      <View style={styles.secondaryTextContainer}>
        <BodyText bodyType="P1" addStyles={styles.secondaryText}>
          Please enter your account here
        </BodyText>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton title="Login" />
      </View>
      <View style={styles.secondaryTextContainer}>
        <BodyText bodyType="P2" addStyles={styles.secondaryText}>
          Or continue with
        </BodyText>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Google"
          icon={
            <Ionicons
              name="md-logo-google"
              size={24}
              color={StyleConfig.colors.white}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.form,
  },
  image: {
    flex: 1,
    width: StyleConfig.width,
  },
  heading: {
    color: StyleConfig.colors.mainText,
    textAlign: "center",
  },
  secondaryTextContainer: {
    paddingHorizontal: (StyleConfig.width * 22.1) / 100,
    paddingTop: (StyleConfig.height * 2) / 100,
  },
  secondaryText: {
    color: StyleConfig.colors.secondaryText,
    textAlign: "center",
  },
  buttonContainer: {
    paddingHorizontal: (StyleConfig.width * 6.1) / 100,
    paddingVertical: (StyleConfig.height * 8.1) / 100,
  },
});

export default SignInScreen;
