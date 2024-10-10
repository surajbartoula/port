import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;
const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Logo = styled.img`
	width: 100px;
	height: 70px;
`;
const List = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
`;

const ListItem = styled.li`
	cursor: pointer;
`;
const Icon = styled.img`
	width: 45px;
	cursor: pointer;
`;
const Button = styled.button`
	width: 100px;
	background-color: #da4ea2;
	padding: 10px;
	color: white;
	border: none;
	cursor: pointer;
`;

export default function Navbar() {
  return (
	<Section>
		<Container>
			<Links>
			<Logo src="./img/logo.png" />
			<List>
				<ListItem>Home</ListItem>
				<ListItem>About</ListItem>
				<ListItem>Works</ListItem>
				<ListItem>Contact</ListItem>
			</List>
			</Links>
			<Icons>
				<Icon src="./img/search.png"/>
				<Button>Contact me</Button>
			</Icons>

		</Container>
	</Section>
  )
}
