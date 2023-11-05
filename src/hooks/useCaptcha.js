import { useEffect, useState } from 'react';
import { RecaptchaVerifier } from 'firebase/auth';
import { auth } from '@/firebase';
export const useCaptcha = (compId) => {
    const [captcha, setCaptcha] = useState();
    useEffect(() => {
        const recaptchaVerifier = new RecaptchaVerifier(compId, {
            'size': 'invisible',
            'callback': () => { },
        }, auth);
        setCaptcha(recaptchaVerifier);
        return () => {
            recaptchaVerifier.clear();
        };
    }, [compId]);
    return captcha;
};
