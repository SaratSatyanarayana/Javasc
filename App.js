    
    
    const heading = React.createElement("div",{},
        React.createElement("div",{id:"parent"},
        [React.createElement("h1",{id:"child"},"Child1"),React.createElement("h2",{id:"child2"},"Child2")]
    ));
            const root = ReactDOM.createRoot(document.getElementById("temp"));
            root.render(heading);