import {View, Text, Image} from 'react-native';
import React from 'react';
import {ArrowRight2} from 'iconsax-react-native';

export default function HeaderMain() {
  return (
    <View className="flex h-12 flex-row bg-yellow-400 items-center justify-between">
      <View className="w-10/12 h-12 flex-row flex items-center rounded-tr-full rounded-br-full p-4 bg-white">
        <Image
          source={require('../../../assets/house.png')}
          className="h-6 w-6"
        />
        <View className="flex-1 flex-row items-center ml-2 h-10">
          <Text className="text-xl  font-semibold">Ev</Text>
          <Text className="font-light text-sm ml-2 ">
            MehterÇeşme Mah. İstanbul
          </Text>
        </View>
        <ArrowRight2 className="ml-auto" size="20" color="black" />
      </View>
      <View className="w-2/12 ">
        <Text className="text-xs text-getirColor text-center font-bold">
          TVS
        </Text>
        <Text className="text-xl text-getirColor text-center font-bold">
          15 dk
        </Text>
      </View>
    </View>
  );
}
