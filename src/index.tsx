import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";
import {render} from "react-dom"

render(
    <BrowserRouter>
       <ThemeProvider>
           <App />
       </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)