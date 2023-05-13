import langContext from '../Providers/langContext.jsx';
import { useContext, useState } from 'react';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Button, Space } from 'antd';

function Header() {
  const lang = useContext(langContext);

  function changeLang() {
    console.log('------', lang);
    lang.setLang(lang.value === 'en' ? 'ua' : 'en');
  }

  return (
    <>
      <h1>User List
        <Button onClick={() => changeLang()}>change Lang</Button>
        <button onClick={() => changeLang()}>change Lang</button>
      </h1>
    </>
  )
}

function Users() {
  return (
    <>
      <h1>Users</h1>
      <ul>
        <UserItem user="Vic" />
        <UserItem user="Arni" />
      </ul>
    </>
  )
}

function UserItem({user}) {
  const lang = useContext(langContext);
  return (
    <li>{user} language - {lang.value} </li>
  )
}

export function UserList() {
  const [lang, setLang] = useState('en');
  const langContextObj = {
    value: lang,
    setLang: setLang,
  }

  return (
    <>
      <Navigation />
      <langContext.Provider value={langContextObj}>
        <Header />
        <Users />
      </langContext.Provider>
    </>
  )
}