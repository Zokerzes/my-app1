import Item from './Item';

export default function List({ list, delItem, toggleCheckbox }) {
  console.debug('render List');
  return <fieldset>
    <legend>List</legend>
    <ol>
      {list.map(item => <Item key={item.id} item={item} delItem={delItem} toggleCheckbox={toggleCheckbox} />)}
    </ol>
  </fieldset>;

}