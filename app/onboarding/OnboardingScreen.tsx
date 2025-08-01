import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { slides } from "../../slides/slides";
import Slide from "./Slide";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const scrollToNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("./home/index.tsx");
    }
  };

  return (
    <View className="flex-1 bg-[#80A615]">
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) =>
          setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / width))
        }
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id}
      />

      <View className="absolute bottom-10 left-0 right-0 items-center">
        <TouchableOpacity
          className="bg-white px-8 py-3 rounded-full"
          onPress={scrollToNext}
        >
          <Text className="text-[#80A615] font-semibold text-lg">
            {currentIndex === slides.length - 1 ? "Get Started →" : "→"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
