const heading = React.createElement(
    'h1',
    {id:'abc'},
    'this is the heading'
);
ReactDOM.render(
    heading,
    document.getElementById('react-container')
);

const passage=React.createElement(
    'p',
    null,
    'this would be passage for this file/web page'
);
const heading2=React.createElement(
    'h2',
    {className: 'xyz'},
    'this is the content of heading 2'
);
const box1=React.createElement(
    'div',
    {id:'hi'},
    passage,
    heading2
);
ReactDOM.render(
    box1,
    document.getElementById('second-cont')
);