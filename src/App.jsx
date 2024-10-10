import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	background-color: rebeccapurple;
	overflow-y: auto;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	color: white;
	background: url("./img/bg.gif") no-repeat center center/cover;
`;

function App() {


  return (
    <Container>
		<Hero />
		<Who />
		<Works />
		<Contact />
	</Container>
  )
}

export default App
