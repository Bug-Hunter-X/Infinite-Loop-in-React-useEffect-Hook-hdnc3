```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Runs only once after mounting
    console.log('Mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```