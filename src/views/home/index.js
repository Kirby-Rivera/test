import React from 'react';
import {Container, Card} from 'reactstrap';
import Home from 'modules/home/Home';

function Index() {
	return (
		<Container>
			<Card className='mt-5 p-5'>
				<Home />
			</Card>
		</Container>
	);
}

export default Index;
