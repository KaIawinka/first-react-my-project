import { useState } from 'react'
import Cart from './Cart.jsx'

const products = [
  { id: 1, title: 'Яблоки', price: 120 },
  { id: 2, title: 'Апельсины', price: 180 },
  { id: 3, title: 'Клубника', price: 260 },
]

function Profile() {
  const [users, setUsers] = useState(['Asir', 'Kutman', 'Arthur'])

  function changeUser() {
    setUsers((currentUsers) => currentUsers.map((user, index) => index === 1 ? 'Kadyr' : user))
  }

  return (
    <main>
      <h1>Профиль</h1>
      <ul>{users.map((user) => <li key={user}>{user}</li>)}</ul>
      <button type="button" onClick={changeUser}>Изменить имя</button>
      <section>{products.map((product) => <Cart key={product.id} data={product} />)}</section>
    </main>
  )
}

export default Profile
