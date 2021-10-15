import 'antd/dist/antd.css';
import styles from './App.module.scss';
import Events from './components/events/Events';

function App() {
  return (
    <div className={styles.app}>
      <Events />
    </div>
  );
}

export default App;
