const menuItems = document.querySelectorAll('.menu li');

for (const menuItem of menuItems) {
  menuItem.addEventListener('click', () => {
    const dropdownContent = menuItem.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'none') {
      dropdownContent.style.display = 'block';
    } else {
      dropdownContent.style.display = 'none';
    }
  });
}


// const menuCadastro = document.querySelector('li.Cadastro');
// const submenus = menuCadastro.querySelector('ul');
// const menuVendas = document.querySelector('li.Vendas');
// const submenusVendas = menuVendas.querySelector('ul');

// // Esconde os submenus inicialmente
// submenus.style.display = 'none';
// // Esconde os submenus inicialmente
// submenusVendas.style.display = 'none';

// // Adiciona evento de clique ao menu Cadastro
// menuCadastro.addEventListener('click', () => {
//   // Mostra/esconde os submenus
//   if (submenus.style.display === 'none') {
//     submenus.style.display = 'block';
//   } else {
//     submenus.style.display = 'none';
//   }
// });
// // Adiciona evento de clique ao menu Vendas
// menuVendas.addEventListener('click', () => {
//   // Mostra/esconde os submenus
//   if (submenusVendas.style.display === 'none') {
//     submenusVendas.style.display = 'block';
//   } else {
//     submenusVendas.style.display = 'none';
//   }
// });


// Animação
// const menuCadastro = document.querySelector('li.Cadastro');
// const submenus = menuCadastro.querySelector('ul');
// const menuVendas = document.querySelector('li.Vendas');
// const submenusVendas = menuVendas.querySelector('ul');

// // Esconde os submenus inicialmente
// submenus.style.display = 'none';
// // Esconde os submenus inicialmente
// submenusVendas.style.display = 'none';

// // Adiciona evento de clique ao menu Cadastro
// menuCadastro.addEventListener('click', () => {
//   // Mostra/esconde os submenus com animação
//   if (submenus.style.display === 'none') {
//     submenus.style.display = 'block';
//     submenus.classList.add('fadeIn');
//   } else {
//     submenus.classList.add('fadeOut');
//     submenus.addEventListener('animationend', () => {
//       submenus.style.display = 'none';
//       submenus.classList.remove('fadeOut');
//     });
//   }
// });


// // Adiciona evento de clique ao menu Vendas
// menuVendas.addEventListener('click', () => {
//   // Mostra/esconde os submenus com animação
//   if (submenusVendas.style.display === 'none') {
//     submenusVendas.style.display = 'block';
//     submenusVendas.classList.add('fadeIn');
//   } else {
//     submenusVendas.classList.add('fadeOut');
//     submenusVendas.addEventListener('animationend', () => {
//       submenusVendas.style.display = 'none';
//       submenusVendas.classList.remove('fadeOut');
//     });
//   }
// });