import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }: any) => {
  // Slide i parë → fullscreen, fotoja vetë ka sfondin #80A615
  if (item.isFirst) {
    return (
      <View style={{ width, height }}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width, height }}
        />
      </View>
    );
  }

  // Slide-t e tjera
  return (
    <View style={{ width, height }}>
      <Image
        source={item.image}
        resizeMode="cover"
        style={{
          width,
          height: height * 0.6,
        }}
      />

      <View style={styles.textContainer}>
        {item.title !== "" && (
          <Text style={styles.title}>{item.title}</Text>
        )}
        {item.description !== "" && (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#80A615",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: height * 0.4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Slide;
