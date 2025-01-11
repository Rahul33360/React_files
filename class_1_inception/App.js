const head = React.createElement(
  "h1",
  {
    id: "welcome message",
  },
  "Hello React! "
);

const root = ReactDOM.createRoot(document.getElementById("root"));



const head2 = React.createElement("h2", {
  id:"head2",
}, "Hello .createElement of React");

const container = React.createElement("div", {
  id:"container"
},[head,head2]);





root.render(container);