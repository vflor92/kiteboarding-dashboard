import SpotCard from './components/SpotCard';
import './index.css';

// Data for the 5 spots
const SPOTS = [
    {
        id: 655275,
        name: 'Crandon Park',
        safety: {
            best: 'E, NE, SE',
            good: 'N, S',
            caution: 'N, S, SE',
            dangerous: 'W, NW, SW, SSW, NNW'
        }
    },
    {
        id: 229,
        name: 'Miami Beach',
        safety: {
            best: 'NE, ENE, ESE, SE',
            good: 'N, S',
            caution: 'E',
            dangerous: 'W, NW, SW, SSW, NNW'
        }
    },
    {
        id: 208903,
        name: 'Matheson Hammock',
        safety: {
            best: 'ESE, SE',
            good: 'S, E, ENE',
            caution: 'NE',
            dangerous: 'W, NW, SW, SSW, NNW'
        }
    },
    {
        id: 208909,
        name: 'Jupiter Inlet',
        safety: {
            best: 'NE, SE',
            good: 'N, S',
            caution: 'E',
            dangerous: 'W, NW, SW, SSW, NNW'
        }
    },
    {
        id: 297,
        name: 'Islamorada',
        safety: {
            best: 'E, ENE',
            good: 'NE, SE',
            caution: 'S',
            dangerous: 'W, NW, SW, SSW'
        }
    },
];

function App() {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Kiteboarding Dashboard</h1>
                <p>Premium Local Forecasts</p>
            </header>

            <main className="dashboard-grid">
                {SPOTS.map((spot) => (
                    <SpotCard
                        key={spot.id}
                        spotId={spot.id}
                        spotName={spot.name}
                        safety={spot.safety}
                    />
                ))}
            </main>

            <footer className="dashboard-footer">
                <p>Powered by Windguru</p>
            </footer>
        </div>
    );
}

export default App;
