# Unhandled Server Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js where the 'error' event on an HTTP server is not handled correctly.  This can lead to the server crashing unexpectedly.  The solution shows the proper way to handle these errors gracefully.

## Bug

The `bug.js` file contains an HTTP server that lacks proper error handling.  If an error occurs (e.g., port already in use), the server will crash without any informative message.

## Solution

The `bugSolution.js` file demonstrates how to handle the 'error' event effectively.  This prevents unexpected crashes and provides more helpful error messages.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`.  Attempt to start another server on port 3000, and you should see that this one crashes without much information.
4. Then run `node bugSolution.js`, and try running another server on port 3000. It will handle this scenario far more gracefully.