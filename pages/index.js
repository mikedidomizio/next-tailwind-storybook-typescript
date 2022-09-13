import {MyCustomButton} from "../components/MyCustomButton";
import {Title} from "../components/Title";
import {Dropdown} from "../components/Dropdown";
import {LayerDirectiveSubHeader} from "../components/LayerDirectiveSubHeader";

export default function Home() {
  return (
      <>
          <Title>Hello World!</Title>
          <LayerDirectiveSubHeader>Tailwind auto applied red!</LayerDirectiveSubHeader>
          <MyCustomButton>I don&apos;t do anything!</MyCustomButton>
          <Dropdown label="My dropdown" />
      </>
  )
}
