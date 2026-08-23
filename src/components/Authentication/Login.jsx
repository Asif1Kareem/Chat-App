import { VStack, Field, Input, InputGroup, Button } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const guestUserHandler = () => {
    setEmail("guest@example.com");
    setPassword("guest123");
  };

  const submitHandler = () => {
    console.log("Login clicked");
    console.log(email, password);
  };

  return (
    <VStack id="login-form" gap="5px" color="black">
      <Field.Root id="email-field" required>
        <Field.Label id="email-label">Email</Field.Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field.Root>

      <Field.Root id="password-field" required>
        <Field.Label id="password-label">Password</Field.Label>

        <InputGroup
          id="password-group"
          endElement={
            <Button
              id="password-toggle"
              size="xs"
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          }
        >
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </Field.Root>

      <Button
        id="login-button"
        colorPalette="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>

      <Button
        id="guest-user-button"
        colorPalette="red"
        width="100%"
        style={{ marginTop: 10 }}
        onClick={guestUserHandler}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
