import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import TaskBoard from './components/Tasker/TaskBoard';
import TasksProvider from './components/contextApi';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TasksProvider>
        <TaskBoard />
      </TasksProvider>
      <Footer />
    </>
  );
}

export default App;
