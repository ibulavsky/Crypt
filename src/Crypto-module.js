import {Crypt, RSA} from 'hybrid-crypto-js';

export const getCryptData = (data) => {
    let crypt = new Crypt({md: 'sha256'});
    let privateKey = localStorage.getItem('privateKey');
    if (privateKey) {
        console.log(crypt.signature(privateKey, data));
        let signatureObj = JSON.parse(crypt.signature(privateKey, data));
        return signatureObj.signature
    } else return  ''
};

export const getRSAKey = (value) => {
    let rsa = new RSA({ keySize: 1024, entropy: value });
    // let rsa = new RSA({entropy: value});
    rsa.generateKeyPairAsync()
        .then(keys => {
            localStorage.setItem('privateKey', keys.privateKey);
            console.log('privateKey', keys.privateKey);
        })
        .catch(error => {
            console.log(error);
        });
};