console.log('yep app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['Item one', 'Item two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Vittorio Marino',
    age: 19,
    location: 'Milano'
}

const getLocation = function(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }   
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}        
        {getLocation(user.location)}                
    </div>
);

let count = 0;

const handleAddOne = () => {
    count++; 
    render();  
};

const handleMinusOne = () => {
    count--; 
    render();   
};

const handleReset = () => {
    count = 0;    
    render();
};

const appRoot = document.getElementById('app');

const render = () => {

    const templateThree = (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleAddOne}>+1</button>
            <button onClick={handleMinusOne}>-1</button>
            <button onClick={handleReset}>Reset</button>                
        </div>
    );

    ReactDOM.render(templateThree, appRoot);
}

render();



