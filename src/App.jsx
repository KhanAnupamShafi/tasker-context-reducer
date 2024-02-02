import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import TaskBoard from './components/Tasker/TaskBoard';
import ContextsProvider from './components/contextApi';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContextsProvider>
        <TaskBoard />
      </ContextsProvider>
      <Footer />
    </>
  );
}

export default App;
