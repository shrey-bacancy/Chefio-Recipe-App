import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const Headings = (props) => {
  //Variable for setting text style
  let textStyle;

  /*
    headingType prop will be used to set different styles for heading text

    There are 3 types of heading styles: 
    1. H1
    2. H2
    3. H3
  */
  if (props.headingType === "H1" || props.headingType === "h1") {
    textStyle = { ...styles.heading, ...styles.h1, ...props.addStyles };
  } else if (props.headingType === "H2" || props.headingType === "h2") {
    textStyle = { ...styles.heading, ...styles.h2, ...props.addStyles };
  } else if (props.headingType === "H3" || props.headingType === "h3") {
    textStyle = { ...styles.heading, ...styles.h3, ...props.addStyles };
  }

  return (
    <Text style={textStyle} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  //common style for heading text
  heading: {
    fontFamily: StyleConfig.fontInter,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  //style for "H1" heading type
  h1: {
    fontSize: 22,
    lineHeight: (StyleConfig.height * 4) / 100,
  },

  //style for "H2" heading type
  h2: {
    fontSize: 17,
    lineHeight: (StyleConfig.height * 3.3) / 100,
  },

  //style for "H3" heading type
  h3: {
    fontSize: 15,
    lineHeight: (StyleConfig.height * 3) / 100,
  },
});

export default Headings;
