const parent = React.createElement("div",{id:"parent"},
    [ React.createElement("div",
   {id:"child 1"},
       
   [ React.createElement("h1",
       {},"I'm h1 tag ok"),React.createElement("h2",{},"I'm h2 tag") ] ), React.createElement("div",{id:"child 2"},
          [ React.createElement("h1",{},"I'm h1 Tag"),React.createElement("h2",{},"I'm h2 tag") ]
    ) ]
   );
   console.log(parent);
   
   const root = ReactDOM.createRoot(document.getElementById("root")); 
   
   root.render(parent); 