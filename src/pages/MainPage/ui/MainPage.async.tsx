import { lazy } from 'react';

export const MainPageAsync = lazy(() => import('./MainPage').catch(error => {
  // Обработка ошибки при загрузке компонента
  console.error('Failed to load MainPage:', error);
  throw error; // Повторное возбуждение ошибки для показа в UI
}));
