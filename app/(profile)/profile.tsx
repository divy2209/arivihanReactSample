import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Image,
} from 'react-native';
import {
    ChevronRight,
    Download,
    BarChart3,
    Bell,
    Calendar,
    BookOpen,
    TrendingUp,
    HelpCircle,
    CreditCard,
    Wallet,
    Headphones,
    LogOut,
    Languages, PencilIcon,
} from 'lucide-react-native';

interface MenuItem {
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    color: string;
    onPress?: () => void;
}

const ProfileScreen = () => {
    const menuItems: MenuItem[] = [
        {
            id: 'language',
            title: 'Language',
            icon: Languages,
            color: '#14B8A6',
        },
        {
            id: 'downloads',
            title: 'My Downloads',
            icon: Download,
            color: '#F59E0B',
        },
        {
            id: 'analytics',
            title: 'Analytics',
            icon: BarChart3,
            color: '#3B82F6',
        },
        {
            id: 'notifications',
            title: 'Notifications',
            icon: Bell,
            color: '#14B8A6',
        },
        {
            id: 'routine',
            title: 'Your Routine',
            icon: Calendar,
            color: '#F59E0B',
        },
        {
            id: 'notes',
            title: '10 Mins Notes',
            icon: BookOpen,
            color: '#EC4899',
        },
        {
            id: 'ranking',
            title: 'Ranking',
            icon: TrendingUp,
            color: '#FB923C',
        },
        {
            id: 'doubts',
            title: 'My Doubts',
            icon: HelpCircle,
            color: '#60A5FA',
        },
        {
            id: 'subscriptions',
            title: 'My Subscriptions',
            icon: CreditCard,
            color: '#C084FC',
        },
        {
            id: 'plans',
            title: 'Subscription Plans',
            icon: Wallet,
            color: '#EC4899',
        },
        {
            id: 'contact',
            title: 'Contact Us',
            icon: Headphones,
            color: '#4ADE80',
        },
        {
            id: 'logout',
            title: 'Logout',
            icon: LogOut,
            color: '#EF4444',
        },
    ];

    const renderMenuItem = ({ title, icon: Icon, color, id }: MenuItem) => (
        <View key={id}>
            <TouchableOpacity
                className="flex-row items-center py-4 px-6"
                activeOpacity={0.7}
            >
                <View
                    className="w-10 h-10 rounded-full items-center justify-center mr-6"
                    style={{ backgroundColor: color }}
                >
                    <Icon size={20} color="white" />
                </View>
                <Text
                    className={`flex-1 text-base font-medium ${
                        id === 'logout' ? 'text-red-500' : 'text-gray-900'
                    }`}
                >
                    {title}
                </Text>
                {id !== 'logout' && <ChevronRight size={20} color="#000" />}
            </TouchableOpacity>
            {id!=="logout" && id!=="contact" && <View className="border-b-2 border-gray-100 w-9/12 left-[80px]" />}
            {id==="contact" && <View className="h-3 w-full bg-amber-100/60" />}
        </View>
    );

    return (
        <View className="flex-1 bg-white">
            <StatusBar backgroundColor="#14B8A6" barStyle="light-content" />

            {/* Header */}
            <View className="bg-white h-16" />
            <View className="bg-primary px-4 pt-12 pb-6">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Image className="w-20 h-20 rounded-full ml-2 mr-6" resizeMode='contain' source={require("@/assets/images/profile.jpg")} />
                        <View>
                            <Text className="text-white text-xl font-semibold pb-2">Div</Text>
                            <Text className="text-white text-sm opacity-90">
                                Dropper(Passout)
                            </Text>
                            <Text className="text-white text-sm opacity-90">JEE</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="p-2">
                        <PencilIcon color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Scrollable Menu Items */}
            <ScrollView
                className="flex-1 bg-white"
                showsVerticalScrollIndicator={false}
            >
                <View className="pt-2">
                    {menuItems.map(renderMenuItem)}
                </View>

                {/* Extra padding at bottom for better scrolling */}
                <View className="h-4" />
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;