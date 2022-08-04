import { createRoot } from 'react-dom/client';
import store from './redux/store'
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
store.subscribe(() => root.render(<App/>));
