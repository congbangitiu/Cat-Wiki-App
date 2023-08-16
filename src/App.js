import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, CatDetailsPage, TopCatsPage, BenefitsPage } from './pages';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<CatDetailsPage />} />
                <Route path="/top" element={<TopCatsPage />} />
                <Route path="/benefits" element={<BenefitsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
