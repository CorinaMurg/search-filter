import { useState } from 'react'

// https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm

const poems = [
  { title: "My Dark Horses", id: 1 },
  { title: "Poem in October", id: 2 },
  { title: "Acquainted with the Night", id: 3 },
  { title: "The Love Song of J. Alfred Prufrock", id: 4 },
  { title: "A Recovered Memory of Water", id: 5 },
  
]
function App() {
  const [searchPoem, setSearchPoem] = useState('')
  const [filteredPoems, setFilteredPoems] = useState(poems)

  //const [filteredPoems, setFilteredPoems] = useState([])
  // const [poems, setPoems] = useState([])
  // useEffect(() => {
  //   fetch('https://dummyjson.com/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       setApiPoems(data.poems)
  //       // update the filteredUsers state on first render
  //       setFilteredPoems(data.poems)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchPoem(searchTerm)

    // const filteredItems = users.filter((user) =>
    // user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const filteredItems = poems.filter((poem) =>
      poem.title.toLowerCase().split(' ').some(word => word.startsWith(searchTerm.toLowerCase()))
    );
  

    setFilteredPoems(filteredItems);
  }

  return (
    <>
      <input
        type="text"
        value={searchPoem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <ul>
        {filteredPoems.map(user => <li key={user.id}>{user.title}</li>)}
      </ul>
    </>
  )
}

export default App