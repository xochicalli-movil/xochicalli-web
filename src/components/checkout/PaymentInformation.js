import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Card from "react-credit-cards-2";
import { formatCreditCardNumber, formatCVC, formatExpirationDate, } from "./utils";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Box, FormControl, Input, Heading, Button } from "@chakra-ui/react";
const PaymentForm = ({ dataCard }) => {
    const [data, setData] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: undefined,
        formData: null,
    });
    const handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            setData({ ...data, issuer });
        }
    };
    const handleInputFocus = ({ target }) => {
        setData({
            ...data,
            focused: target.name,
        });
    };
    const handleInputChange = ({ target }) => {
        let value = target.value;
        if (target.name === "number") {
            value = formatCreditCardNumber(value);
        }
        else if (target.name === "expiry") {
            value = formatExpirationDate(value);
        }
        else if (target.name === "cvc") {
            value = formatCVC(value);
        }
        setData({
            ...data,
            [target.name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = [...e.target.elements]
            .filter((d) => d.name)
            .reduce((acc, d) => {
            acc[d.name] = d.value;
            return acc;
        }, {});
        setData({
            ...data,
            formData,
        });
    };
    const validation = () => {
        return Object.values(data).some(value => value === "");
    };
    return (_jsx(Box, { children: _jsxs(Box, { className: "App-payment", children: [_jsx(Heading, { fontSize: "xl", children: "Ingresa tu tarjeta de credito" }), _jsx(Card, { number: data.number.slice(0, 4), name: data.name, expiry: data.expiry, cvc: data.cvc, focused: data.focused, callback: handleCallback }), _jsxs(FormControl, { onSubmit: handleSubmit, children: [_jsxs(Box, { className: "form-group", children: [_jsx(Input, { style: { margin: "20px 0" }, type: "tel", name: "number", className: "form-control", placeholder: "Card Number", required: true, pattern: "^\\d{16}$", onChange: handleInputChange, onFocus: handleInputFocus }), _jsx("small", { children: "E.g.: 49..., 51..., 36..., 37..." })] }), _jsx(Box, { className: "form-group", children: _jsx(Input, { style: { margin: "20px 0" }, type: "text", name: "name", className: "form-control", placeholder: "Name", required: true, onChange: handleInputChange, onFocus: handleInputFocus }) }), _jsxs(Box, { className: "row", children: [_jsx(Box, { className: "col-6", children: _jsx(Input, { style: { margin: "20px 0" }, type: "tel", name: "expiry", className: "form-control", placeholder: "Valid Thru", pattern: "\\d\\d/\\d\\d", required: true, onChange: handleInputChange, onFocus: handleInputFocus }) }), _jsx(Box, { className: "col-6", children: _jsx(Input, { style: { margin: "20px 0" }, type: "tel", name: "cvc", className: "form-control", placeholder: "CVC", pattern: "\\d{3,4}", required: true, onChange: handleInputChange, onFocus: handleInputFocus }) })] })] }), _jsx(Button, { background: validation() ? "gray.300" : "blue.500", color: validation() ? '' : "#fff", isDisabled: validation(), width: '100%', onClick: () => {
                    }, children: "Finalizar compra" })] }) }, "Payment"));
};
export default PaymentForm;
