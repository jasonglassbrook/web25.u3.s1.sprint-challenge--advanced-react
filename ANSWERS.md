# Answers

-   [x] Why would you use class component over function components (removing hooks from the question)?
    > Because you want to write a lot of code? But more seriously... Using class components gives you more fine-grained/explicit access to lifecycle methods. You can still accomplish some of this with hooks, but it's not always as clear what you're doing and _when_ you're doing it.

-   [x] Name three lifecycle methods and their purposes.
    > `componentDidMount` - Lets you to run code after `this` component is added to the DOM (mounted). It only runs once. It can be useful for setting states from data that may not be available immediately. It's like a "lazy" call to the `React.useState` and `React.useEffect` hooks.
    > `componentDidUpdate` - Lets you to run code after `this` component's information changes but before rerendering. It can be useful for responding to user interaction. It's like a call to `React.useEffect`.
    > `componentWillUnmount` - Lets you to run code before `this` component is removed from the DOM (unmounted). It lets you to do cleanup.

-   [x] What is the purpose of a custom hook?
    > Custom hooks let you modularize the functionality of your components. This helps reduce code repetition and also reduces visual clutter in your components (assuming you move your custom hooks to their own modules), making your code easier to read and maintain.

-   [x] Why is it important to test our apps?
    > It's import to test our apps so that we know that what we _expect_ to happen when the app runs is what _actually_ happens. We can test manually: going through the page, checking text, pressing buttons, entering information, etc. We can also test automatically, which can save time if there's a lot to test.
