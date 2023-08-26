const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким Email не найден',
  INVALID_PASSWORD: 'Неверный пароль',
};

export const error = (code) => {
  return ERROR_CODES[code] ? ERROR_CODES[code] : `Неизвестная ошибка: ${code}`;
};
