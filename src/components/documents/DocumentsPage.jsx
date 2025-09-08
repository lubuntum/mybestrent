import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import styles from "./documents.module.css"
export const DocumentsPage = () => {
  return (
    <>
      <div className={styles.documentsPage}>
        <div className="container">
          <div className={styles.documentsHeader}>
            <h1>Документы и информация</h1>
            <p>Вся необходимая документация для аренды квартир</p>
          </div>

          <div className={styles.documentsContent}>
            <section className={styles.documentSection}>
              <h2>📋 Основные документы</h2>
              <div className={styles.documentsList}>
                <div className={styles.documentCard}>
                  <h3>Договор аренды</h3>
                  <p>Типовой договор аренды жилого помещения</p>
                  <a href="/documents/rental-agreement.pdf" className={styles.downloadLink}>
                    📄 Скачать договор.pdf
                  </a>
                </div>

                <div className={styles.documentCard}>
                  <h3>Акт приема-передачи</h3>
                  <p>Акт передачи имущества при заселении</p>
                  <a href="/documents/acceptance-act.pdf" className={styles.downloadLink}>
                    📄 Скачать акт.pdf
                  </a>
                </div>

                <div className={styles.documentCard}>
                  <h3>Инвентаризационная опись</h3>
                  <p>Опись имущества и мебели в квартире</p>
                  <a href="/documents/inventory-list.pdf" className={styles.downloadLink}>
                    📄 Скачать опись.pdf
                  </a>
                </div>
              </div>
            </section>

            <section className={styles.documentSection}>
              <h2>📝 Правила и инструкции</h2>
              <div className={styles.documentsList}>
                <div className={styles.documentCard}>
                  <h3>Правила проживания</h3>
                  <p>Основные правила и условия аренды</p>
                  <a href="/documents/house-rules.pdf" className={styles.downloadLink}>
                    📄 Скачать правила.pdf
                  </a>
                </div>

                <div className={styles.documentCard}>
                  <h3>Инструкция по эксплуатации</h3>
                  <p>Работа с техникой и оборудованием в квартире</p>
                  <a href="/documents/equipment-manual.pdf" className={styles.downloadLink}>
                    📄 Скачать инструкцию.pdf
                  </a>
                </div>

                <div className={styles.documentCard}>
                  <h3>Экстренные контакты</h3>
                  <p>Телефоны экстренных служб и аварийных служб</p>
                  <a href="/documents/emergency-contacts.pdf" className={styles.downloadLink}>
                    📄 Скачать контакты.pdf
                  </a>
                </div>
              </div>
            </section>

            <section className={styles.infoSection}>
              <h2>ℹ️ Для чего нужны эти документы?</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Договор аренды</h3>
                  <p>Определяет права и обязанности сторон, срок аренды, стоимость и условия оплаты. Защищает интересы как арендодателя, так и арендатора.</p>
                </div>

                <div className={styles.infoCard}>
                  <h3>Акт приема-передачи</h3>
                  <p>Фиксирует состояние квартиры и имущества на момент заселения. Помогает избежать споров при выселении.</p>
                </div>

                <div className={styles.infoCard}>
                  <h3>Инвентаризационная опись</h3>
                  <p>Подробное описание всего имущества в квартире. Необходима для контроля сохранности мебели и техники.</p>
                </div>

                <div className={styles.infoCard}>
                  <h3>Правила проживания</h3>
                  <p>Устанавливают порядок пользования общим имуществом, тишину в ночное время и другие важные моменты.</p>
                </div>
              </div>
            </section>

            <section className={styles.contactSection}>
              <h2>Нужна помощь с документами?</h2>
              <p>Мы поможем вам разобраться с любыми вопросами</p>
              <div className={styles.contactInfo}>
                <p>📧 Email: documents@apartment-rent.ru</p>
                <p>📞 Телефон: 8 (800) 123-45-67</p>
                <p>🕒 Время работы: Пн-Пт с 9:00 до 18:00</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
    
  );
};