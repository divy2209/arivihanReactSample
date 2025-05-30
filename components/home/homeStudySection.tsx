import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Plus, FileEdit, FileText, Atom, Beaker } from 'lucide-react-native';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    onPress?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, onPress }) => (
    <TouchableOpacity
        className="items-center w-16"
        onPress={onPress}
        activeOpacity={0.7}
    >
        <View className="rounded-full mb-3">
            {icon}
        </View>
        <Text numberOfLines={2} className="text-gray-800 text-sm font-medium text-center leading-tight">
            {title}
        </Text>
    </TouchableOpacity>
);

interface SubjectCardProps {
    icon: React.ReactNode;
    title: string;
    onPress?: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ icon, title, onPress }) => (
    <TouchableOpacity
        className="bg-white rounded-2xl py-6 px-4 items-center justify-center shadow-lg border border-gray-100 w-32"
        onPress={onPress}
        activeOpacity={0.7}
    >
        <View className="w-16 h-16 items-center justify-center mb-2">
            {icon}
        </View>
        <Text className="text-gray-800 text-sm font-semibold text-center">
            {title}
        </Text>
    </TouchableOpacity>
);

const HomeStudySection: React.FC = () => {
    const handleFeaturePress = (feature: string) => {
        console.log(`${feature} pressed`);
    };

    const handleSubjectPress = (subject: string) => {
        console.log(`${subject} pressed`);
    };

    return (
        <View className="pt-6">
            {/* Top Features Row */}
            <View className="flex-row mb-10 gap-8">
                <FeatureCard
                    icon={
                        <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center">
                            <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center border-2 border-white">
                                <Plus size={24} color="#6366f1" strokeWidth={2} />
                            </View>
                        </View>
                    }
                    title="Create Routine"
                    onPress={() => handleFeaturePress('Create Routine')}
                />

                <FeatureCard
                    icon={
                        <View className="w-16 h-16 bg-pink-100 rounded-full items-center justify-center">
                            <FileEdit size={24} color="#ec4899" strokeWidth={2} />
                        </View>
                    }
                    title="Toppers ke Notes"
                    onPress={() => handleFeaturePress('Toppers ke Notes')}
                />

                <FeatureCard
                    icon={
                        <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center">
                            <FileText size={24} color="#10b981" strokeWidth={2} />
                        </View>
                    }
                    title="Previous Year Papers"
                    onPress={() => handleFeaturePress('Previous Year Papers')}
                />
            </View>

            {/* JEE Lectures Section */}
            <View>
                <Text className="text-xl font-bold text-gray-900 mb-6">
                    JEE Lectures
                </Text>

                <View className="flex-row gap-3">
                    <SubjectCard
                        icon={<Atom size={32} color="#0ea5e9" strokeWidth={1.5} />}
                        title="Physics"
                        onPress={() => handleSubjectPress('Physics')}
                    />

                    <SubjectCard
                        icon={<Beaker size={32} color="#10b981" strokeWidth={1.5} />}
                        title="Chemistry"
                        onPress={() => handleSubjectPress('Chemistry')}
                    />

                    <SubjectCard
                        icon={
                            <View className="items-center justify-center">
                                <Text className="text-3xl font-bold text-blue-600 italic">
                                    f<Text className="text-2xl">ₓ</Text>
                                </Text>
                            </View>
                        }
                        title="Mathematics"
                        onPress={() => handleSubjectPress('Mathematics')}
                    />
                </View>
            </View>
        </View>
    );
};

export default HomeStudySection;