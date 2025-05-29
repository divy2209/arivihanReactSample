import {Dimensions, Image, View} from "react-native";
import Carousel from "react-native-reanimated-carousel/src/components/Carousel";

const AuthCarousel = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const list = [
        {
            id: 1,
            image: require('@/assets/images/onboarding_1.png'),
        },
        {
            id: 2,
            image: require('@/assets/images/onboarding_2.png'),
        },
        {
            id: 3,
            image: require('@/assets/images/onboarding_3.png'),
        }
    ]

    return (
        <Carousel
            width={width}
            height={height*0.75}
            data={list}
            renderItem={({item}) => (
                <View>
                    <Image className="w-full h-full" source={item.image} />
                </View>
            )}
            enabled={false}
            autoPlay={true}
            autoPlayInterval={5000}
        />
    );
}

export default AuthCarousel;