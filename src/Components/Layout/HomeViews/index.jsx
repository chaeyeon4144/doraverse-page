//Doraverse HomeView
import Header from "../Header";
import Intro from "../Intro";
import Skill from "../Skill";
import Port from "../Port";
import Contact from "../Contact";
import Footer from "../Footer";
import Skip from "../Skip";
import Main from "../Main";
import Site from "../Site";

const HomeViews = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
      홈입니다
    </>
  );
};
export default HomeViews;
