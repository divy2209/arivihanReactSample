import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
} from 'react-native';

interface MediumOption {
    id: string;
    label: string;
    value: string;
}

interface MediumSelectionProps {
    onPress: () => void;
}

const MediumSelection: React.FC<MediumSelectionProps> = ({ onPress }) => {
    const [selectedMedium, setSelectedMedium] = useState<string>('Hindi Medium');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);
    const [dropdownLayout, setDropdownLayout] = useState<{x: number, y: number, width: number, height: number} | null>(null);
    const dropdownRef = useRef<View>(null);

    const mediumOptions: MediumOption[] = [
        { id: '1', label: 'Hindi Medium', value: 'hindi' },
        { id: '2', label: 'English Medium', value: 'english' },
    ];

    const handleDropdownPress = () => {
        if (!isDropdownOpen && dropdownRef.current) {
            dropdownRef.current.measure((x, y, width, height, pageX, pageY) => {
                setDropdownLayout({ x: x+10, y: y+580, width: 280, height });
                setIsDropdownOpen(true);
            });
        } else {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    const handleOptionSelect = (option: MediumOption) => {
        setSelectedMedium(option.label);
        setIsDropdownOpen(false);
    };

    const handleNext = () => {
        const selected = mediumOptions.find(option => option.label === selectedMedium);
        if (onPress && selected) {
            onPress();
        }
    };

    const renderOption = ({ item }: { item: MediumOption }) => (
        <TouchableOpacity
            className="px-4 py-4 border-b border-gray-100"
            onPress={() => handleOptionSelect(item)}
        >
            <Text className="text-base text-gray-800">{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-white p-5 justify-center">
            {/* Header Text */}
            <Text className="text-lg font-medium text-gray-800 mb-8 text-left">
                Aap kis medium mein padhte hain?
            </Text>

            {/* Dropdown */}
            <TouchableOpacity
                ref={dropdownRef}
                className="bg-white rounded-xl px-4 py-5 mb-6 flex-row justify-between items-center border border-gray-200 shadow-sm"
                onPress={handleDropdownPress}
                onLayout={() => {
                    if (dropdownRef.current && !dropdownLayout) {
                        dropdownRef.current.measure((x, y, width, height, pageX, pageY) => {
                            setDropdownLayout({ x: pageX, y: pageY, width, height });
                        });
                    }
                }}
            >
                <Text className="text-base text-gray-800 flex-1">{selectedMedium}</Text>
                <Text className="text-xs text-gray-500 ml-2">▼</Text>
            </TouchableOpacity>

            {/* Next Button */}
            <TouchableOpacity
                className="bg-primary rounded-xl py-5 items-center justify-center"
                onPress={handleNext}
            >
                <Text className="text-white text-base font-semibold">Next</Text>
            </TouchableOpacity>

            {/* Dropdown Modal */}
            <Modal
                visible={isDropdownOpen && dropdownLayout !== null}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsDropdownOpen(false)}
            >
                <TouchableOpacity
                    className="flex-1"
                    activeOpacity={1}
                    onPress={() => setIsDropdownOpen(false)}
                >
                    <View
                        className="bg-white rounded-xl shadow-lg border border-gray-200"
                        style={{
                            position: 'absolute',
                            top: dropdownLayout ? dropdownLayout.y + dropdownLayout.height + 4 : 0,
                            left: dropdownLayout ? dropdownLayout.x : 0,
                            width: dropdownLayout ? dropdownLayout.width : 200,
                        }}
                    >
                        <FlatList
                            data={mediumOptions}
                            renderItem={renderOption}
                            keyExtractor={(item) => item.id}
                            scrollEnabled={false}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

export default MediumSelection;