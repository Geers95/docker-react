import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// docker run -f Dockerfile.dev
// docker build . 
// docker build -t geers/test 
// docker-compose up --build
// docker-compose down 
// docker run -it geers/test sh
// docker exec geers/test sh 
// docker ps 
// docker kill 
// docker stop 
// docker run -p 3000/3000 
// docker system prune : supprimer
// docker attach :id : pour attacher le conteneur au terminal
