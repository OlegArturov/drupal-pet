# React 19.1.0+ и MUI Setup для Drupal

Этот проект настроен для использования React 19.1.0+, React-DOM 19.1.0+ и Material-UI в Drupal.

## Установка зависимостей

1. Установите Node.js зависимости:
```bash
npm install
```

2. Соберите React приложение:
```bash
npm run build
```

## Структура проекта

### React и MUI библиотеки
- **React 19.1.0+** - доступен глобально через CDN
- **React-DOM 19.1.0+** - доступен глобально через CDN  
- **Material-UI 6.0.0+** - загружается отдельно с кастомной темой

### Кастомная тема
- `web/themes/custom/react_theme/` - кастомная Drupal тема с React интеграцией
- `web/themes/custom/react_theme/css/` - стили для React и MUI
- `web/themes/custom/react_theme/templates/` - Twig шаблоны

### React компоненты
- `web/modules/custom/my_demo/js/react-app.js` - основной React компонент
- `web/libraries/react-app/` - собранные React файлы

## Использование

### Активация темы
1. Перейдите в админ панель Drupal
2. Appearance → Themes
3. Активируйте "React Theme"

### Использование в модулях
```php
return [
  '#type' => 'markup',
  '#markup' => '<div id="react-root"></div>',
  '#attached' => [
    'library' => [
      'react_theme/react-app',
    ],
  ],
];
```

### Кастомная MUI тема
Тема MUI настроена с:
- Primary цвет: #1976d2 (синий)
- Secondary цвет: #dc004e (розовый)
- Шрифт: Roboto

## Разработка

### Режим разработки
```bash
npm run dev
```

### Продакшн сборка
```bash
npm run build
```

## Особенности

1. **Глобальный доступ**: React и React-DOM доступны глобально через `window.React` и `window.ReactDOM`
2. **Кастомная тема MUI**: Создана отдельная тема с настройками цветов и типографики
3. **Webpack сборка**: Настроена сборка с Babel для поддержки современного JavaScript
4. **Drupal интеграция**: Полная интеграция с системой библиотек Drupal

## Файлы конфигурации

- `package.json` - Node.js зависимости
- `webpack.config.js` - конфигурация сборки
- `web/themes/custom/react_theme/react_theme.libraries.yml` - библиотеки Drupal
- `web/themes/custom/react_theme/react_theme.info.yml` - информация о теме 