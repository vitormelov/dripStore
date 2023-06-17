import FeaturedCollections from "../../Components/FeaturedCollections";
import FeaturedCollectionsIcons from "../../Components/FeaturedCollectionsIcons";
import HotProducts from "../../Components/HotProducts";
import Spotlight from "../../Components/Spotlight";
import Stepper from "../../Components/Stepper";

export default function Home() { 
    return (
      <div>
        <Stepper/>

        <FeaturedCollections/>

        <FeaturedCollectionsIcons/>

        <HotProducts/>

        <Spotlight/>
      </div>
    )
  }