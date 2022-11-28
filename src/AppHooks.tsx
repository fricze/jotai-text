import { useState } from 'react';

const Input = ({ text, setText }: { text: string; setText: (t: string) => void; }) => {
    return <input value={text} onChange={(e) => setText(e.target.value)} />
}

const CharCount = ({ len }: { len: number; }) => {
    return <div>Length: {len}</div>
}

const Uppercase = ({ uppercase }: { uppercase: string; }) => {
    return <div>Uppercase: {uppercase}</div>
}

const App = () => {
    const [text, setText] = useState("hello");
    const len = text.length;
    const uppercase = text.toUpperCase();

    return (
        <div>
            <Input text={text} setText={setText} />
            <CharCount len={len} />
            <Uppercase uppercase={uppercase} />
        </div>
    )
}

export default App
