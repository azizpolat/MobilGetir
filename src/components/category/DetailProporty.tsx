import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ArrowDown2} from 'iconsax-react-native';
import CardButton from './CardButton';

export default function DetailProporty() {
  const [details, setDetails] = useState<string[]>([
    'Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti',
    'İçindekiler',
    'Besin Değerleri',
    'Kullanım',
    'Ek Bilgiler',
  ]);

  const TextComponents = ({detail, index}: {detail: string; index: number}) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: index == details.length - 1 ? 0 : 0.4,
          borderColor: 'lightgray',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: index == 0 ? 'black' : '#687482',
            fontSize: index == 0 ? 12 : 14,
            fontWeight: index == 0 ? '300' : '500',
          }}>
          {detail}
        </Text>
        {index != 0 && <ArrowDown2 size="32" color="grey" />}
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}>
        {details.map((item, index) => (
          <TextComponents key={index} index={index} detail={item} />
        ))}
      </View>
    </>
  );
}
