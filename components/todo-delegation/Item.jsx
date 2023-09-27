import { memo } from 'react';

export function createItem(text) {
  return { id: Math.random(), text, checked: false };

}

export default memo(function Item({ item  }) {
  console.debug('render Item ', item.id);
  return <li>
    <label data-id={item.id} data-action="toggle">
      <input type="checkbox" value={item.checked} />
      <span>{item.text}</span>
    </label>
    <button data-id={item.id} data-action="delete">❌Delete</button>
    {item.checked ? '❎' : '⬜'}
  </li>;
});