const initialState = {
  columns: [
    {
    listId: '1',
    id: '1',
    title: 'Books',
    icon: 'book',
    },
    {
    listId: '1',
    id: '2',
    title: 'Movies',
    icon: 'film',
    },
    {
    listId: '1',
    id: '3',
    title: 'Games',
    icon: 'gamepad',
    },
    {
    listId: '2',
    id: '4',
    title: 'Music',
    icon: 'music',
    }
  ],
  
  cards: [
    { id: '1', columnId: '1', title: 'This is Going to Hurt', isFavourite: false },
    { id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavourite: false },
    { id: '3', columnId: '2', title: 'Harry Potter', isFavourite: false },
    { id: '4', columnId: '2', title: 'Star Wars', isFavourite: false },
    { id: '5', columnId: '3', title: 'The Witcher', isFavourite: false },
    { id: '6', columnId: '3', title: 'Skyrim', isFavourite: false }
  ],
  
  lists: [
    {
    id: '1',
    title: 'Things to do...',
    description: 'Interesting things I want to check out'
    },
   {
    id: '2',
    title: 'Test list',
    description: 'Lorem Ipsum'
   }
   ],
   searchString: ''
  };
  
  export default initialState;