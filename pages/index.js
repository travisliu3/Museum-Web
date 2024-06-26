/*********************************************************************************
*  Vercel App (Deployed) Link: ___https://web422assignment6-snowy.vercel.app/________
********************************************************************************/

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Container, Row, Col } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <Container>
      <Row>
        <Col>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" alt="MET Building" className="img-fluid rounded" />
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <p>The Metropolitan Museum of Art, colloquially "the Met", is located in New York City and is the largest art museum in the United States.
            The permanent collection includes over 2 million works, divided among 17 curatorial departments. The main building, on the eastern edge
            of Central Park along Museum Mile in Manhattan, is by area one of the world's largest art galleries. A much smaller second location,
            The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from Medieval Europe.</p>
          <p>The Metropolitan Museum of Art was founded in 1870 with its mission to bring art and art education to the American people. The museum's permanent
            collection consists of works of art from classical antiquity and ancient Egypt, paintings, and sculptures from nearly all the European masters,
            and an extensive collection of American and modern art. The Met maintains extensive holdings of African, Asian, Oceanian, Byzantine, and Islamic art.
            The museum is home to encyclopedic collections of musical instruments, costumes, and accessories, as well as antique weapons and armor from around the world.
            Several notable interiors, ranging from 1st-century Rome through modern American design, are installed in its galleries.</p>
        </Col>
        <Col md={6}>
          <p>The Fifth Avenue building opened on March 30, 1880. In 2021, despite the COVID-19 pandemic in New York City, the museum attracted 1,958,000 visitors,
            ranking fourth on the list of most-visited art museums in the world.</p>
          <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art</a>
        </Col>
      </Row>
    </Container>
  );
}
