// <div id="parent">
// 
const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "im h1 from my aprent"),
        React.createElement("h2", {}, "im h2 from my aprent")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "im h1 from my aprent"),
        React.createElement("h2", {}, "im h2 from my aprent")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.7c0ccee6.js.map
