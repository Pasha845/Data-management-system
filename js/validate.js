const cartModal = new JustValidate('.cart__form', {
  successFieldCssClass: "is-valid",
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    top: "-12px",
    fontSize: "12px",
    color: '#D11616'
  }
});

cartModal
.addField('#cart-name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно состоять минимум из 3 символов'
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

.addField('#cart-surname', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

.addField('#cart-patronymic', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

const changeModal = new JustValidate('.change__form', {
  successFieldCssClass: "is-valid",
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    top: "-12px",
    fontSize: "12px",
    color: '#D11616'
  }
});

changeModal
.addField('#change-name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно состоять минимум из 3 символов'
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

.addField('#change-surname', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

.addField('#change-patronymic', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])
