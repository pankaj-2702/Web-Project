import './info.css'

function Info(){
    return(
      <div className="info-box">
        <div className="demo-img">
            <img src="/images/pizza-image-1.png" alt="" id="img-sz" />
        </div>
        <div className="text-box">
             <button id="cross-btn">&#x2715;</button>
            <div className="inner-text-box">
                <h1 id="item-name">Delicious Pizza</h1>
            <p id="data-brief">
                "Our delicious pizza is crafted with the freshest ingredients, combining a perfectly baked crust, rich tomato sauce, and a generous layer of melted cheese. Each bite offers a balanced flavor experience that delights your senses, leaving you craving more. Perfect for sharing with friends and family during any occasion."
            </p>
            </div>
        </div>
      </div>
    )
}
export default Info