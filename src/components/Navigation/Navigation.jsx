import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div id="sidebar">
      {/* other elements */}

      <nav>
        <ul>
          <li>
            <Link to={`/`}>About</Link>
          </li>
          <li>
            <Link to={`/todos`}>Todo</Link>
          </li>
          <li>
            <Link to={`/counter`}>Counter</Link>
          </li>
        </ul>
      </nav>

      {/* other elements */}
    </div>
  );
}