# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrectly updating state within a useEffect hook's dependency array.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version.

## Problem

The `useEffect` hook in `bug.js` attempts to increment the `count` state variable in every render. This creates a loop because the state update triggers a re-render, which triggers the `useEffect` again, and so on.

## Solution

The corrected version in `bugSolution.js` fixes the problem by removing the dependency on `count` in the useEffect's dependency array. This makes the effect only run once after the initial mount.