# Answers

-   [x] Why would you use class component over function components (removing hooks from the question)?
    > Because you want to write a lot of code? But more seriously... Using class components gives you more fine-grained/explicit access to lifecycle methods. You can still accomplish some of this with hooks, but it's not always as clear what you're doing and _when_ you're doing it.

-   [x] Name three lifecycle methods and their purposes.
    > `componentDidMount` - Allows you to run code after `this` component is added to the DOM (mounted). It only runs once. It can be useful for setting states from data that may not be available immediately. It's like a "lazy" call to the `React.useState` and `React.useEffect` hooks.
    > `componentDidUpdate` - Allows you to run code after `this` component's information changes but before rerendering. It can be useful for responding to user interaction. It's like a call to `React.useEffect`.
    > `componentWillUnmount` - Allows you to run code before `this` component is removed from the DOM (unmounted). It allows you to do cleanup.

-   [ ] What is the purpose of a custom hook?
-   [ ] Why is it important to test our apps?
