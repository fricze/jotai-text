import { createSlice, configureStore } from '@reduxjs/toolkit'
import {
    Provider,
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
    useDispatch,
} from 'react-redux'

interface TextState {
    value: string;
}

const initialState: TextState = { value: "hello" };

const textSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        change(state, { payload }: { payload: string }) {
            state.value = payload;
        },
    },
})

const { actions } = textSlice

const store = configureStore({
    reducer: {
        text: textSlice.reducer,
    }
})

type RootState = ReturnType<typeof store.getState>;

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const Input = () => {
    const dispatch = useDispatch()
    const text = useSelector(state => state.text.value)

    return <input value={text} onChange={(e) => dispatch(actions.change(e.target.value))} />
}

const CharCount = () => {
    const len = useSelector(state => state.text.value.length)
    return <div>Length: {len}</div>
}

const Uppercase = () => {
    const uppercase = useSelector(state => state.text.value.toUpperCase())
    return <div>Uppercase: {uppercase}</div>
}

const App = () => (
    <Provider store={store}>
        <Input />
        <CharCount />
        <Uppercase />
    </Provider>
)

export default App
