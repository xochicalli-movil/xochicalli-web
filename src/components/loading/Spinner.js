import { jsx as _jsx } from "react/jsx-runtime";
import { VStack, Spinner as Loader } from "@chakra-ui/react";
export const Spinner = () => (_jsx(VStack, { minH: '100vh', alignItems: 'center', justifyContent: 'center', children: _jsx(Loader, { size: 'xl' }) }));
