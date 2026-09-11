function UserName({ products, onAdd }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /></div>
          <div className="product-details"><span className="product-category">{product.category}</span><h3>{product.title}</h3><div className="product-bottom"><strong>{product.price} сом</strong><button type="button" onClick={() => onAdd(product)} aria-label={`Добавить ${product.title} в корзину`}>+</button></div></div>
        </article>
      ))}
      {!products.length && <p className="empty-state">Ничего не найдено. Попробуйте изменить запрос.</p>}
    </div>
  )
}

export default UserName
