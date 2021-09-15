const name='bhuvan'
const heading =(
    <h1 id='abc'>This is the {name}</h1>
);
ReactDOM.render(
    heading,
    document.getElementById('react-container')
);

const box1=(
    <div id='hi'>
        <h2 class="xyz">This is the heading 2</h2>
        <p>this would be passage for this file/web page</p>
    </div>
);
ReactDOM.render(
    box1,
    document.getElementById('second-cont')
);