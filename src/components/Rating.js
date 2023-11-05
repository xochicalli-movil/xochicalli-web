import { jsx as _jsx } from "react/jsx-runtime";
import { HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
export const Rating = (props) => {
    const { defaultValue = 0, max = 5, size = 'md', rootProps } = props;
    const color = useColorModeValue('gray.200', 'gray.600');
    const activeColor = useColorModeValue('yellow.300', 'yellow.200');
    return (_jsx(HStack, { spacing: "0.5", ...rootProps, children: Array.from({ length: max })
            .map((_, index) => index + 1)
            .map((index) => (_jsx(Icon, { as: FaStar, fontSize: size, color: index <= defaultValue ? activeColor : color }, index))) }));
};
