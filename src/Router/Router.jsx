import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Services from '../Components/Services/Services';
import Portfolio from '../Components/Portfolio/Portfolio';
import Contract from '../Components/Contract/Contract';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
         children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/skills", element: <Skills /> },
            { path: "/services", element: <Services /> },
            { path: "/portfolio", element: <Portfolio /> },
            { path: "/contact", element: <Contract /> },
        ],
    }
])

export default Router;