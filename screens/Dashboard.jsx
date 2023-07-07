import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

export default function Dashboard() {
    return (
        <SafeAreaView>
            <Text className='text-2xl p-5  font-bold'>Dashboard</Text >

            <Text className='font-serif font-bold px-5 py-3'>Personal Info</Text>
            <View className='h-40 w-80  mx-auto  bg-slate-300 rounded-md'>
                <View className='flex-row gap-4 px-5 py-3'>
                    <Text className='text-xl text-white font-bold'>Name:</Text>
                    <Text className='text-xl font-semibold'>John</Text>
                </View>
                <View className='flex-row gap-4 px-5 py-3'>
                    <Text className='text-xl text-white font-bold'>Email:</Text>
                    <Text className='text-xl font-semibold'>John@gmail.com</Text>
                </View>
            </View>

            <Text className='font-serif font-bold px-5 py-3'>Statics</Text>

            <View className='pt-5 flex-row gap-4 items-center flex-wrap px-5'>
                <View className='h-40 flex-1 inline-block mx-auto  bg-sky-300 rounded-md'>
                    <Feather name='shopping-bag' style={styles.icon} size={60} color='#fff' />
                    <Text className='text-center text-white font-bold text-xl '>Orders</Text>
                    <Text className='text-center text-white font-bold text-xl '>40</Text>
                </View>
                <View className='h-40 flex-1  mx-auto  bg-blue-300 rounded-md'>
                    <Feather name='package' style={styles.icon} size={60} color='#fff' />
                    <Text className='text-center text-white font-bold text-xl '>Products</Text>
                    <Text className='text-center text-white font-bold text-xl '>10</Text>
                </View>
            </View>
            <View className='h-40 w-80  mx-auto  bg-slate-300 rounded-md'>
                <FontAwesome5Icon name='shipping-fast' style={{
                    marginHorizontal: 120,
                    marginTop: 10
                }} size={60} color='#fff' />
                <Text className='text-center text-white font-bold text-xl '>Total Sales</Text>
                <Text className='text-center text-white font-bold text-xl '>10000<Text className=' text-sky-400 uppercase font-light text-sm px-2'>rs</Text></Text>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 45,
        marginTop: 10
    }
})