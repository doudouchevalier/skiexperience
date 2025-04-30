import CarouselHero from "../components/CarouselHero";
import PopularProductsRow from "../components/PopularProductRow";

function Home() {
    return (
      <>
        <CarouselHero />
          <div className="mt-10 mb-4 px-4 ml-24">
            <h2 className="text-2xl font-bold text-zinc-900">
              Les produits populaires du moment 🔥
            </h2>
          </div>


        <PopularProductsRow />
      </>
    );  
      
  }
  
  export default Home