import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
const SpecialOfferComponent = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity  >
        <View className="w-[90vw] body-font font-quicksand mx-4 my-2 bg-[#e1e1e1] flex flex-row items-center py-2 px-6 rounded-3xl" onPress={()=>navigation.navigate("ElectronicsProducts")}>
          <View className="w-3/5   ">
            <Text className="text-black mb-1 font-extrabold text-xl ">50%</Text>
            <Text className="text-black text-xl my-1 font-medium">
              Electronics
            </Text>
            <Text className="w-3/4 text-black text-xs mt-2 text-medium text-justify rounded-md  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://png.monster/wp-content/uploads/2022/09/png.monster-209-323x370.png',
            }}
            className="w-32 h-36 mx-auto object-contain "
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="w-[90vw] body-font font-quicksand mx-4 my-2 bg-[#e1e1e1] flex flex-row items-center py-2 px-6 rounded-3xl">
          <View className="w-3/5" onPress={()=>navigation.navigate("MenProducts")}>
            <Text className="text-black mb-1 font-extrabold text-xl ">10%</Text>
            <Text className="text-black text-xl my-1 font-medium">
              Casual Shirts 
            </Text>
            <Text className="w-3/4 text-black text-xs mt-2 text-medium text-justify rounded-md  ">
              Variety of men casual shirts!
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://i.ibb.co/pPB5Zjx/Plaid-High-Quality-Janpan-Style-Spring-Long-Sleeve-Shirt-Men-Casual-Plus-Asian-Size-M-5-XL-removebg.png',
            }}
            className="w-32 h-36 mx-auto object-contain "
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="w-[90vw] body-font font-quicksand mx-4 my-2 bg-[#e1e1e1] flex flex-row items-center py-2 px-6 rounded-3xl">
          <View className="w-3/5   ">
            <Text className="text-black mb-1 font-extrabold text-xl ">40%</Text>
            <Text className="text-black text-xl my-1 font-medium">
              Black Friday 
            </Text>
            <Text className="w-3/4 text-black text-xs mt-2 text-medium text-justify rounded-md  ">
              Black friday sale 
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://i.ibb.co/wzZd2n2/5xtez-cameras-camcorders-QUIVER-190507-1557249221821-removebg-preview.png',
            }}
            className="w-32 h-36 mx-auto object-contain "
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="w-[90vw] body-font font-quicksand mx-4 my-2 bg-[#e1e1e1] flex flex-row items-center py-2 px-6 rounded-3xl">
          <View className="w-3/5   ">
            <Text className="text-black mb-1 font-extrabold text-xl ">40%</Text>
            <Text className="text-black text-xl my-1 font-medium">
              Handbags 
            </Text>
            <Text className="w-3/4 text-black text-xs mt-2 text-medium text-justify rounded-md  ">
              Variety od women bagpacks 
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://i.ibb.co/PjtYGYY/61-Rsmq-KYfl-L-removebg-preview.png',
            }}
            className="w-32 h-36 mx-auto object-contain "
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="w-[90vw] body-font font-quicksand mx-4 my-2 bg-[#e1e1e1] flex flex-row items-center py-2 px-6 rounded-3xl" onPress={()=>navigation.navigate("Sneakers")}>
          <View className="w-3/5   ">
            <Text className="text-black mb-1 font-extrabold text-xl ">40%</Text>
            <Text className="text-black text-xl my-1 font-medium">
              Sneakers 
            </Text>
            <Text className="w-3/4 text-black text-xs mt-2 text-medium text-justify rounded-md  ">
              Mens sneakers sale 
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://i.ibb.co/bdYqWhx/851-9208-1-removebg-preview.png',
            }}
            className="w-32 h-36 mx-auto object-contain "
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SpecialOfferComponent;
