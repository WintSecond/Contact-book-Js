// https://foxyland.online/students/contacts.php - контакты

$(() => {
  $('#addTel,#editTel').mask('+7 (000) 000 00 00');
});

$(() => {
  fetch('https://foxysite.ru/students/contacts.php')
    .then(response => response.json())
    .then((contacts) => {
      contacts.contacts.forEach((item, i) => {
        $('.contactList .row ').append(`
        <div class="col-12">
        <div class="contacts__item item" id="contact_item${item.id}">
            <div class="item__info">
                <h3 class="item_name">${item.name}</h3>
                <a href="tel:${item.phone}">${item.phone}</a>
            </div>
            <div class="item__actions">
                <button type="button" class="item__edit item__action" id="editButton" data-id="${item.id}">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
                        style="enable-background:new 0 0 330 330;" xml:space="preserve">
                        <g id="XMLID_23_">
                            <path id="XMLID_24_"
                                d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
                                c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
                                C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z" />
                            <path id="XMLID_27_"
                                d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
                                C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z" />
                        </g>
                    </svg>
                </button>
                <button type="button" class="item__remove item__action" data-id="${item.id}">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.386px"
                        height="34.386px" viewBox="0 0 34.386 34.386"
                        style="enable-background:new 0 0 34.386 34.386;" xml:space="preserve">
                        <g>
                            <path
                                d="M26.361,4.052h-3.564c0.004-0.039,0.021-0.074,0.021-0.114C22.818,1.767,21.051,0,18.881,0h-4.125
                            c-2.171,0-3.938,1.767-3.938,3.938c0,0.041,0.019,0.075,0.023,0.114H8.025c-1.656,0-3,1.344-3,3v1.167h24.333V7.052
                            C29.361,5.396,28.018,4.052,26.361,4.052z M12.818,3.938C12.818,2.87,13.688,2,14.756,2h4.125c1.067,0,1.938,0.869,1.938,1.938
                            c0,0.041,0.019,0.075,0.022,0.114h-8.046C12.799,4.013,12.818,3.978,12.818,3.938z M5.026,31.386c0,1.656,1.344,3,3,3H26.36
                            c1.656,0,3-1.344,3-3V10.219H5.026V31.386z M24.193,13.72c0-0.552,0.449-1,1-1c0.553,0,1,0.448,1,1v17.373c0,0.554-0.447,1-1,1
                            c-0.551,0-1-0.446-1-1V13.72z M18.861,13.72c0-0.552,0.447-1,1-1c0.551,0,1,0.448,1,1v17.373c0,0.554-0.449,1-1,1
                            c-0.553,0-1-0.446-1-1V13.72z M13.526,13.72c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1v17.373c0,0.554-0.448,1-1,1
                            c-0.552,0-1-0.446-1-1V13.72z M8.193,13.72c0-0.552,0.448-1,1-1s1,0.448,1,1v17.373c0,0.554-0.448,1-1,1s-1-0.446-1-1V13.72z" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
        `);
      });

      const localData = JSON.parse(localStorage.getItem('list'));

      localData.forEach((item, i) => {
        $('.contactList .row ').append(`
        <div class="col-12">
        <div class="contacts__item item" id="contact_item${item[0].value}">
            <div class="item__info">
                <h3 class="item_name">${item[1].value}</h3>
                <a href="tel:${item[2].value}">${item[2].value}</a>
            </div>
            <div class="item__actions">
                <button type="button" class="item__edit item__action" data-id="${item[0].value}">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
                        style="enable-background:new 0 0 330 330;" xml:space="preserve">
                        <g id="XMLID_23_">
                            <path id="XMLID_24_"
                                d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
                                c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
                                C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z" />
                            <path id="XMLID_27_"
                                d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
                                C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z" />
                        </g>
                    </svg>
                </button>
                <button type="button" class="item__remove item__action" data-id="${item[0].value}">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.386px"
                        height="34.386px" viewBox="0 0 34.386 34.386"
                        style="enable-background:new 0 0 34.386 34.386;" xml:space="preserve">
                        <g>
                            <path
                                d="M26.361,4.052h-3.564c0.004-0.039,0.021-0.074,0.021-0.114C22.818,1.767,21.051,0,18.881,0h-4.125
                            c-2.171,0-3.938,1.767-3.938,3.938c0,0.041,0.019,0.075,0.023,0.114H8.025c-1.656,0-3,1.344-3,3v1.167h24.333V7.052
                            C29.361,5.396,28.018,4.052,26.361,4.052z M12.818,3.938C12.818,2.87,13.688,2,14.756,2h4.125c1.067,0,1.938,0.869,1.938,1.938
                            c0,0.041,0.019,0.075,0.022,0.114h-8.046C12.799,4.013,12.818,3.978,12.818,3.938z M5.026,31.386c0,1.656,1.344,3,3,3H26.36
                            c1.656,0,3-1.344,3-3V10.219H5.026V31.386z M24.193,13.72c0-0.552,0.449-1,1-1c0.553,0,1,0.448,1,1v17.373c0,0.554-0.447,1-1,1
                            c-0.551,0-1-0.446-1-1V13.72z M18.861,13.72c0-0.552,0.447-1,1-1c0.551,0,1,0.448,1,1v17.373c0,0.554-0.449,1-1,1
                            c-0.553,0-1-0.446-1-1V13.72z M13.526,13.72c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1v17.373c0,0.554-0.448,1-1,1
                            c-0.552,0-1-0.446-1-1V13.72z M8.193,13.72c0-0.552,0.448-1,1-1s1,0.448,1,1v17.373c0,0.554-0.448,1-1,1s-1-0.446-1-1V13.72z" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
        `);
      });
    });
});

// Добавление контакта

$(() => {

  // Открывает окно добавления контака
  $('#contactsAdd').on('click', () => {
    $('.popup__add.wrapper').addClass('active');
  });

  // Клик по фону закрывает окно добавления контакта
  $('.popup__add.wrapper').on('click', (e) => {
    $(e.target).removeClass('active');
  });

  // Клик по крестику закрывает окно добавления контакта
  $('.popup-close').on('click', () => {
    $('.popup__add.wrapper').removeClass('active');
  });

  // обработка формы
  $('.popup__add .content').on('submit', function (e) {
    e.preventDefault();
    $('.popup__add .content input[name="id"]').val(Date.now());


    const prevData = localStorage.getItem('list');
    let newData = [];

    if (prevData) {
      newData = JSON.parse(prevData);
      newData = [...newData, $(this).serializeArray()]
    } else {
      newData = [...newData, $(this).serializeArray()]
    }

    const newItem = $(this).serializeArray();

    localStorage.setItem('list', JSON.stringify(newData));

    $('.contactList .row ').append(`
        <div class="col-12">
        <div class="contacts__item item" id="contact_item${newItem[0].value}">
            <div class="item__info">
                <h3 class="item_name">${newItem[1].value}</h3>
                <a href="tel:${newItem[2].value}">${newItem[2].value}</a>
            </div>
            <div class="item__actions">
                <button type="button" class="item__edit item__action" id="editButton" data-id="${newItem[0].value}">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
                        style="enable-background:new 0 0 330 330;" xml:space="preserve">
                        <g id="XMLID_23_">
                            <path id="XMLID_24_"
                                d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
                                c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
                                C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z" />
                            <path id="XMLID_27_"
                                d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
                                C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z" />
                        </g>
                    </svg>
                </button>
                <button type="button" class="item__remove item__action" data-id="${newItem[0].value}">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.386px"
                        height="34.386px" viewBox="0 0 34.386 34.386"
                        style="enable-background:new 0 0 34.386 34.386;" xml:space="preserve">
                        <g>
                            <path
                                d="M26.361,4.052h-3.564c0.004-0.039,0.021-0.074,0.021-0.114C22.818,1.767,21.051,0,18.881,0h-4.125
                            c-2.171,0-3.938,1.767-3.938,3.938c0,0.041,0.019,0.075,0.023,0.114H8.025c-1.656,0-3,1.344-3,3v1.167h24.333V7.052
                            C29.361,5.396,28.018,4.052,26.361,4.052z M12.818,3.938C12.818,2.87,13.688,2,14.756,2h4.125c1.067,0,1.938,0.869,1.938,1.938
                            c0,0.041,0.019,0.075,0.022,0.114h-8.046C12.799,4.013,12.818,3.978,12.818,3.938z M5.026,31.386c0,1.656,1.344,3,3,3H26.36
                            c1.656,0,3-1.344,3-3V10.219H5.026V31.386z M24.193,13.72c0-0.552,0.449-1,1-1c0.553,0,1,0.448,1,1v17.373c0,0.554-0.447,1-1,1
                            c-0.551,0-1-0.446-1-1V13.72z M18.861,13.72c0-0.552,0.447-1,1-1c0.551,0,1,0.448,1,1v17.373c0,0.554-0.449,1-1,1
                            c-0.553,0-1-0.446-1-1V13.72z M13.526,13.72c0-0.552,0.448-1,1-1c0.552,0,1,0.448,1,1v17.373c0,0.554-0.448,1-1,1
                            c-0.552,0-1-0.446-1-1V13.72z M8.193,13.72c0-0.552,0.448-1,1-1s1,0.448,1,1v17.373c0,0.554-0.448,1-1,1s-1-0.446-1-1V13.72z" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    `);

    $(this)[0].reset();
    $('.popup__add.wrapper').removeClass('active');
  });
});

// Редактирование контакта

$(() => {
  // Открыть окно редактирования контакта
  $(document).on('click', '.item__edit', function () {
    $('.popup__edit.wrapper').addClass('active');

    const id = +$(this).data('id');
    $('.popup__edit form input[name="id"]').val(id);


    const data = JSON.parse(localStorage.getItem('list'));
    let editItem = data.filter(function (value) {
      const currentID = +value[0].value;
      return currentID === id;
    })[0];


    $('#editName').val(editItem[1].value);
    $('#editTel').val(editItem[2].value);
  });

  // Клик по фону закрывает окно редактирования контакта
  $('.popup__edit.wrapper').on('click', (e) => {
    $(e.target).removeClass('active');
  });

  // Клик по крестику закрывает окно редактирования контакта
  $('.popup-close').on('click', () => {
    $('.popup__edit.wrapper').removeClass('active');
  });

  // обработка формы
  $('.popup__edit form').on('submit', function (e) {
    e.preventDefault();

    const prevData = JSON.parse(localStorage.getItem('list'));
    const id = +$('.popup__edit form input[name="id"]').val();

    const editItem = {
      name: $('#editName').val(),
      phone: $('#editTel').val()
    };


    let newData = prevData.map(function (value) {
      const currentID = +value[0].value;

      if (currentID === id) {
        let tmp = [...value];
        tmp[1].value = editItem.name;
        tmp[2].value = editItem.phone;

        return tmp;
      } else {
        return value;
      }
    });

    localStorage.setItem('list', JSON.stringify(newData));

    // изменить значения у старых элементов ДЗ

    $('.popup__edit.wrapper').removeClass('active');
  });
});

// Удаление контакта
$(() => {
  $(document).on('click', '.item__remove', function () {
    const id = $(this).data('id');


    $(`#contact_item${id}`).parents('.col-12').remove();

    const data = JSON.parse(localStorage.getItem('list'));

    // const newData = data.filter((item) => +item[0].value !== +id);
    const newData = data.filter((item) => {
      if (+item[0].value === +id) {
        return false;
      } else {
        return true;
      }
    });

    localStorage.setItem('list', JSON.stringify(newData));
  });
});

// Поиск контакта
$(() => {
  $('#search').on('input', function () {
    const searchText = $(this).val().toLowerCase();

    if (searchText.length >= 3) {
      $('.contacts__item .item_name').each(function () {
        const name = $(this).text().toLowerCase();

        if (name.indexOf(searchText) === -1) {
          $(this).parents('.contacts__item').hide();
        } else {
          $(this).parents('.contacts__item').show();
        }
      });
    } else if (searchText.length < 3) {
      $('.contacts__item').show();
    }
  });
});


