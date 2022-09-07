export default function Results({results}) {
  return <>
    {results.map((result) => (
      <div key={result.id}>
        <h1>{result.title}</h1>
        <p>{result.overview}</p>
        <br/>
      </div>
      ))
    }
  </>
  }