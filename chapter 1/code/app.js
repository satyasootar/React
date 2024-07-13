const heading = React.createElement("h1", {}, "Hello World") 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);

const contain = React.createElement("p", {id: "heading", class:"headbox"} , "I am satya");
const box = document.getElementById("container")
const container = ReactDOM.createRoot(box);
container.render(contain); 