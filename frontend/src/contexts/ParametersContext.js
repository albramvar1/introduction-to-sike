import {createContext, useContext, useReducer} from 'react';

const initialParameters = {
    key: "(8822172302492736560242402888054400870822047918291502864565593332365128463451887391264093881481087738983965192938550611244047495346i + 13417559746710551966356525474809898304330551446138126388411497741413713044182010308294765678540645796950549671526684826157596363665, 8363502068884834987349385564086714912371095961007759981526991968387349262185885968764879439049070107587072572076742525730092660097i + 24321498979020152485811991098090258960817334509370018289064917044250491245282527412709557936916030826377378801537323588467229232822, 19609469464038878087719611730167283949464315426952829452067417098339400613019339440184055059649634467563870811184195942523291197469i + 18846932398187501989412678432927083722487974871748797810051023027178308769120684644263904464229512096346316164708842920826413684953)",
    keyBytes: "WoRLTnni/+8qS2+oNsyt0Q==",
    message: "Hello, world!",
    encodedMessage: "EuEnIhbO35hFOQPMFw==",
    decodedMessage: "Hello, world!",
}

const ParametersContext = createContext(initialParameters);
export const ParametersDispatchContext = createContext(parametersReducer);

function useParameters() {
    return useContext(ParametersContext);
}

function useParametersDispatcher() {
    return useContext(ParametersDispatchContext);
}

function parametersReducer(parameters, action) {
    parameters[action.name] = action.value;
}

function ParametersProvider({ children }) {
    const [parameters, dispatch] = useReducer(
        parametersReducer,
        initialParameters
    )

    return (
        <ParametersContext value={parameters}>
            <ParametersDispatchContext value={dispatch}>
                {children}
            </ParametersDispatchContext>
        </ParametersContext>
    )
}

export { ParametersContext, initialParameters, useParameters, useParametersDispatcher, ParametersProvider };