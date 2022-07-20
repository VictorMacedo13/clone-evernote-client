import Header from "./../../../components/Header/index";
import { Card, Column, Container, Section, Title } from "rbx";
import LogoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";
import LoginForm from "../../../components/auth/login_form";

const LoginScreen = () => (
  <>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12}>
                      <img src={LogoImage} />
                    </Column>
                  </Column.Group>

                  <Column.Group>
                    <Column size={12}>
                      <Title
                        size={6}
                        className="has-text-grey has-text-centered"
                      >
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Column.Group>
                </Section>
                <LoginForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
);

export default LoginScreen;
