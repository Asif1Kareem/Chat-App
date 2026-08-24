import { VStack, Field, Input, InputGroup, Button } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pic, setPic] = useState("");

  const handleClick = () => setShowPassword(!showPassword);

  const postDetails = (pics) => {};

  const submitHandler = () => {};

  return (
    <VStack gap="5px" color="black">
      <Field.Root id="first-name" required>
        <Field.Label>Name</Field.Label>
        <Input
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field.Root>

      <Field.Root id="email" required>
        <Field.Label>Email</Field.Label>
        <Input
          type="email"
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field.Root>

      <Field.Root id="password" required>
        <Field.Label>Password</Field.Label>

        <InputGroup
          endElement={
            <Button size="xs" variant="ghost" onClick={handleClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          }
        >
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </Field.Root>

      <Field.Root id="password" required>
        <Field.Label>Confirm Password</Field.Label>

        <InputGroup
          endElement={
            <Button
              size="xs"
              variant="ghost"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </Button>
          }
        >
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </InputGroup>
      </Field.Root>

      <Field.Root id="pic" required>
        <Field.Label>Upload your Picture</Field.Label>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </Field.Root>

      <Button
        colorPalette="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        SignUp
      </Button>
    </VStack>
  );
};

export default Login;
