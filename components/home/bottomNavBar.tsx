import {View, Text, TouchableOpacity} from 'react-native';
import {HomeIcon, UserProfileIcon, BellIcon, PlayIcon} from '@/assets/icons/icons';
import {Rocket} from 'lucide-react-native';
import {useState} from 'react'
import {useRouter} from 'expo-router';

interface TabProps {
    title: string;
    index: number;
    activeIndex: number;
    onPress: () => void;
    Icon: any;
}

const Tab = ({title, index, activeIndex, onPress, Icon}: TabProps) => {
    if(activeIndex === index) {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View className="items-center">
                    <View className="bg-primary/30 rounded-full w-16 h-10 items-center justify-center">
                        <Icon width={24} height={24} color="#0891b2" />
                    </View>
                    <Text className="text-sm pt-2 text-center text-primary font-bold">{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View className="items-center">
                <View className="w-16 h-10 items-center justify-center">
                    <Icon width={24} height={24} />
                </View>
                <Text className="text-sm pt-2 text-center">{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const BottomNavBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();
    return (
        <View className='absolute w-full bg-white bottom-0 z-10 flex-row px-8 pb-8 flex justify-between pt-4'
              style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: -5 },
                  shadowOpacity: 2,
                  shadowRadius: 20,
                  elevation: 10,
              }}
        >
            <Tab Icon={HomeIcon} title="Home" onPress={() => {}} activeIndex={activeIndex} index={0} />
            <Tab Icon={Rocket} title="Explore" onPress={() => {router.push("/(explore)/explore");}} activeIndex={activeIndex} index={1} />
            <Tab Icon={BellIcon} title="Unnati" onPress={() => {router.push("/(unnati)/unnati");}} activeIndex={activeIndex} index={2} />
            <Tab Icon={PlayIcon} title="Reels" onPress={() => {router.push("/(reels)/reels");}} activeIndex={activeIndex} index={3} />
            <Tab Icon={UserProfileIcon} title="Profile" onPress={() => {router.push("/(profile)/profile");}} activeIndex={activeIndex} index={4} />
        </View>
    );
}

export default BottomNavBar;