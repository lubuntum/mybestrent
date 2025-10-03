import { useLayoutEffect } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import styles from "./documents.module.css"
export const DocumentsPage = () => {
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  }, [])
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
                  <a href="/documents/Пример договора.pdf" className={styles.downloadLink}>
                    📄 Скачать договор.pdf
                  </a>
                </div>
                <div className={styles.documentCard}>
                  <h3>Акт выполненных работ</h3>
                  <p>Акт выполненных работ пример</p>
                  <a href="/documents/Акт выполненных работ пример.pdf" className={styles.downloadLink}>
                    📄 Скачать акт.pdf
                  </a>
                </div>

              </div>
            </section>

            <section className={styles.documentSection}>
              <h2>📝 Правила и инструкции</h2>
              <div className={styles.documentsList}>
                <div className={styles.documentCard}>
                  <h3>Правила проживания</h3>
                  <p>Правила проживания и эксплуатации</p>
                  <a href="/documents/Правила проживания.pdf" className={styles.downloadLink}>
                    📄 Скачать акт.pdf
                  </a>
                </div>

                <div className={styles.documentCard}>
                  <h3>Экстренные контакты</h3>
                  <p>Телефоны экстренных служб и аварийных служб</p>
                  <a href="/documents/Экстренные службы.pdf" className={styles.downloadLink}>
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
                  <h3>Акт выполненных работ</h3>
                  <p>Отображает все выполненные или оказанные услуг исполнителем в полном обьеме.</p>
                </div>

                <div className={styles.infoCard}>
                  <h3>Правила проживания</h3>
                  <p>Устанавливают порядок пользования общим имуществом, тишину в ночное время и другие важные моменты.</p>
                </div>

                 <div className={styles.infoCard}>
                  <h3>Экстренные контакты</h3>
                  <p>Номера на все различные чрезвычайные ситуации.</p>
                </div>
              </div>
            </section>

            <section className={styles.contactSection}>
              <h2>Нужна помощь с документами?</h2>
              <p>Мы поможем вам разобраться с любыми вопросами</p>
              <div className={styles.contactInfo}>
                <p>Email: marinammmaa@mail.ru</p>
                <p>Телефон: 8 (993) 033-83-50</p>
                <p>Время работы: Пн-Пт с 9:00 до 18:00</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
    
  );
};