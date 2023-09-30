import { lazy } from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage').catch(error => {
    // Обработка ошибки при загрузке компонента
    console.error('Failed to load AboutPage:', error);
    throw error; // Повторное возбуждение ошибки для показа в UI
  }));