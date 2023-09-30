import { useTranslation } from 'react-i18next';

const A = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default A;
