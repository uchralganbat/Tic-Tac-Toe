import './App.css';
//import Board from './Board';
import Board from './Game'
import './Board.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Board />
    </Container>
  );
}

export default App;
