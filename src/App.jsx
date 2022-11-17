import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useFetchData } from './hooks/useFetchData';

function App() {
  const { characters, setCharacters, isLoading } = useFetchData();
  const dataMap = characters.map((el,i)=>{
    return (
      <Draggable key={el.id} draggableId={el.id.toString()} index={i} >
        {
          (provided)=>{
            return (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <div style={{ width: '100%', paddingTop: 25, paddingBottom: 25, textAlign: 'center', border: '1px solid black', marginBottom: 5}}>
                  {el.name} or {el.nickname}
                </div>
              </div>
            )
          }
        }
      </Draggable>
    )
  });
  const handleOnDragEnd = (res)=>{
    const itemsCopy = [...characters];
    const [reorderedItems] = itemsCopy.splice(res.source.index, 1);
    itemsCopy.splice(res.destination.index, 0, reorderedItems);
    setCharacters(itemsCopy);
  };

  return (
    <div className="App">
      {
            isLoading && ( <h1>Loading...</h1> )
      }
      <div className='characters'>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='characters'>
            {
              (provided)=>{
                return (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {dataMap}
                    {provided.placeholder}
                  </div>
                )
              }
            }
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export default App;
