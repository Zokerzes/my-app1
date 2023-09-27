import Link from 'next/link';
import style from './Header.module.css';

const
  pages = [
    { href: '/', title: 'Home' },
    { href: '/test-users', title: 'test fetch' },
    { href: '/users', title: 'Users' },
    { href: '/todo', title: 'ToDo' }
  ];

export default function Header() {
  return <header className={style.header}>
    <nav>
      <ul>
        {pages.map(({href,title})=><li key={href}><Link href={href}>{title}</Link></li>)}
      </ul>
    </nav>
  </header>;
}