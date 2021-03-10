import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import StyleConfig from "../../constants/StyleConfig";

const PrimaryButton = (props) => {
  //Variables for setting styles for button and its title
  let btnStyle, titleStyle;

  /*
    type prop will be used to set different styles for button and its title

    There are 3 types of buttons: 
    1. solid (default)
    2. outline
    3. clear (for iOS devices)
  */
  if (props.type === "outline") {
    btnStyle = { ...styles.button, ...styles.buttonOutline };
    titleStyle = { ...styles.title, ...styles.titleOutlineClear };
  } else if (props.type === "clear") {
    btnStyle = styles.button;
    titleStyle = { ...styles.title, ...styles.titleOutlineClear };
  } else {
    btnStyle = { ...styles.button, ...styles.buttonSolid };
    titleStyle = { ...styles.title, ...styles.titleSolid };
  }

  return (
    <Button
      title={props.title}
      type={props.type}
      icon={props.icon}
      containerStyle={{ ...styles.container, ...props.containerStyle }}
      buttonStyle={btnStyle}
      titleStyle={titleStyle}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  //style for button container
  container: {
    borderRadius: 32,
    overflow: "hidden",
  },

  //common style for the button
  button: {
    borderRadius: 32,
    height: (StyleConfig.height * 7) / 100,
  },

  //style for "solid" button type
  buttonSolid: {
    backgroundColor: StyleConfig.colors.primary,
  },

  //style for "outline" button type
  buttonOutline: {
    borderWidth: 2,
    borderColor: StyleConfig.colors.primary,
  },

  //common style for button title
  title: {
    fontFamily: StyleConfig.fontInter,
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: (StyleConfig.height * 2.2) / 100,
  },

  //style for "solid" button type title
  titleSolid: {
    color: StyleConfig.colors.white,
  },

  //style for "outline" and "clear" button type title
  titleOutlineClear: {
    color: StyleConfig.colors.primary,
  },
});

export default PrimaryButton;
