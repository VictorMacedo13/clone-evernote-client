import Header from "./../../../components/Header/index";
import { Column, Section, Title, Container, Card } from "rbx";
import Logo from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";
import "../../../components/auth/register_form";
import RegisterForm from "./../../../components/auth/register_form/index";

const RegisterScreen = () => (
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
                      <img src={Logo} />
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
                <RegisterForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
);

export default RegisterScreen;
