import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Book from "./screens/Book";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="Todo" component={Todo} /> */}
          <Stack.Screen name="Book" component={Book} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
