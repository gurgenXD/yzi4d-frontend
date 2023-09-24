// export default function ServiceMenu() {
//     return (
//         < div className="offcanvas-xl offcanvas-start bg-white" tabindex="-1" id="offcanvasFilters" aria - labelledby= "offcanvasFiltersLabel" >
//               <div className="offcanvas-header pb-3">
//                 <h5 className="offcanvas-title" id="offcanvasFiltersLabel">Анализы</h5>

//                 <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasFilters" aria-label="Close"></button>
//               </div>

//               <div className="offcanvas-body pt-0">
//                 <div className="bg-xl-white xl-shadow rounded-3 w-100 px-0 px-xl-4 py-0 py-xl-3 mb-4">
//                   <div className="sidebar">
//                     <ul className="nav">
//                       <li className="nav-item has-submenu">
//                         <a className="nav-link active" href="#">
//                           Комплексы анализов

//                           <span className="caret">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
//                               <path
//                                 d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
//                             </svg>
//                           </span>
//                         </a>

//                         <ul className="submenu collapse show">
//                           <li><a className="nav-link" href="analyses-category.html">COVID-19</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Программа обследования для офисных сотрудников</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Обследование домашнего персонала</a></li>
//                           <li>
//                             <a className="nav-link active" href="analyses-category.html">Оценка риска развития заболеваний сердечно-сосудистой системы</a>
//                           </li>
//                           <li><a className="nav-link" href="analyses-category.html">Диагностика антифосфолипидного синдрома (АФС)</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Оценка функции печени</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Диагностика состояния почек и мочеполовой системы</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Диагностика состояния желудочно-кишечного тракта</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Диагностика заболеваний соединительной ткани</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Диагностика сахарного диабета</a></li>
//                         </ul>
//                       </li>

//                       <li className="nav-item">
//                         <a className="nav-link" href="analyses-category.html">COVID-19</a>
//                       </li>

//                       <li className="nav-item has-submenu">
//                         <a className="nav-link" href="#">
//                           Биохимические исследования

//                           <span className="caret">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
//                               <path
//                                 d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
//                             </svg>
//                           </span>
//                         </a>

//                         <ul className="submenu collapse">
//                           <li><a className="nav-link" href="analyses-category.html">Глюкоза и метаболиты углеводного обмен</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Белки и аминокислоты</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Желчные пигменты и кислоты</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Липиды</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Ферменты</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Маркеры функции почек</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Неорганические вещества/электролиты</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Витамины</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Белки, участвующие в обмене железа</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Кардиоспецифичные белки</a></li>
//                         </ul>
//                       </li>

//                       <li className="nav-item has-submenu">
//                         <a className="nav-link" href="#">
//                           Гормональные исследования

//                           <span className="caret">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
//                               <path
//                                 d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
//                             </svg>
//                           </span>
//                         </a>

//                         <ul className="submenu collapse">
//                           <li><a className="nav-link" href="analyses-category.html">Лабораторная оценка гипофизарно-надпочечниковой системы</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Лабораторная оценка соматотропной функции гипофиза</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Лабораторная оценка функции щитовидной железы</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Оценка функции паращитовидных желез</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Гипофизарные гонадотропные гормоны и пролактин</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Эстрогены и прогестины</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Оценка андрогенной функции</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Нестероидные регуляторные факторы половых желёз</a></li>
//                           <li>
//                             <a className="nav-link" href="analyses-category.html">Мониторинг беременности, биохимические маркёры состояния плода</a>
//                           </li>
//                           <li>
//                             <a className="nav-link" href="analyses-category.html">
//                               Лабораторная оценка эндокринной функции поджелудочной железы и диагностика диабета
//                             </a>
//                           </li>
//                         </ul>
//                       </li>

//                       <li className="nav-item has-submenu">
//                         <a className="nav-link" href="#">
//                           Гематологические исследования

//                           <span className="caret">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
//                               <path
//                                 d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
//                             </svg>
//                           </span>
//                         </a>

//                         <ul className="submenu collapse">
//                           <li><a className="nav-link" href="analyses-category.html">Клинический анализ крови</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Иммуногематологические исследования</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Коагулологические исследования (коагулограмма)</a></li>
//                         </ul>
//                       </li>

//                       <li className="nav-item has-submenu">
//                         <a className="nav-link" href="#">
//                           Иммунологические исследования

//                           <span className="caret">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
//                               <path
//                                 d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
//                             </svg>
//                           </span>
//                         </a>

//                         <ul className="submenu collapse">
//                           <li><a className="nav-link" href="analyses-category.html">Комплексные иммунологические исследования</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Лимфоциты, субпопуляции</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Оценка фагоцитоза</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Иммуноглобулины</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Компоненты комплемента</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Регуляторы и медиаторы иммунитета</a></li>
//                           <li>
//                             <a className="nav-link" href="analyses-category.html">
//                               Интерфероновый статус, оценка чувствительности к иммунотерапевтическим препаратам
//                             </a>
//                           </li>
//                         </ul>
//                       </li>

//                       <li className="nav-item has-submenu">
//                         <a className="nav-link" href="#">
//                           Аллергологические исследования

//                           <span className="caret">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
//                               <path
//                                 d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
//                             </svg>
//                           </span>
//                         </a>

//                         <ul className="submenu collapse">
//                           <li>
//                             <a className="nav-link" href="analyses-category.html">IgE - аллерген-специфические (аллерготесты), смеси, панели, общий Ig</a>
//                           </li>
//                           <li><a className="nav-link" href="analyses-category.html">IgG, аллерген-специфические</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Технология ImmunoCAP</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Технология АлкорБио</a></li>
//                         </ul>
//                       </li>

//                       <li className="nav-item has-submenu">
//                         <a className="nav-link" href="#">
//                           Маркеры аутоиммунных заболеваний

//                           <span className="caret">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
//                               <path
//                                 d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
//                             </svg>
//                           </span>
//                         </a>

//                         <ul className="submenu collapse">
//                           <li><a className="nav-link" href="analyses-category.html">Системные заболевания соединительной ткани</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Ревматоидный артрит, поражения суставов</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Антифосфолипидный синдром</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Васкулиты и поражения почек</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Аутоиммунные поражения желудочно-кишечного тракта. Целиакия</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Аутоиммунные поражения печени</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Неврологические аутоиммунные заболевания</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Аутоиммунные эндокринопатии</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Аутоиммунные заболевания кожи</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Заболевания легких и сердца</a></li>
//                           <li><a className="nav-link" href="analyses-category.html">Иммунная тромбоцитопения</a></li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div >
//     )
// }
