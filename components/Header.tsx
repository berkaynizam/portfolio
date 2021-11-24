import { useRouter } from 'next/router';
import IconMenu from 'components/icons/menu';
import { useKBar, VisualState } from 'kbar';
import Link from 'next/link';

const MENU = {
  '/': 'Home',
  '/works': 'Works'
};

function Header() {
  const { query } = useKBar();
  const router = useRouter();
  const splitPath = router.pathname.split('/');
  const pathname = splitPath.length > 2 ? `/${splitPath[1]}` : router.pathname;
  const activePage = MENU[pathname];

  return (
    <header className="pt-6">
      <div className="c-small text-lg">
        <Link href="/">
        <a className={`${activePage == 'Home' ? "active text-gray-900" : "text-gray-500"}`}>Home</a>
        </Link>
        <Link href="/works">
        <a className={`${activePage == 'Works' ? "ml-4 text-gray-900" : "ml-4 text-gray-500"}`}>Works</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
