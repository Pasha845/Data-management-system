document.addEventListener('DOMContentLoaded', () => {

  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  
  const localData = JSON.parse(localStorage.getItem('Data') || '[]');

  const clientDate = [{
    id: 123455,
    sname: 'Скворцов',
    fname: 'Денис',
    lname: 'Юрьевич',
    bdate: '21.02.2021 12:41',
    lchange: '21.02.2021 14:50'
  },
  {
    id: 123456,
    sname: 'Куприянов',
    fname: 'Арсений',
    lname: 'Валерьевич',
    bdate: '28.01.2021 16:40',
    lchange: '02.02.2021 17:01'
  },
  {
    id: 123457,
    sname: 'Константинопольская',
    fname: 'Людмила',
    lname: 'Александровна',
    bdate: '20.01.2021 14:01',
    lchange: '21.01.2021 14:59'
  },
  {
    id: 123458,
    sname: 'Дмитриевский',
    fname: 'Олег',
    lname: 'Алексеевич',
    bdate: '14.01.2021 16:50',
    lchange: '18.01.2021 16:55'
  },
  {
    id: 123459,
    sname: 'Александрова',
    fname: 'Татьяна',
    lname: 'Павловна',
    bdate: '11.01.2021 12:45',
    lchange: '11.01.2021 14:11'
  }
  ];

  buildTable(clientDate);

  function buildTable(data) {
    const table = document.getElementById('tablebody');
    let html = '';
    for (let i = 0; i < data.length; i++) {
      const fioObj = `${data[i].sname} ${data[i].fname} ${data[i].lname}`;
      const row = `
      <tr class="table__cell">
      <td class="table__id">${data[i].id}</td>
      <td>${fioObj}</td>
      <td>${data[i].bdate}</td>
      <td>${data[i].lchange}</td>
      <td></td>
      <td>
        <button class="table__btn" onclick="window.location.href='#change'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7" clip-path="url(#clip0_224_2140)">
          <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/>
          </g>
          <defs>
          <clipPath id="clip0_224_2140">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          Изменить
        </button>
        <button class="table__btn" onclick="window.location.href='#del'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7" clip-path="url(#clip0_224_2145)">
          <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
          </g>
          <defs>
          <clipPath id="clip0_224_2145">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          Удалить
        </button>
      </td>
      <tr/>
      `;
      html += row;
    }
    table.innerHTML = html;
  }

  document.querySelector('.header__form').addEventListener('input', () => {
    let arr = clientDate.slice(0);
    let str = '';
    if (str = inputFio.value.trim().toLowerCase()) {
      arr = arr.filter(({
        sname,
        fname,
        lname,
      }) => [sname, fname, lname].some((title) => title.toLowerCase().includes(str)));
    }
    buildTable(arr);
  });
});