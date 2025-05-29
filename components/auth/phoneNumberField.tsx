import {Text, TextInput, TouchableHighlight, View} from "react-native";

interface Props {
    onPress: () => void;
}

const PhoneNumberField = ({onPress}: Props) => {
    return (
        <View className="px-6 pt-4">
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
                onPress={onPress}
                className="flex flex-1 bg-primary rounded-full py-4 mt-5">
                <Text className="text-white text-xl text-center">Get OTP</Text>
            </TouchableHighlight>
        </View>
    );
}

export default PhoneNumberField;