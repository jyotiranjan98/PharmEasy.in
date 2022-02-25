function navbar(){
    return `    <header>
    <div id="header1">
      <img
        src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
        alt="logo"
        onclick="(location.href ='index.html')"
      />

      <div class="select">
        <p id="pinhere">Select Pincode</p>
        <img
          src="https://image.flaticon.com/icons/png/128/25/25243.png"
          alt="f"
          id="useme1234"
        />

        <div>
          <input
            type="text"
            placeholder="Search for Medicines / Healthcare Products"
            class="Search"
            id="search1234"
            onclick="(location.href='./filter.html')"
          />
        </div>
        <a class="search" onclick="searchmed()"
          ><img
            src="https://image.flaticon.com/icons/png/128/2089/2089805.png"
            alt="s"
        /></a>
      </div>
      
    </div>
    <div id="header2">
      <div class="downhead">
        <span
          ><a href="#" style="color: white"
            >Order Medicines</a
          ></span
        >
        <span
          ><a href="filter.html" style="color: white"
            >Healthcare Products</a
          ></span
        >
        <a href="#" style="color: white"
          >Lab Tests</a
        >
        <a href="#" style="color: white; margin-left: 35px;"
          >RTPCR</a
        >
      </div>
      <div class="righthead" id="rit">
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg"
          alt=""
          onclick="(location.href ='#')"
        />
        <p><a href="#" style="color: white">Offers</a></p>

        <img src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" />
        <p id="makemeuser">
          <a href="#" style="color: white" id="useme">Login/Signup</a>
        </p>
        <p id="useruser">User</p>

        <img
          src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg"
          alt=""
          onclick="(location.href='.cart.html')"
        />
        <p><a href="cart.html" style="color: white">Cart</a></p>
      </div>
    </div>
  </header>`
}

export default navbar