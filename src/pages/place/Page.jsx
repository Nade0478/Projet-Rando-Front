import React from "react";
import PlaceList from "../../components/Place/PlaceList";
import PlaceForm from "../../components/Place/PlaceForm";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const App = () => {
    return (
        <div>
        <Menu />
            <PlaceForm />
            <PlaceList />
        <Footer />
        </div>
    );
};

export default App;
