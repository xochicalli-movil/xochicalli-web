import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Heading, IconButton, Input, Select, Stack, useColorModeValue, Text, } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context";
import PaymentForm from "./PaymentInformation";
import axios from "axios";
import { guardarDireccion, queryUser } from "@/utils/firebase";
const ShippingInformation = () => {
    const { userInformation } = useContext(UserContext);
    const [dataCard, setDataCard] = useState({
        name: "",
        address: "",
        code: "",
        state: "Puebla",
        city: "Acajete",
        email: "",
    });
    const uid = localStorage.getItem("uid");
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [payment, setPayment] = useState(false);
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados-municipios.json";
        axios
            .get(url)
            .then((response) => {
            setData(response.data);
        })
            .catch((error) => {
            console.error("Error load state Mexico JSON:", error);
        });
    }, []);
    const data1 = [
        {
            FormLabel: "Nombres y apellidos",
            name: "name",
            placeholder: "Callie Nun",
            value: dataCard.name,
            validation: () => dataCard.name.trim().length > 0,
        },
        {
            FormLabel: "Dirección completa",
            name: "address",
            placeholder: "123 Ejemplo St",
            value: dataCard.address,
            validation: () => dataCard.address.trim().length > 0,
        },
        {
            FormLabel: "Correo electrónico",
            name: "email",
            placeholder: "you@exmaple.com",
            value: dataCard.email,
            validation: () => {
                const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regularExpression.test(dataCard.email);
            },
        },
    ];
    const getCityPostalCodes = async (stateName) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${stateName},+${dataCard.state},+Mexico&key=f299b88cb2724371afc4605625880341`);
            if (response.data.results.length > 0) {
                const result = response.data.results[response.data.results.length - 1];
                const citiesAndPostalCodes = result.components.postcode;
                setDataCard({ ...dataCard, code: citiesAndPostalCodes });
                return citiesAndPostalCodes;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.error("Error al obtener ciudades y códigos postales:", error);
            return null;
        }
    };
    useEffect(() => {
        getCityPostalCodes(dataCard.city);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataCard.city]);
    const validation = () => {
        const validation = Object.values(dataCard).some(value => value === "");
        return validation;
    };
    useEffect(() => {
        const getDataUser = async () => {
            if (uid) {
                const dataUser = await queryUser(uid);
                if (dataUser.name &&
                    dataUser.fatherSurname &&
                    dataUser.motherSurname &&
                    dataUser.email)
                    setDataCard({
                        ...dataCard,
                        name: dataUser.name +
                            " " +
                            dataUser.fatherSurname +
                            " " +
                            dataUser.motherSurname,
                        email: dataUser.email,
                    });
            }
        };
        getDataUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsxs(Stack, { spacing: { base: "6", md: "8" }, children: [_jsxs(Stack, { direction: "row", spacing: 8, children: [_jsx(IconButton, { "aria-label": "back", icon: _jsx(ArrowBackIcon, {}), onClick: () => { payment ? setPayment(false) : navigate("/cart"); }, w: "max-content" }), _jsx(Heading, { size: "lg", children: "Informaci\u00F3n de env\u00EDo" })] }), !payment ? (_jsx(Stack, { spacing: { base: "6", md: "6" }, children: userInformation.address === null ? (_jsx(Button, { onClick: () => navigate(`/user/profile/${uid}/addresses`), colorScheme: "blue", variant: "link", children: "Agrega una direcci\u00F3n primero" })) : (_jsxs(_Fragment, { children: [data1.map((input, index) => {
                            return (_jsxs(FormControl, { id: input.name, children: [_jsx(FormLabel, { style: { fontWeight: 600 }, color: useColorModeValue("gray.700", "gray.200"), children: input.FormLabel }), _jsx(Input, { value: input.value, onChange: (e) => {
                                            setDataCard((prevDataCard) => ({
                                                ...prevDataCard,
                                                [input.name]: e.target.value,
                                            }));
                                        }, name: input.name, placeholder: input.placeholder, focusBorderColor: useColorModeValue("blue.500", "blue.200") }), !input.validation() && (_jsx(Text, { color: "tomato", children: "Este campo no puede estar vacio" }))] }, index));
                        }), _jsx(FormLabel, { style: { fontWeight: 600 }, color: useColorModeValue("gray.700", "gray.200"), children: "Estado" }), _jsx(Select, { value: dataCard.state, onChange: (e) => setDataCard({ ...dataCard, state: e.target.value }), placeholder: "Estado", size: "md", children: Object.keys(data).map((option, index) => (_jsx("option", { value: option, children: option }, index))) }), _jsx(FormLabel, { style: { fontWeight: 600 }, color: useColorModeValue("gray.700", "gray.200"), children: "ciudad" }), _jsx(Select, { value: dataCard.city, onChange: (e) => {
                                setDataCard({ ...dataCard, city: e.target.value });
                                getCityPostalCodes(e.target.value);
                            }, placeholder: "ciudad", size: "md", children: data[dataCard.state]?.map((option, index) => (_jsx("option", { value: option, children: option }, index))) }), _jsxs(FormControl, { id: "code", children: [_jsx(FormLabel, { style: { fontWeight: 600 }, color: useColorModeValue("gray.700", "gray.200"), children: "Codigo Postal" }), _jsx(Input, { name: dataCard.code, value: dataCard.code, placeholder: "Codigo Postal", focusBorderColor: useColorModeValue("blue.500", "blue.200") })] }), _jsx(Button, { background: validation() ? "gray.300" : "blue.500", color: validation() ? '' : "#fff", isDisabled: validation(), onClick: () => {
                                guardarDireccion(uid, dataCard);
                                setPayment(true);
                            }, children: "Continuar" })] })) })) : (_jsx(_Fragment, { children: _jsx(PaymentForm, { dataCard: dataCard }) }))] }));
};
export default ShippingInformation;
