let id = 0;

// function reducer(state = [], action) {
//   if (action.type === 'bookAdded')
//     return [
//       ...state,
//       {
//         id: ++id,
//         description: action.payload.description,
//         resolved: false
//       }
//     ];
//   else if (action.type === 'bookRemoved')
//     return state.filter(book => book.id !== action.payload.id)

//   return state;
// }

export default function reducer(state = [], action) {
  switch (action.type) {
    case "bookAdded":
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false
        }
      ];
    case "bookRemoved":
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
}