using System;
using System.Collections.Generic;
using System.Linq;

namespace blazor_demo
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public decimal Price { get; set; }
    }

    public class CartStore
    {
        private readonly List<Product> _items = new();

        public IReadOnlyList<Product> Items => _items.AsReadOnly();
        public decimal Total => _items.Sum(x => x.Price);

        public event Action? OnChange;

        public void AddItem(Product product)
        {
            _items.Add(product);
            NotifyStateChanged();
        }

        public void RemoveItem(int productId)
        {
            var item = _items.FirstOrDefault(i => i.Id == productId);
            if (item != null)
            {
                _items.Remove(item);
                NotifyStateChanged();
            }
        }

        public void ClearCart()
        {
            _items.Clear();
            NotifyStateChanged();
        }

        private void NotifyStateChanged() => OnChange?.Invoke();
    }
}
