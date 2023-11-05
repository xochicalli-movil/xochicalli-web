import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { Button, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { v4 } from "uuid";
import { db } from "@/firebase";
const Backups = () => {
    const [clicked, setClicked] = useState(false);
    const [backupData, setBackupData] = useState([]);
    const onClickedBackup = async () => {
        const lastClickedString = localStorage.getItem('lastClicked');
        const lastClicked = lastClickedString ? new Date(JSON.parse(lastClickedString)) : null;
        if (!lastClicked || (new Date().getTime() - lastClicked.getTime()) > 86400000) {
            setClicked(true);
            localStorage.setItem('lastClicked', JSON.stringify(new Date()));
            await addDoc(collection(db, 'backups'), {
                backupId: v4(),
                createdBy: 'admin',
                createdAt: new Date().toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                }),
            });
            setTimeout(() => {
                setClicked(false);
            }, 86400000);
        }
    };
    const backupsUpdate = useCallback(async () => {
        const { docs } = await getDocs(collection(db, "backups"));
        const doc = docs.map((ref) => ref.data());
        setBackupData(doc);
    }, []);
    useEffect(() => {
        backupsUpdate();
    }, [clicked, backupsUpdate]);
    return (_jsxs(VStack, { minH: 'calc(100vh - 64px)', bgColor: 'gray.100', p: 4, children: [_jsx(Heading, { children: "Backups" }), _jsxs(Flex, { flexDirection: ['column', 'column', 'column', 'column', 'row'], gap: 8, pt: 6, children: [_jsxs(VStack, { bgColor: 'white', p: 4, rounded: 'lg', h: '100%', w: ['xs', 'sm'], mx: 'auto', children: [_jsx(Text, { fontWeight: 600, fontSize: 'xl', children: "Respaldar base de datos Firestore" }), _jsx(Text, { py: 4, children: "Vas a poder realizar los respaldos de la base de datos de Firestore de manera diaria." }), _jsx(Button, { isDisabled: !clicked, onClick: onClickedBackup, children: "Respaldar" })] }), _jsx(TableContainer, { bgColor: 'white', rounded: 'lg', p: 4, width: ['xs', 'sm', 'md', 'lg', '2xl'], height: '100%', children: _jsxs(Table, { variant: 'striped', children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "Fecha" }), _jsx(Th, { children: "ID de respaldo" }), _jsx(Th, { isNumeric: true, children: "Hecho por" })] }) }), _jsx(Tbody, { children: backupData.map((backup) => (_jsxs(Tr, { children: [_jsx(Td, { children: backup.createdAt }), _jsx(Td, { children: backup.backupId }), _jsx(Td, { children: backup.createdBy })] }, backup.backupId))) })] }) })] })] }));
};
export default Backups;
