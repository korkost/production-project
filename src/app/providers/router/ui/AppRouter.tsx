import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            // нам нужен массив значений, воспользуемся функцией, таким образом 
            // мы получим только нужные значения которые будем передавать как
            // пропсы в компонент роут, через декстуризация сразу вытащим путь и
            // елемент, чтобы потом их использовать более удобно.
            {Object.values(RouteConfig).map(({element, path}) => (
                <Route
                key={path}
                path={path}
                element={element}
                />
             ))}
        </Routes>
    </Suspense>
    );
};

export default AppRouter;