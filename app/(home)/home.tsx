import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity, ScrollView,
} from 'react-native';
import {SearchIcon} from "@/assets/icons/icons";
import HomeCarousel from "@/components/home/homeCarousel";
import HomeSection from "@/components/home/homeSection";

const Home= () => {
    return (
        <ScrollView className="flex-1 bg-white pt-12">
            {/* Header */}
            <View className="flex-row justify-between items-center px-4 py-3 bg-white">
                <View className="flex-row items-center">
                    <Text className="text-xl font-medium text-gray-800">Hi Div!</Text>
                    <Text className="ml-2 text-lg">👋</Text>
                </View>
                <TouchableOpacity className="bg-yellow-400 px-6 py-2 rounded-lg">
                    <Text className="text-gray-800 font-medium">Join Now</Text>
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View className="px-4 pb-2 bg-white">
                <View className="flex-row items-center bg-gray-100 rounded-xl px-4">
                    <SearchIcon width={20} height={20} color="#333" />
                    <TextInput
                        placeholder="Search Classes"
                        placeholderTextColor="#9CA3AF"
                        className="flex-1 text-gray-700 text-base"
                    />
                </View>
            </View>

            <HomeCarousel />

            {/* Toggle Buttons */}
            <HomeSection />
        </ScrollView>
    );
};

export default Home;