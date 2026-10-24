import { concat, payStatus, sum, sumOrConcat } from "./utils/math";

function App() {
    return (
        <div>
            <p>{sum(14, 2)}</p>
            <p>{concat("1", "3")}</p>
            <p>{sumOrConcat("aria", "bahrami")}</p>
            <p>{sumOrConcat(12, 2)}</p>
            <p>{payStatus("payed")}</p>
        </div>
    );
}

export default App;
