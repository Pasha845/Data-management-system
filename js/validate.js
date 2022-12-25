const modal = new JustValidate('.cart__form', {
  successFieldCssClass: "is-valid",
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    top: "-12px",
    fontSize: "12px",
    color: '#D11616'
  }
});

modal
.addField('#name', [
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

.addField('#surname', [
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

.addField('#patronymic', [
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
