import React from "react";
import StyleConfig from "./src/constants/StyleConfig";
import RecipeNavigator from "./src/navigator/RecipeNavigator";

export default function App() {
  // console.log((StyleConfig.width * 22.1) / 100);
  // console.log((StyleConfig.height * 4) / 100);
  // console.log((66 / 812) * 100);
  // console.log((23 / 375) * 100);
  return <RecipeNavigator />;
}
