import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

enum Tab {
    JEE= "JEE",
    BOARD= "Board"
}

const HomeSectionCta = ({tab, selectedTab, onPress}: {tab: Tab, selectedTab: Tab, onPress: () => void}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-1 py-3 rounded-full ${
                selectedTab === tab
                    ? 'bg-primary shadow-sm'
                    : 'bg-transparent'
            }`}
        >
            <Text
                className={`text-center font-medium ${
                    selectedTab === tab
                        ? 'text-white'
                        : 'text-gray-600'
                }`}
            >
                {tab}
            </Text>
        </TouchableOpacity>
    );
}

const HomeSection = () => {
    const [selectedTab, setSelectedTab] = useState<Tab>(Tab.JEE);
    return (
        <View className="px-4 pb-4">
            <View className="flex-row bg-gray-100 rounded-full p-1">
                <HomeSectionCta tab={Tab.JEE} selectedTab={selectedTab} onPress={() => setSelectedTab(Tab.JEE)} />
                <HomeSectionCta tab={Tab.BOARD} selectedTab={selectedTab} onPress={() => setSelectedTab(Tab.BOARD)} />
            </View>
        </View>
    );
}

export default HomeSection;