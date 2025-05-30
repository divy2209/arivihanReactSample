import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

interface VideoCardProps {
    id: number;
    thumbnail: any;
    onPress?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, thumbnail, onPress }) => (
    <TouchableOpacity
        className={`${id===0 ? "" : "ml-4"}`}
        onPress={onPress}
        activeOpacity={0.8}
    >
        <Image className="w-[240px] h-[150px]" resizeMode="contain" source={thumbnail} />
    </TouchableOpacity>
);

const HighlightsOfTheWeek: React.FC = () => {
    const handleVideoPress = (title: string) => {
        console.log(`${title} video pressed`);
    };

    return (
        <View className="py-8 mb-24">
            <Text className="text-xl font-bold text-gray-900 mb-6">
                Highlights of the week
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <VideoCard
                    id={0}
                    thumbnail={require("@/assets/images/highlight_1.png")}
                    onPress={() => handleVideoPress('Class 11th guidance')}
                />

                <VideoCard
                    id={1}
                    thumbnail={require("@/assets/images/highlight_2.png")}
                    onPress={() => handleVideoPress('After 12th guidance')}
                />
            </ScrollView>
        </View>
    );
};

export default HighlightsOfTheWeek;