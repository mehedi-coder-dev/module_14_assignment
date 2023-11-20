import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const Layout = (prop) => {
    return (
        <>
            <Menu/>
             {prop.children}

            <Footer/>
            
        </>
    );
}

export default Layout;
