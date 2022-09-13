import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/homepage.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LoggedInNavbar } from "./component/loggedinnavbar";
import TrainerProfilePage from "./views/trainerProfilePage";
import SearchPage from "./views/searchpage";
import { CompTestPage } from "./views/comptestpage";
import { LoginForm } from "./views/loginForm";
import { SignUpForm } from "./views/signUPForm";
import { TrainersProfileInfo } from "./views/traineraboutme";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <LoggedInNavbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<CompTestPage />} path="/test" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<TrainerProfilePage />} path="/trainerprofile" />
                        <Route element={<SearchPage />} path="/search/" />
                        <Route element={<LoginForm />} path="/login/" />
                        <Route element={<SignUpForm />} path="/signup/" />
                        <Route element={<TrainersProfileInfo />} path="/traineraboutme/" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
