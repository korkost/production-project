import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    return (
        <Routes>
            {/* нам нужен массив значений, воспользуемся функцией, таким образом
        мы получим только нужные значения которые будем передавать как
        пропсы в компонент роут, через декстуризация сразу вытащим путь и
        елемент, чтобы потом их использовать более удобно. */}
            {Object.values(RouteConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
