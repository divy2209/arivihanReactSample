import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FileText, Clock, Edit3 } from 'lucide-react-native';

interface TestCardProps {
    icon: React.ReactNode;
    title: string;
    testCount: number;
    onPress?: () => void;
}

const TestCard: React.FC<TestCardProps> = ({ icon, title, testCount, onPress }) => (
    <TouchableOpacity
        className="bg-white rounded-2xl px-6 pb-1 items-center justify-between shadow-lg border border-gray-100 w-32"
        onPress={onPress}
        activeOpacity={0.7}
    >
        <View className="w-16 h-16 items-center justify-center mb-4">
            {icon}
        </View>
        <Text className="text-gray-900 text-sm font-semibold text-center mb-2 leading-tight">
            {title}
        </Text>
        <Text className="text-gray-500 text-sm font-medium">
            {testCount} Tests
        </Text>
    </TouchableOpacity>
);

const TestSeriesSection: React.FC = () => {
    const handleTestPress = (testType: string) => {
        console.log(`${testType} pressed`);
    };

    return (
        <View className="pt-8 mb-6">
            {/* Section Title */}
            <Text className="text-xl font-bold text-gray-900 mb-6">
                Test Series
            </Text>

            {/* Test Cards Row */}
            <View className="gap-3 flex flex-row">
                <TestCard
                    icon={
                        <View className="relative">
                            <FileText size={40} color="#0f172a" strokeWidth={1.5} />
                            <View className="absolute -bottom-1 -right-1">
                                <View className="w-4 h-1 bg-primary rounded-full mb-1" />
                                <View className="w-3 h-1 bg-primary rounded-full mb-1" />
                                <View className="w-4 h-1 bg-primary rounded-full" />
                            </View>
                        </View>
                    }
                    title="JEE Mains"
                    testCount={10}
                    onPress={() => handleTestPress('JEE Mains')}
                />

                <TestCard
                    icon={
                        <View className="relative">
                            <FileText size={40} color="#0f172a" strokeWidth={1.5} />
                            <View className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                                <Clock size={16} color="#0891b2" strokeWidth={2} />
                            </View>
                        </View>
                    }
                    title="Chapters: Mains Level"
                    testCount={48}
                    onPress={() => handleTestPress('Chapters: Mains Level')}
                />

                <TestCard
                    icon={
                        <View className="relative">
                            <FileText size={40} color="#0f172a" strokeWidth={1.5} />
                            <View className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                                <Edit3 size={16} color="#06b6d4" strokeWidth={2} />
                            </View>
                        </View>
                    }
                    title="Chapters: Basic Level"
                    testCount={40}
                    onPress={() => handleTestPress('Chapters: Basic Level')}
                />
            </View>
        </View>
    );
};

export default TestSeriesSection;