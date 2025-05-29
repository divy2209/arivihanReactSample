import {Text, Animated} from 'react-native';
import ScrollView = Animated.ScrollView;
import {useState} from "react";
import {useRouter} from "expo-router";
import PhoneNumberField from '@/components/auth/phoneNumberField';
import OtpField from '@/components/auth/otpField';
import LangField from '@/components/auth/langField';
import AuthCarousel from '@/components/auth/authCarousel';

enum AuthState {
    Number = 'number',
    OTP = 'otp',
    Lang = 'lang',
}

const AuthScreen = () => {
    const router = useRouter();
    const [authState, setAuthState] = useState<AuthState>(AuthState.Number)

    const renderSection = () => {
        switch (authState) {
            case AuthState.Number:
                return <PhoneNumberField onPress={() => setAuthState(AuthState.OTP)} />;

            case AuthState.OTP:
                return <OtpField forward={() => router.replace("/(home)/home")} backward={() => setAuthState(AuthState.Number)} />;

            case AuthState.Lang:
                return <LangField onPress={() => router.replace("/(home)/home")} />;

            default:
                return <Text>❓ Unknown State</Text>;
        }
    };


    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex flex-1 flex-col bg-white">
            <AuthCarousel />
            {renderSection()}
        </ScrollView>
    );
}

export default AuthScreen;