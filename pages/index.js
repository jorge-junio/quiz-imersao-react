import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

//fazendo o componente através de uma tag function
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{ db.title }</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{ db.descricao }</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>{ db.title }</h1>

            <p>{ db.descricao }</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jorge-junio/quiz-imersao-react"/>
    </QuizBackground>
  );
}
