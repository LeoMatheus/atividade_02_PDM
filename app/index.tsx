import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const handleNav = () => {
    router.push("/about");
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        <Link href={"/about"}> To About</Link>

        <Button title="About!" onPress={handleNav} />
        <Button title="Music 1" onPress={() => {
          router.push({
            pathname: 'auth/music/[id]',
            params: {
              id: Math.random().toString()
            }
          })
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
