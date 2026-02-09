function HeroSection() {

 /* const stats = [
    { number: "500+", label: "Trusted Vendors", icon: FaStore },
    { number: "50K+", label: "Premium Products", icon: FaShoppingBag },
    { number: "100K+", label: "Happy Parents", icon: FaStar }
  ];
*/
  return (
    <section className="bg-linear-to-r from-amber-50 via-orange-50 to-amber-50">
      <div>
        <div>
          <p>Premium Quality Guaranteed</p>
          <h2>Everything Your Baby Needs</h2>
          <p>Shop from trusted vendors.Best prices guaranteed.Fast and safe delivery done country wide</p>
          <button>Shop Now</button>
          <button>Browse Vendors</button>
          <hr/>
          <div>
            <div>
            <p>500 + </p>
            <p>Trusted Vendors</p>
            </div>
            <div>
            <p>50K +</p>
            <p>Premium Products</p>
            </div>
            <div>
            <p>100K +</p>
            <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/top-view-yellow-sweater-with-toys_23-2148251496.jpg?t=st=1770621866~exp=1770625466~hmac=d88899ce8e4329d24bf33d488b02c631e4d1dc4fdd2cef6fd3a47c18d0c6efbc"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;