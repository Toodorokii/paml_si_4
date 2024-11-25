import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const App = () => {
  return (
    <ImageBackground
      source={{ uri: "https://example.com/your-image.jpg" }} // Ganti dengan URL atau path gambar lokal
      style={styles.background}
      resizeMode="cover" // Atur bagaimana gambar menyesuaikan layar
    >
      <View style={styles.container}>
        <Text style={styles.name}>Rifqi Athaya Fattah</Text>
        <Text style={styles.faculty}>Fakultas Sains dan Teknologi</Text>
        <Text style={styles.major}>Sistem Informasi</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Memastikan gambar mencakup seluruh layar
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Warna transparan untuk menonjolkan teks
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  faculty: {
    fontSize: 28,
    color: "#555",
    marginBottom: 5,
  },
  major: {
    fontSize: 26,
    color: "#777",
  },
});

export default App;
