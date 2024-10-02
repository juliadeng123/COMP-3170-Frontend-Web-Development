import { results } from './sample_news_stories.json';
import Story from "./components/EachStory";


function App() {

  const storyList = results.map(story => <Story key={story.title} story={story} />);

  return (
    <div className="App">
      <section id="content">
        <header>
          <h1 className='apph1'>Random News Feed</h1>
        </header>

        <main className="feed">
          {storyList}
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
