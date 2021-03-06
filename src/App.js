import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, resetMyCounter } from './store/actions';
import Text from './text';
import Button from './button';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {counters} = useSelector(state => state.counters)
  const onIncrement = () => dispatch(incrementCounter());
  const onReset = () => dispatch(resetMyCounter());
  const handleClick = e => {
    onIncrement();
  }
  const resetCounter = e => {
    onReset();
  }
  return (
    <div className="App">
      <Button
        handleClick={e => handleClick(e)}
        primaryText='Click me'
        primaryColor='green'
      />
      <Text text={counters} />
      <Button
        handleClick={e => resetCounter(e)}
        primaryText='Reset counter'
        primaryColor='violet'
      />
    </div>
  );
}

export default App;
