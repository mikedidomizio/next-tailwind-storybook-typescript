import {MyCustomButton} from "../components/MyCustomButton";
import {Title} from "../components/Title";
import {Dropdown} from "../components/Dropdown";

export default function Home() {
  return (
      <>
          <Title>Hello World!</Title>
          <MyCustomButton>I don&apos;t do anything!</MyCustomButton>
          <Dropdown label="My dropdown" />
      </>
  )
}
