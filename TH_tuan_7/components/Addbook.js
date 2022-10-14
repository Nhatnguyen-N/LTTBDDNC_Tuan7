import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Addbook({ book, setBook, AddBook }) {
  return (
    <View className="items-center flex-row p-3">
      <TextInput
        placeholder="Enter Books"
        placeholderTextColor={"green"}
        onChangeText={(e) => {
          setBook({
            key: Math.random().toString(),
            book: e,
          });
        }}
        value={book?.book}
        className="border w-[200px] h-10 p-[5px] "
      />
      <TouchableOpacity
        className="border-2 p-2 ml-5 rounded-lg"
        onPress={AddBook}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
