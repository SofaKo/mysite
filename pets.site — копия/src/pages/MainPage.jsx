import CardPats from "../components/cardpets";
import News from "../components/news";
import Slider from "../components/slider";

function MainPage() {
    return (
        <div className="w-100">
            <Slider />
            <CardPats />
          <News />
        </div>
    );
}

export default MainPage;
