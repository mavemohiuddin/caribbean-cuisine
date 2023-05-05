/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-3xl mx-auto flex flex-col gap-4'>
            <div className="border border-gray-300 rounded-md">
                <p className="px-4 py-2 font-secondary text-xl font-bold border-b border-gray-300 bg-cyan-200">Tell us the differences between uncontrolled and controlled components.</p>
                <div className='px-4 py-2'>
                    <p className=''>Both <code className='px-2 bg-blue-200 rounded-md'>`Controlled`</code> and <code className='px-2 bg-blue-200 rounded-md'>`Uncontrolled`</code> components are form components. Visually, they are the same, but the main difference is how they are managed. Here is a short explanation of their difference.</p>
                    
                    <p><code className='px-2 bg-blue-200 rounded-md'>`Controlled`</code> Components are Form input fields whole values have been binded with a react state. Whenever the user interacts with the field, the change is recieved with <code className='px-2 bg-blue-200 rounded-md'>`onChange()`</code> event handler and React updates the value of the state variable. The state, and the value of the field is <code className='px-2 bg-blue-200 rounded-md'>`Controlled`</code> by React.</p>

                    <p>But when the form fields are not binded with react state variables, rather the values of the fields are maintained by the DOM, they are called <code className='px-2 bg-blue-200 rounded-md'>`Uncontrolled`</code> components. Here, the values of the fields are updated by the DOM, and later managed seperately.</p>

                    <p className="p-2 bg-gray-200 my-2">Note: the fields on the login and register forms of this site, are uncontrolled components.</p>
                </div>
            </div>
            <div className="border border-gray-300 rounded-md">
                <p className="px-4 py-2 font-secondary text-xl font-bold border-b border-gray-300 bg-cyan-200">How to validate React props using PropTypes</p>
                <p className='px-4 py-2'>To Valiade Props using PropTypes, the first step is importing the 'prop-types' package. Then defining the PropTypes for the component by adding a static propTypes property to the component class.<br /><br /></p>
                <p className='m-4'>By doing this, the type of props can be specified, and React will only accept the spicified type of input as props.</p>
            </div>
            <div className="border border-gray-300 rounded-md">
                <p className="px-4 py-2 font-secondary text-xl font-bold border-b border-gray-300 bg-cyan-200">Tell us the difference between nodejs and express js.</p>
                <p className='px-4 py-2'>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript on the server-side, outside of the web browser. Node.js provides a runtime environment for executing JavaScript code on a server.</p>
                <p className='px-4 py-2'>Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs.</p>
                <p className='px-4 py-2'>In essence, Node.js provides the runtime environment for executing JavaScript code on a server, while Express.js provides the tools and features for building web applications and APIs on top of Node.js.</p>
            </div>
            <div className="border border-gray-300 rounded-md">
                <p className="px-4 py-2 font-secondary text-xl font-bold border-b border-gray-300 bg-cyan-200">What is a custom hook, and why will you create a custom hook?</p>
                <p className='px-4 py-2'>A custom hook is a reusable function in React that allows developers to extract component logic into a separate function. Custom hooks follow a naming convention starting with the word "use".</p>
                <p className='px-4 py-2'>Custom hooks are useful when developers need to share stateful logic between multiple components or to avoid repeating the same code in different components. By extracting the logic into a custom hook, one can make their code more modular, maintainable, and easier to test.</p>
            </div>
        </div>
    );
};

export default Blogs;