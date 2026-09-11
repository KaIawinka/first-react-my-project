import { useMemo, useState } from 'react'
import './card.css'

const products = [
  { id: 1, title: 'Яблоки', price: 120, category: 'Фрукты', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80' },
  { id: 2, title: 'Апельсины', price: 180, category: 'Фрукты', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=700&q=80' },
  { id: 3, title: 'Клубника', price: 260, category: 'Ягоды', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=80' },
  { id: 4, title: 'Авокадо', price: 220, category: 'Овощи', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=700&q=80' },
  { id: 5, title: 'Морковь', price: 90, category: 'Овощи', image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=700&q=80' },
  { id: 6, title: 'Лимоны', price: 150, category: 'Фрукты', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=700&q=80' },
]

function UserCard() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Все')
  const [cart, setCart] = useState([])
  const categories = ['Все', ...new Set(products.map((product) => product.category))]
  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'Все' || product.category === category
    return matchesCategory && product.title.toLowerCase().includes(query.toLowerCase())
  }), [category, query])

  return (
    <main className="store-shell">
      <header className="store-header">
        <a className="brand" href="/" aria-label="Freshly, на главную">freshly<span>.</span></a>
        <nav aria-label="Основная навигация"><a href="#catalog">Каталог</a><a href="#about">О нас</a><a href="#delivery">Доставка</a></nav>
        <button className="cart-button" type="button" aria-label={`Корзина, товаров: ${cart.length}`}>Корзина <strong>{cart.length}</strong></button>
      </header>
      <section className="hero" id="about">
        <div><p className="eyebrow">Сезонное и настоящее</p><h1>Хорошая еда начинается с хороших продуктов.</h1><p className="hero-copy">Свежие овощи, фрукты и ягоды от проверенных поставщиков. Соберем заказ сегодня и привезем тогда, когда удобно вам.</p><a className="primary-link" href="#catalog">Смотреть каталог <span aria-hidden="true">↗</span></a></div>
        <div className="hero-note"><strong>01</strong><span>Отборные продукты<br />каждый день</span></div>
      </section>
      <section className="catalog" id="catalog">
        <div className="section-heading"><div><p className="eyebrow">Витрина</p><h2>Выберите свое</h2></div><span>{visibleProducts.length} позиций</span></div>
        <div className="catalog-tools">
          <label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти продукт" aria-label="Поиск продуктов" /></label>
          <div className="category-tabs" role="group" aria-label="Фильтр по категориям">{categories.map((item) => <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)} type="button">{item}</button>)}</div>
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => <article className="product-card" key={product.id}><div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /></div><div className="product-details"><span className="product-category">{product.category}</span><h3>{product.title}</h3><div className="product-bottom"><strong>{product.price} сом</strong><button type="button" onClick={() => setCart((current) => [...current, product])} aria-label={`Добавить ${product.title} в корзину`}>+</button></div></div></article>)}
          {!visibleProducts.length && <p className="empty-state">Ничего не найдено. Попробуйте изменить запрос.</p>}
        </div>
      </section>
      <footer id="delivery"><span>freshly.</span><span>Доставка по городу ежедневно · 09:00–21:00</span></footer>
    </main>
  )
}

export default UserCard
