import {Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";
import {EditIcon} from "@/assets/icons/icons";

interface Props {
    forward: () => void;
    backward: () => void;
}

const SingleOtpField = ({placeholder}: {placeholder: string}) => {
    return (
        <View className="border border-primary rounded-md items-center flex-1">
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#374151"
                className="text-xl"
                keyboardType="numeric"
                maxLength={1}
                inputMode={'numeric'}
                cursorColor="#0891b2"
            />
        </View>
    )
}

const OtpField = ({forward, backward}: Props) => {
    return (
        <View className="px-6 pt-6">
            <TouchableWithoutFeedback onPress={backward} >
                <View className="flex flex-row align-middle mb-2">
                    <EditIcon color="#0891b2" />
                    <Text className="text-primary text-base mt-1 ml-1">Edit Mobile Number</Text>
                </View>
            </TouchableWithoutFeedback>
            <View className="flex flex-row gap-2">
                {[1,2,3,4,5,6].map((value, key) => (
                    <SingleOtpField key={key} placeholder={value.toString()} />
                ))}
            </View>
            <TouchableHighlight
                onPress={forward}
                className="flex flex-1 bg-cyan-600 rounded-full py-4 mt-5">
                <Text className="text-white text-xl text-center">Get OTP</Text>
            </TouchableHighlight>
        </View>
    );
}

export default OtpField;