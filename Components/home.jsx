import './home.css'

function Home(){
    return(
        <main className='home-layout'>
           <div className="text-area">
            <div className="text">
                 <h1 className='home-img-lines'>
               Experience the Art of Fine Dining
            </h1>
            <p id="tagline">Savor handcrafted dishes made with passion and the freshest ingredients.</p>
            </div>
            <a href="#menu" id="home-btn">Explore Menu</a>
           </div>
           
        </main>
    )
}
export default Home