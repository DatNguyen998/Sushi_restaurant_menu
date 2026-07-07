function renderMenu(items, container) {
  container.innerHTML = items.map(item => `
    <div class="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-stone-100 cursor-pointer">
      <div class="overflow-hidden">
        <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
      </div>
      <div class="p-5">
        <h3 class="text-xl font-bold flex justify-between">${item.name} <span class="text-orange-600">${item.price}</span></h3>
        <p class="text-stone-500 mt-2 text-sm">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

renderMenu(MENU_ITEMS, document.getElementById('menu-grid'));
