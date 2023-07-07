import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const PopularCategories = () => {
  return (
    <View className="w-screen mb-10 flex flex-row items-center justify-center mt-[-100px]">
      <View className="w-[20%] m-1">
        <View className="w-[100%] h-24 m-0.5 relative">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}
            className="w-[100%] h-[100%] object-cover "
          />
          <TouchableOpacity className="link">
            <Text className="absolute bottom-10 right-5 m-auto bg-black color-white p-2 w-3/5 text-center rounded-3xl text-xs font-bold">
              sale
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-[100%] h-24 m-0.5 relative">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}
            className="w-[100%]  h-[100%] object-cover "
          />
          <TouchableOpacity>
          <Text className="absolute bottom-10 right-5 m-auto bg-black color-white p-2 ml-4 w-[70%] text-center rounded-3xl text-xs font-bold">
              Women
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-[20%] h-[195px] m-1 relative">
        <View >
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}
            className="w-[100%] h-[100%] object-cover "
          />
          <TouchableOpacity className="link">
            <Text className="absolute bottom-20 right-5 m-auto bg-black color-white p-2 w-3/5 text-center rounded-3xl text-xs font-bold">
              New
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-[40%] h-48 m-0.5 relative">
        <View className="w-[50%] flex flex-row items-center ">
          <View className="w-[100%] h-24 relative">
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600',
              }}
              className="w-[100%] h-[100%] object-cover "
            />
            <TouchableOpacity className="link">
              <Text className="absolute bottom-10 right-5 m-auto bg-black color-white p-2 w-3/5 text-center rounded-3xl text-xs font-bold">
                sale
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[100%] h-24 m-0.5 relative">
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600',
              }}
              className="w-[100%]  h-[100%] object-cover "
            />
            <TouchableOpacity>
            <Text className="absolute bottom-10 right-5 m-auto bg-black color-white p-2 ml-10 w-[70%] text-center rounded-3xl text-xs font-bold">
              Women
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-[100%] h-24 relative">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}
            className="w-[100%] h-[100%] object-cover "
          />
         <TouchableOpacity className="link">
              <Text className="absolute bottom-7 right-10 m-auto bg-black color-white p-2 w-3/5 text-center rounded-3xl text-xs font-bold">
                Shoes
              </Text>
            </TouchableOpacity>
        </View> 
      </View>

 

      {/* <View className="col3">
        <View className="main_row3">
          <View className="row3">
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600',
              }}
              className="category_row1"
            />
            <TouchableOpacity className="link">
              <Text>MEN</Text>
            </TouchableOpacity>
          </View>
          <View className="row3">
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600',
              }}
              className="category_row1"
            />
            <TouchableOpacity className="link">
              <Text>ACCESSORIES</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="row3_large">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}
            className="category_large"
          />
          <TouchableOpacity className="link">
            <Text>SHOES</Text>
          </TouchableOpacity>
        </View>
      </View>  */}
    </View>
  );
};

export default PopularCategories;
