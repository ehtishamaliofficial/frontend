import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
const CookingProducts = ({navigation}) => {
  const detegentsCatHandler=()=>{
    navigation.navigate("Detergents")
  }
  return (
    <View className="body-font font-quicksand my-6">
      <ScrollView horizontal={true}>
       
          
          <View className="my-3 mx-3">
            <TouchableOpacity onPress={detegentsCatHandler}>
              <Image
                source={{uri: 'https://img.favpng.com/13/15/5/surf-excel-laundry-detergent-washing-png-favpng-JfCsP6qriEtasS34N74rRqHzf_t.jpg'}}
                className="w-16 h-16 object-cover rounded-full"
              />
            </TouchableOpacity>
            <Text className="font-bold text-black text-xs mt-5 text-center">
              Detergents
            </Text>
          </View>
          
          <View className="my-3 mx-3">
            <TouchableOpacity>
              <Image
                source={{uri: 'https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY='}}
                className="w-16 h-16 object-cover rounded-full"
              />
            </TouchableOpacity>
            <Text className="font-bold text-black text-xs mt-5 text-center">
              Meat
            </Text>
          </View>
          <View className="my-3 mx-3">
            <TouchableOpacity>
              <Image
                source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/multicoloured-fruit-and-vegetables-in-a-black-bowl-royalty-free-image-1650038864.jpg?crop=0.634xw:0.794xh;0.185xw,0.119xh&resize=1200:*'}}
                className="w-16 h-16 object-cover rounded-full"
              />
            </TouchableOpacity>
            <Text className="font-bold text-black text-xs mt-5 text-center">
              Fruits
            </Text>
          </View>
          <View className="my-3 mx-3">
            <TouchableOpacity>
              <Image
                source={{uri: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12621419-0-A.jpg?5'}}
                className="w-16 h-16 object-cover rounded-full"
              />
            </TouchableOpacity>
            <Text className="font-bold text-black text-xs mt-5 text-center">
              Comodities
            </Text>
          </View>
          <View className="my-3 mx-3">
            <TouchableOpacity>
              <Image
                source={{uri: 'https://i.ibb.co/S6RWnwv/413-Iz-RLMGL-AC-SR300-300-removebg-preview.png'}}
                className="w-16 h-16 object-cover rounded-full"
              />
            </TouchableOpacity>
            <Text className="font-bold text-black text-xs mt-5 text-center">
              Electronics
            </Text>
          </View>
          <View className="my-3 mx-3">
            <TouchableOpacity>
              <Image
                source={{uri: 'https://i.pinimg.com/originals/90/bc/0c/90bc0c906fc30587b4863d0e6089f364.jpg'}}
                className="w-16 h-16 object-cover rounded-full"
              />
            </TouchableOpacity>
            <Text className="font-bold text-black text-xs mt-5 text-center">
              Grocary
            </Text>
          </View>
      
       
      </ScrollView>
    </View>
  );
};

export default CookingProducts;
