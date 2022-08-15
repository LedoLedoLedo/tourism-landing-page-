import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="firstDiv">
      <header>
        <nav className="navright">
          <h1>ANTILLA</h1>
          <ul class="nav">
            <li>
              <a href="#">Lodging</a>
            </li>
            <li>
              <a href="#">DayTours</a>
            </li>
            <li>
              <a href="#">Multi-Day Tours</a>
            </li>
            <li>
              <a href="#">Attractions</a>
            </li>
          </ul>
          <div className="btn-container">
            <button>Contact Us</button>
          </div>
        </nav>
      </header>
      <div className="textwrap">
        <div className="card">
          <h1>Tourist Agency in La Habana, Cuba</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            blandit volutpat maecenas volutpat. Sed id semper risus in hendrerit
            gravida rutrum quisque. Leo urna molestie at elementum. Cum sociis
            natoque penatibus et. Vulputate dignissim suspendisse in est ante
            in. Non consectetur a erat nam. Suspendisse faucibus interdum
            posuere lorem ipsum dolor sit amet consectetur. Purus semper eget
            duis at tellus. Ac orci phasellus egestas tellus rutrum tellus
            pellentesque eu tincidunt.
          </p>
          <div className="btn-container">
            <button>Learn More</button>
            <button>Popular places</button>
          </div>
        </div>
      </div>

      <footer className="foot">
        <div className="formWrapper">
          <form action="/" method="get">
            <label htmlFor="header-search">
              <span className=""></span>
            </label>
            <input
              type="text"
              id="header-search"
              placeholder="Search for activities"
              name="s"
              required
            />
            <label htmlFor="date">choose date</label>
            <input
              type="date"
              id="header-search"
              value=""
              name="s"
              min="2022-07-23"
              max="2030-12-31"
              required
            />
            <button type="submit">=></button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
