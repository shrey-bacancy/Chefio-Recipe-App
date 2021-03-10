import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import StyleConfig from "../../constants/StyleConfig";
import Headings from "../../components/TextStyles/Headings";
import BodyText from "../../components/TextStyles/BodyText";

const OnboardingScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={StyleConfig.images.onboarding}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="contain"
      />

      <>
        <Headings headingType="H1" addStyles={styles.heading}>
          Start Cooking
        </Headings>
        <View style={styles.secondaryTextContainer}>
          <BodyText bodyType="P1" addStyles={styles.secondaryText}>
            Let’s join our community to cook better food!
          </BodyText>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Get Started"
            onPress={() => {
              props.navigation.navigate("SignIn");
            }}
          />
        </View>
      </>
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

export default OnboardingScreen;
