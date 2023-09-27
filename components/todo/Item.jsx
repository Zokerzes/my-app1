import { memo } from 'react';

export function createItem(text) {
  return { id: Math.random(), text, checked: false };

}


export default memo(function Item({ item, delItem, toggleCheckbox }) {
  console.debug('render Item ', item.id);
  return <li>
    <label>
      <input type="checkbox" value={item.checked} onChange={() => toggleCheckbox(item.id)} />
      <span>{item.text}</span>
    </label>
    <button onClick={() => delItem(item.id)}>❌Delete</button>
    {item.checked ? '❎' : '⬜'}
  </li>;
});