import React from 'react';
import styles from './amenitiest-card.module.css';

export const AmenitiestCard =  () =>  {
  return (
    <div className={styles.amenitiesCard}>
      <div className={styles.cardHeader}>
        <h2>Что вас ждет в наших квартирах?</h2>
        <p className={styles.subtitle}>Комфорт и забота о каждом госте</p>
      </div>

      <div className={styles.cardContent}>
        {/* Amenities Grid */}
        <div className={styles.amenitiesGrid}>
          <div className={styles.amenityItem}>
            <div className={styles.amenityIcon}>🧴</div>
            <div className={styles.amenityText}>
              <h4>Гигиенические принадлежности</h4>
              <p>Шампунь, гель для душа, жидкое мыло, зубные наборы</p>
            </div>
          </div>

          <div className={styles.amenityItem}>
            <div className={styles.amenityIcon}>🛏️</div>
            <div className={styles.amenityText}>
              <h4>Комфортный сон</h4>
              <p>Глаженное постельное белье в индивидуальных пакетах, двуспальная кровать с ортопедическим матрасом (160×200)</p>
            </div>
          </div>

          <div className={styles.amenityItem}>
            <div className={styles.amenityIcon}>🍳</div>
            <div className={styles.amenityText}>
              <h4>Полностью оборудованная кухня</h4>
              <p>Холодильник, варочная панель, микроволновая печь, чайник, посуда и столовые приборы</p>
            </div>
          </div>

          <div className={styles.amenityItem}>
            <div className={styles.amenityIcon}>💇</div>
            <div className={styles.amenityText}>
              <h4>Бытовые удобства</h4>
              <p>Фен, утюг, гладильная доска</p>
            </div>
          </div>

          <div className={styles.amenityItem}>
            <div className={styles.amenityIcon}>📺</div>
            <div className={styles.amenityText}>
              <h4>Развлечения и связь</h4>
              <p>Smart TV, высокоскоростной интернет</p>
            </div>
          </div>
        </div>

        {/* Service Section */}
        <div className={styles.serviceSection}>
          <div className={styles.serviceText}>
            <h3>Качественный сервис</h3>
            <p>По любому вопросу можете обратиться к нам, мы с удовольствием поможем решить все вопросы</p>
          </div>
        </div>

        {/* Conditions Section */}
        <div className={styles.conditionsSection}>
          <h3>Условия проживания</h3>
          <div className={styles.conditionsGrid}>
            <div className={styles.conditionItem}>
              <div className={styles.conditionTime}>14:00</div>
              <div className={styles.conditionText}>Заселение после</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionTime}>12:00</div>
              <div className={styles.conditionText}>Выезд до</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionAmount}>1500 ₽</div>
              <div className={styles.conditionText}>Страховой залог</div>
            </div>
            <div className={styles.conditionItem}>
              <div className={styles.conditionAge}>25+</div>
              <div className={styles.conditionText}>Минимальный возраст</div>
            </div>
          </div>
          <div className={styles.conditionNote}>
            * Ранний заезд и поздний выезд оговаривается заранее
          </div>
        </div>
      </div>
    </div>
  );
}

