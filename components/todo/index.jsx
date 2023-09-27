import { useCallback, useState } from 'react';
import Form from './Form';
import { createItem } from './Item';
import List from './List';

export default function ToDoApp() {
  const
    [list, setList] = useState([createItem('дело 1'), createItem('дело 2')]),
    delItem = useCallback(id => setList(old => old.filter(item => id !== item.id)), []),
    toggleCheckbox = useCallback(id =>
      setList(old => {
        const
          index = old.findIndex(item => id === item.id),
          { checked, ...elem } = old[index];
        Object.assign(elem, { checked: !checked });
        return old.with(index, elem);
      }), []),
    addItem = useCallback(text => setList(old => old.concat(createItem(text))), []);

  return <>
    <Form addItem={addItem} />
    <List
      list={list}
      delItem={delItem}
      toggleCheckbox={toggleCheckbox}
    />
  </>;
}