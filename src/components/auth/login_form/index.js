import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/users";

import {
  Button,
  Field,
  Control,
  Input,
  Column,
  Section,
  Help,
  Label,
} from "rbx";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UserService.login({
        email: email,
        password: password,
      });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToRegister) {
    navigate("../register", { replace: true });
  }
  if (redirectToNotes) {
    navigate("../notes", { replace: true });
  }

  return (
    <>
      <Column.Group centered>
        <form onSubmit={handleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                />
              </Control>
            </Field>

            <Field>
              <Label size="small">Password:</Label> {" "}
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </Control>
            </Field>

            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a
                      onClick={(e) => setRedirectToRegister(true)}
                      className="button is-white has-text-custom-purple"
                    >
                      Register or
                    </a>
                  </Column>

                  <Column>
                    <Button color="custom-purple" outlined>
                      Login
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email or Password invalid</Help>}
          </Column>
        </form>
      </Column.Group>
    </>
  );
}

export default LoginForm;
