import {View, Text, Dimensions, Image, TouchableHighlight, TextInput, Animated, Button} from 'react-native';
import Carousel from "react-native-reanimated-carousel/src/components/Carousel";
import ScrollView = Animated.ScrollView;

const AuthScreen = () => {
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
        <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex flex-1 flex-col bg-white">
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
            <View className="px-6 pt-6">
                <View className="flex flex-row border border-gray-700 rounded-xl">
                    <Text className="text-gray-700 text-xl ml-2 align-middle">
                        +91
                    </Text>
                    <TextInput
                        placeholder="Enter your mobile number"
                        placeholderTextColor="#374151"
                        className="flex-1 ml-2 text-gray-700 text-xl"
                        keyboardType="numeric"
                        maxLength={10}
                        inputMode={'tel'}
                    />
                </View>
                <TouchableHighlight
                    onPress={()=>{}}
                    className="flex flex-1 bg-cyan-600 rounded-full py-4 mt-5">
                    <Text className="text-white text-xl text-center">Get OTP</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

export default AuthScreen;