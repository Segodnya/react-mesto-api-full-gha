const allowedCors = [
  'https://api.segodnya.nomoredomains.rocks',
  'http://segodnya.nomoredomains.rocks',
  'https://127.0.0.1:3000',
  'http://127.0.0.1:3000',
  'http://localhost:3001',
  'https://localhost:3001',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = (req, res, next) => {
  const { method } = req;
  const { origin } = req.headers;
  const requestHeaders = req.headers['access-control-request-headers'];
  // для отправки credentials в fetch
  res.header('Access-Control-Allow-Credentials', true);
  // простой CORS
  // проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  // предварительный запрос
  if (method === 'OPTIONS') {
    // разрешаем кросс-доменные запросы любых типов (по умолчанию)
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    // устанавливаем заголовок, который разрешает браузеру запросы из любого источника
    res.header('Access-Control-Allow-Origin', '*');
    // res.header("Access-Control-Allow-Origin", origin);
    // добавляем этот заголовок для подтверждения, что запрос сделан с использованием CORS
    res.header('Vary', 'Origin');
    res.status(200).send();
  } else {
    next();
  }
};
