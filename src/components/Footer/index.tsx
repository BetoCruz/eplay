import { Container, SectionTitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link>RPG</Link>
            </li>
            <li>
              <Link>Ação</Link>
            </li>
            <li>
              <Link>Aventura</Link>
            </li>
            <li>
              <Link>Esportes</Link>
            </li>
            <li>
              <Link>simulação</Link>
            </li>
            <li>
              <Link>Estratégia</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection className="container">
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promoções</Link>
            </li>
            <li>
              <Link>Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; Magoplay Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
