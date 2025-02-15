import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('window');
export default function ImageCarsul({images}: {images: string[]}) {
  const [active, setIndex] = useState(0);

  const onViewRef = React.useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewCon = React.useRef({viewAreaCoveragePercentThreshold: 50});
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: height * 0.25,
        backgroundColor: 'white',
        paddingTop: 15,
      }}>
      <FlatList
        data={images}
        style={{width: width * 0.5, height: height * 0.18}}
        renderItem={item => (
          <Image
            source={{uri: item.item}}
            style={{
              width: width * 0.5,
              height: height * 0.21,
              resizeMode: 'stretch',
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewCon.current}
        onViewableItemsChanged={onViewRef.current}></FlatList>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            width: 30,
            height: 12,
            justifyContent: 'space-around',
          }}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {backgroundColor: active == index ? '#5D3EBD' : '#F2F0FD'},
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    marginVertical: 2,
    marginHorizontal: 5,
  },
});
