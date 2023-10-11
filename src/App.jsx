import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Steps from './components/Steps';
import Footer from './components/Footer';

function App() {
    return (
        <div className="container mx-auto flex flex-col gap-28 max-w-5xl py-10 px-5 lg:px-0">
            <Header />
            <Intro />
            <Steps />
            <Footer />
        </div>
    );
}

export default App;
