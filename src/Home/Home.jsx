import Gallery from "./Gallery/Gallery";
import HeroContainer from "./Hero/HeroContainer";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
    return (
        <section>
            <HeroContainer></HeroContainer>
            <div className="max-w-screen-xl mx-auto">
              <Gallery></Gallery>
              <PopularClasses></PopularClasses>
            </div>
        </section>
    );
};

export default Home;