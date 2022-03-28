/**
 * TODO: Opt
 */

import PUBLIC_KEY from '@/assets/public.key?raw';
import JSEncrypt from 'jsencrypt';

const encryptor = new JSEncrypt();
encryptor.setPublicKey(PUBLIC_KEY);

export default data => {
    const raw = typeof data === 'object' ? JSON.stringify(data) : data;
    return encryptor.encrypt(raw);
};
