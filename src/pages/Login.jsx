import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  padding: 20px;
  ${mobile({ width: "50%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%; /* Cant be smaller than 40 percent but can be bigger than this*/
  margin: 10px 0;
  padding: 5px;
  ${mobile({ margin: "10px 0" })}
`;

const Button = styled.button`
  padding: 10px 20px;
  float: right;
  right: 0;
  position: absolute;
  bottom: 2px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 2px;
  margin-bottom: 10px;
  ${mobile({ flexEnd: "right", width: "30%", height:"10%",
   display: "flex", justifyContent: "center", alignItems: "center"
  })}
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  margin: 5px 0;
  ${mobile({ fontSize: "7px" })}
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO YOU REMEMBER YOUR PASSWORD ? </Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
