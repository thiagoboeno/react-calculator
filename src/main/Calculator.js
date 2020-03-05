import React, { useState } from 'react';
import { Calculator } from './styles';
import { Button } from '../components/button/styles';

import Display from '../components/display/Display';

function App() {

    const [displayValue, setDisplayValue] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [operation, setOperation] = useState(null)
    const [values, setValues] = useState([0,0])
    const [current, setCurrent] = useState(0)

    function clearMemory() {
        setDisplayValue('0')
        setClearDisplay(false)
        setOperation(null)
        setValues([0,0])
        setCurrent(0)
    }

    function addDigitOperation(op) {
        if (current === 0) {
            setOperation(op)
            setCurrent(1)
            setClearDisplay(true)
        } else {
            const allValues = [...values]

            // eslint-disable-next-line no-eval
            allValues[0] = eval(`${allValues[0]} ${operation} ${allValues[1]}`)

            setDisplayValue(allValues[0])
            setOperation(op === '=' ? null : op)
            setCurrent(op === '=' ? 0 : 1)
            setClearDisplay(op !== '=')
            setValues(allValues)
        }
    }

    function addDigit(n) {
        if (n === '.' && displayValue.includes('.')) {
            return;
        }
        
        const newClearDisplay = displayValue === '0' || clearDisplay
        const newCurrentValue = newClearDisplay ? '' : displayValue
        const newDisplayValue = newCurrentValue + n
        
        setDisplayValue(newDisplayValue)
        setClearDisplay(false)
        
        if (n !== '.') {
            const i = current
            const newValue = parseFloat(newDisplayValue)
            const newValues = [...values]
            newValues[i] = newValue
            setValues(newValues)
        }
    }

  return (
    <Calculator>
        <Display value={displayValue}/>
        <Button onClick={() => clearMemory()} triple>AC</Button>
        <Button onClick={() => addDigitOperation('/')} operation>/</Button>
        <Button onClick={() => addDigit('7')}>7</Button>
        <Button onClick={() => addDigit('8')}>8</Button>
        <Button onClick={() => addDigit('9')}>9</Button>
        <Button onClick={() => addDigitOperation('*')} operation>*</Button>
        <Button onClick={() => addDigit('4')}>4</Button>
        <Button onClick={() => addDigit('5')}>5</Button>
        <Button onClick={() => addDigit('6')}>6</Button>
        <Button onClick={() => addDigitOperation('-')} operation>-</Button>
        <Button onClick={() => addDigit('1')}>1</Button>
        <Button onClick={() => addDigit('2')}>2</Button>
        <Button onClick={() => addDigit('3')}>3</Button>
        <Button onClick={() => addDigitOperation('+')} operation>+</Button>
        <Button onClick={() => addDigit('0')} double>0</Button>
        <Button onClick={() => addDigit('.')}>.</Button>
        <Button onClick={() => addDigitOperation('=')} operation>=</Button>
    </Calculator>
  );
}

export default App;
