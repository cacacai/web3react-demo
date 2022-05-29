import * as React from "react";
import "./styles.css";
import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  Box,
  Grid,
  HStack,
  StackDivider
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink
} from "react-router-dom";
import WollectView from "./pages/web3/WollectView"
import Test from "./pages/Test"


type NavLinkProps = { text: string };
const NavLink = ({ text }: NavLinkProps) => (
  <Link>
    <Text fontSize="xl">{text}</Text>
  </Link>
);

const NavBar = () => (
  <HStack spacing={3} divider={<StackDivider />} as="nav">
    <RouteLink to="/">
      <NavLink text="Home" />
    </RouteLink>
    <RouteLink to="/about">
      <NavLink text="About" />
    </RouteLink>
  </HStack>
);

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <WollectView />
          </Route>
          <Route path="/">
            <Test />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
