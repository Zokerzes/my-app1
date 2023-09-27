import { memo } from 'react';

export default memo(function Button({ onClick, children }) {
  console.debug('render Button');
  return <button onClick={onClick}>{children}</button>;
});