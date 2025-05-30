import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

interface ChampionCardProps {
    id: number;
    name: string;
    percentage: string;
    achievement: string;
    image: any;
    onPress?: () => void;
}

const ChampionCard: React.FC<ChampionCardProps> = ({id,
                                                       name,
                                                       percentage,
                                                       achievement,
                                                       image,
                                                       onPress
                                                   }) => (
    <TouchableOpacity
        className="bg-white rounded-2xl p-4 items-center shadow-sm border border-gray-100 mx-2 w-44"
        onPress={onPress}
        activeOpacity={0.7}
    >
        <Image className="w-32 h-32" resizeMode="contain" source={image} />

        {/* Student Name */}
        <Text className="text-gray-900 text-sm font-semibold text-center mb-0.5">
            {name}
        </Text>

        {/* Percentage and Achievement */}
        <View className="flex-1 items-center flex-row align-middle">
            <Text className="text-gray-900">
                {percentage}
            </Text>
            <Text className="mx-1" >|</Text>
            <Text className="text-primary text-center font-semibold">
                {achievement}
            </Text>
        </View>
    </TouchableOpacity>
);

const ChampionsOfArivihan: React.FC = () => {
    const handleChampionPress = (name: string) => {
        console.log(`${name} champion card pressed`);
    };

    return (
        <View>
            <Text className="text-xl font-bold text-gray-900 mb-6">
                Champions of Arivihan
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <ChampionCard
                    id={0}
                    name="Anshika Mishra"
                    percentage="98.6%"
                    achievement="State Rank 1"
                    image={require("@/assets/images/champion_1.png")}
                    onPress={() => handleChampionPress('Anshika Mishra')}
                />

                <ChampionCard
                    id={1}
                    name="Sana Khan"
                    percentage="97.4%"
                    achievement="Rank 1 (PCB)"
                    image={require("@/assets/images/champion_2.png")}
                    onPress={() => handleChampionPress('Sana Khan')}
                />

                <ChampionCard
                    id={2}
                    name="Mohammad Hamza"
                    percentage="99.72%"
                    achievement="JEE"
                    image={require("@/assets/images/champion_3.png")}
                    onPress={() => handleChampionPress('Mohammad Hamza')}
                />

                <ChampionCard
                    id={3}
                    name="Mayur Patel"
                    percentage="99.36%"
                    achievement="JEE"
                    image={require("@/assets/images/champion_4.png")}
                    onPress={() => handleChampionPress('Mayur Patel')}
                />
            </ScrollView>
        </View>
    );
};

export default ChampionsOfArivihan;