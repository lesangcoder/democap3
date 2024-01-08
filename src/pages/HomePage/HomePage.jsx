import React from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import ListMovie from "../../Components/ListMovie/ListMovie";
import TabMovie from "../../Components/TabMovie/TabMovie";
import AppHome from "../../Components/AppHome/AppHome";
import News from "../../Components/News/News";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <ListMovie />
      <TabMovie />
      <AppHome/>
      <News/>
      <Footer/>
    </div>
  );
};

export default HomePage;
