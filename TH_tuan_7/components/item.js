import { Text, TouchableOpacity, View } from "react-native";

const Item = (item) => (
  <View className="flex-row border items-stretch m-[5%] p-[15px] pr-[30px] ">
    <Text className="pl-[15px] pt-[5px] font-bold text-red-500">
      {item.book}
    </Text>
    <TouchableOpacity onPress={item.delete} className="border-2 p-1 ml-auto">
      <Text className="font-bold">Delete</Text>
    </TouchableOpacity>
  </View>
);

export default Item;
