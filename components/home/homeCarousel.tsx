import Carousel from "react-native-reanimated-carousel/src/components/Carousel";
import {Dimensions, TouchableOpacity, View, Image} from "react-native";
import React from "react";

const slides = [
    {
        id: 1,
        image: require('@/assets/images/home_1.png'),
        onPress: () => {}
    },
    {
        id: 2,
        image: require('@/assets/images/home_2.png'),
        onPress: () => {}
    },
    {
        id: 3,
        image: require('@/assets/images/home_3.png'),
        onPress: () => {}
    },
    {
        id: 4,
        image: require('@/assets/images/home_4.png'),
        onPress: () => {}
    },
    {
        id: 5,
        image: require('@/assets/images/home_5.png'),
        onPress: () => {}
    }
]

const renderCarouselItem = ({ item }: {item: any}) => (
    <TouchableOpacity
        onPress={item.onPress}
        activeOpacity={0.9}
        className="flex-1 mx-4"
    >
        <Image className="w-full h-[180px] rounded-2xl bg-red" resizeMode="contain" source={item.image} />
    </TouchableOpacity>
);

const HomeCarousel = () => {
    const { width: screenWidth } = Dimensions.get('window');
    return (
        <View className="mb-2">
            <Carousel
                width={screenWidth}
                height={180}
                data={slides}
                renderItem={renderCarouselItem}
                pagingEnabled
                snapEnabled
                loop={false}
                autoPlay={true}
                autoPlayInterval={10000}
                scrollAnimationDuration={500}
            />
        </View>
    );
}

export default HomeCarousel;