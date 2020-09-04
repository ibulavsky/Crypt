import React, {useState} from 'react';
import './App.css';
import {getCryptData, getRSAKey} from "./Crypto-module";

function App() {
    const [value, setValue] = useState('');
    const [privateValue, setPrivate] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const onSend = (val) => {
        let output = getCryptData(val);
        console.log('output value', output);
        setOutputValue(output);
    };

    const generate = (value) => {
        getRSAKey(value);
    };

    return (
        <div className="App">
            <div>
                <input type="text" value={privateValue} onChange={(e) => setPrivate(e.currentTarget.value)}/>
                <button onClick={() => generate(privateValue)}> generate RSA private key</button>
            </div>

            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
                <button onClick={() => onSend(value)}>Отправить</button>
            </div>

            <div className={'output'}>
                OutputValue:
                <span>{outputValue} </span>
            </div>
        </div>
    );
}

export default App;
