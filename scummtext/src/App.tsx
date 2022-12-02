import type { Component } from "solid-js";
import { MainLayout } from "./layouts/layout";
import Room1 from "./routes/room1";
const App: Component = (props) => {
  console.log(props);

  return (
    <MainLayout>
      <Room1 />
    </MainLayout>
  );
};

export default App;
