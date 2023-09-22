
import Nav from "./1"
import Hero from "./2"
import Card from "./3"
import Data from "./4"

function App(){

  const cards = Data.map(item => {
    return (
      <Card
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
          openSports={item.openSpots}
          location={item.location}
      />
    )
  })  
  return(
    <div>
      <Nav/>
      <Hero/>
      <section className="card--list">
          {cards}
      </section>
    </div>
  )
}
export default App