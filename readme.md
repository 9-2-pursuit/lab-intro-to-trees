# Trees Introduction Lab

This lab will require you to build a single function: `findNode()`. You will need to do so for a `Tree` class.

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

Complete the `findNode()` method inside of the `Tree` class in the `index.js` file. This method takes a single argument which is the data that can be found in a node. It should return either a reference to the node that contains that data or it should return `null`.

### Example

For example, imagine you have the following tree structure. This means that a string of `"A"` is stored in the root node of the tree. The `"A"` node has three children: `"B"`, `"C"`, and `"D"`.

```
    A
  ┌─┼─┐
  B C D──┐
┌─┼─┐    │
E F G    H
```

Assume that the tree is represented by the variable `tree`. You should then be able to run the code as follows:

```js
tree.findNode("A"); //> { TreeNode data: "A", ... }
tree.findNode("G"); //> { TreeNode data: "G", ... }
tree.findNode("Y"); //> null
```

For more examples, refer to the tests.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

#### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

Any output will be printed to your terminal.
