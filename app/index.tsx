// import { useRouter } from "expo-router";
// import { useEffect } from "react";
// import { ActivityIndicator, View } from "react-native";
// import OnboardingScreen from "./onboarding/OnboardingScreen";

// export default function Index() {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace("/onboarding/OnboardingScreen");
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" color="#80A615" />
//     </View>
//   );
// }
import OnboardingScreen from "./onboarding/OnboardingScreen";

export default function Index() {
  return <OnboardingScreen />;
}
