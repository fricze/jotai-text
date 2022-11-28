import { useState, createContext } from 'react';

const TextContext = createContext({ text: "hello", setText: (t: string) => {} });

const Input = () => {
    return <TextContext.Consumer>
        {({ text, setText }) => <input value={text} onChange={(e) => setText(e.target.value)} />}
    </TextContext.Consumer>
}

const CharCount = () => {
    return <TextContext.Consumer>
        {({ text }) => <div>Length: {text.length}</div>}
    </TextContext.Consumer>
}

const Uppercase = () => {
    return <TextContext.Consumer>
        {({ text }) => <div>Uppercase: {text.toUpperCase()}</div>}
    </TextContext.Consumer>
}

const App = () => {
    const [text, setText] = useState("hello");

    return (
        <TextContext.Provider value={{ text: text, setText: setText }}>
            <Input />
            <CharCount />
            <Uppercase />
        </TextContext.Provider>
    )
}

export default App
