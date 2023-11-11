import styled from 'styled-components';
// @ts-ignore
import { ReactComponent as Circle } from '../../assets/images/icons/circle.svg';
// @ts-ignore
import { ReactComponent as Row } from '../../assets/images/icons/row-image.svg';
import jusley from '../../assets/images/jusley.png';
import Title from '../Title/title.component';
// @ts-ignore
import { ReactComponent as Gradient } from '../../assets/images/icons/gradient.svg';

export const About = () => (
  <AboutWrapper>
    <ProfileWrapper>
      <CircleIcon />
      <Profile />
      <RowIcon />
    </ProfileWrapper>

    <GradientImage />
    <Text>
      <Title title="Sobre" />
      <p>
        Oie, me chamo Jusley. Vou me apresentar rapidamente para vocês, mas
        primeiramente, vou tentar te ensinar a pronúncia do meu nome: Jus-lei
        (sim, o y tem som de i). Se preferir, pode me chamar de Ju, fica mais
        fácil de lembrar!
      </p>
      <p>
        Bom, sou formada em Ciência da Computação pela UFS e trabalho com
        desenvolvimento Front-end desde 2017, sou apaixonada por computação
        gráfica, na área de renderização realista com foco em câmeras (daí que
        surgiu meu amor por fotografia).
      </p>
      <p>
        Sou fotógrafa nas horas vagas, karateca e crocheteira. Essa sou eu. E
        como uma pessoa que ama fotografia, karatê, crochê, computação gráfica e
        front-end pode agregar a você? Manda mensagem que posso te contar... ;)
      </p>
    </Text>
  </AboutWrapper>
);

const AboutWrapper = styled.div`
  gap: 64px;
  grid-area: about;
  display: flex;
  align-items: center;
  padding-inline: 70px;

  @media (max-width: 800px) {
    gap: 40px;
    flex-direction: column;
  }

  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
  }
`;

const CircleIcon = styled(Circle)`
  left: 10px;
  position: absolute;
`;
const GradientImage = styled(Gradient)`
  top: 270px;
  width: 900px;
  position: absolute;
`;

const ProfileWrapper = styled.div`
  position: relative;
`;

const Profile = styled.div`
  width: 225px;
  height: 210px;
  margin-top: 12px;
  border-radius: 50%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${jusley});
`;

const RowIcon = styled(Row)`
  left: 0;
  top: 30px;
  position: absolute;
`;

const Text = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 16px;
  }
`;

export default About;
