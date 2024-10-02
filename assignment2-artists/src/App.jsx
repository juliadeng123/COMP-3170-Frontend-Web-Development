import { artists } from './best-selling-music-artists';
import ArtistDetails from "./components/ArtistDetails";


function App() {

  const artistList = artists.map(artist => <ArtistDetails key={artist.name} artist={artist} />);

  return (
    <div class="app">
      <section id="content">
        <header>
          <h1>Best-selling music artists</h1>
        </header>

        <main class="artistDetails">
          {artistList}
        </main>
      </section>

      <footer>
        <div>
          &copy; Julia Deng, 2024
        </div>
      </footer>
    </div>
  );
}

export default App;
