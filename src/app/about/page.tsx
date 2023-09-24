export default function About() {
    return (
        <main role="main" className="flex-shrink-0">
            <div className="overflow-hidden">
                <div className="container pt-4 pt-lg-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Главная</a>
                        </li>
                        <li className="breadcrumb-item active">О клинике</li>
                    </ol>

                    <article className="article">
                        <h1>О клинике</h1>

                        <p>Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.</p>

                        <p>
                            Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот,
                            на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло. Его многочисленные, убого тонкие по сравнению с остальным
                            телом ножки беспомощно копошились у него перед глазами.
                        </p>

                        <div className="mb-sm-4 mb-3">
                            <div className="ratio ratio-16x9 rounded overflow-hidden">
                                <iframe
                                    width="1280"
                                    height="720"
                                    src="https://www.youtube.com/embed/-vwwDTeyqaI"
                                    title="Экспертное УЗИ в Клинике здоровья современной женщины"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            </div>

                            <div className="caption text-muted">
                                YouTube-канал
                                <a href="https://www.youtube.com/@MartclinicRu" target="_blank">Медицинский центр МАРТ</a>
                            </div>
                        </div>

                        <p>
                            «Что со мной случилось? » – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно
                            покоилась в своих четырех хорошо знакомых стенах.
                        </p>

                        <h2>Подзаголовок поменьше</h2>

                        <p>
                            Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из
                            иллюстрированного журнала и вставил в красивую золоченую рамку. На портрете была изображена дама в меховой шляпе и боа, она сидела очень
                            прямо и протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука.
                        </p>

                        <ul>
                            <li>Элемент списка</li>
                            <li>Элемент списка</li>
                            <li>Элемент списка</li>
                            <li>
                                Элемент списка с вложенностью
                                <ul>
                                    <li>Элемент списка</li>
                                    <li>Элемент списка</li>
                                    <li>Элемент списка</li>
                                </ul>
                            </li>
                            <li>Элемент списка</li>
                        </ul>

                        <p>
                            Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно было, как по жести подоконника стучат капли дождя – привела его и вовсе в
                            грустное настроение.
                        </p>

                        <ol>
                            <li>Элемент списка</li>
                            <li>Элемент списка</li>
                            <li>Элемент списка</li>
                            <li>Элемент списка</li>
                            <li>Элемент списка</li>
                        </ol>

                        <div className="mb-sm-4 mb-3">
                            <a href="https://source.unsplash.com/e7MJLM5VGjY/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                <img src="https://source.unsplash.com/e7MJLM5VGjY/1110x624" className="w-100 rounded" />
                            </a>

                            <div className="caption text-muted">
                                Источник:
                                <a href="https://unsplash.com" target="_blank">unsplash.com</a>
                            </div>
                        </div>

                        <p>
                            «Хорошо бы еще немного поспать и забыть всю эту чепуху», – подумал он, но это было совершенно неосуществимо, он привык спать на правом боку,
                            а в теперешнем своем состоянии он никак не мог принять этого положения. С какой бы силой ни поворачивался он на правый бок, он неизменно
                            сваливался опять на спину.
                        </p>

                        <h3>Маленький подзаголовок страницы</h3>

                        <p>
                            Закрыв глаза, чтобы не видеть своих барахтающихся ног, он проделал это добрую сотню раз и отказался от этих попыток только тогда, когда
                            почувствовал какую-то неведомую дотоле, тупую и слабую боль в боку. «Ах ты, господи, – подумал он, – какую я выбрал хлопотную профессию! Изо
                            дня в день в разъездах.
                        </p>

                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <caption>Таблица 2.1</caption>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Имя</th>
                                        <th scope="col">Фамилия</th>
                                        <th scope="col">Должность</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Андрей</td>
                                        <td>Петров</td>
                                        <td>Менеджер</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Виктор</td>
                                        <td>Степанов</td>
                                        <td>Бухгалтер</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Иван</td>
                                        <td>Григорьев</td>
                                        <td>Завхоз</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Деловых волнений куда больше, чем на месте, в торговом доме, а кроме того, изволь терпеть тяготы дороги, думай о расписании поездов, мирись с
                            плохим, нерегулярным питанием, завязывай со все новыми и новыми людьми недолгие, никогда не бывающие сердечными отношения. Черт бы побрал все
                            это!»
                        </p>

                        <h4>Очень мальнький подзаголовок</h4>

                        <p>
                            Он почувствовал вверху живота легкий зуд; медленно подвинулся на спине к прутьям кровати, чтобы удобнее было поднять голову; нашел зудевшее
                            место, сплошь покрытое, как оказалось, белыми непонятными точечками; хотел было ощупать это место одной из ножек, но сразу отдернул ее, ибо
                            даже простое прикосновение вызвало у него, Грегора, озноб. Он соскользнул в прежнее свое положение.
                        </p>

                        <div className="fit-to-text mb-sm-4 mb-3">
                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery2">
                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="w-100 rounded" />
                            </a>

                            <div className="caption text-muted">
                                Источник:
                                <a href="https://unsplash.com" target="_blank">unsplash.com</a>
                            </div>
                        </div>

                        <p>
                            «От этого раннего вставания, – подумал он, – можно совсем обезуметь. Человек должен высыпаться. Другие коммивояжеры живут, как одалиски.
                            Когда я, например, среди дня возвращаюсь в гостиницу, чтобы переписать полученные заказы, эти господа только завтракают. А осмелься я вести
                            себя так, мои хозяин выгнал бы меня сразу. Кто знает, впрочем, может быть, это было бы даже очень хорошо для меня.
                        </p>

                        <p>
                            Если бы я не сдерживался ради родителей, я бы давно заявил об уходе, я бы подошел к своему хозяину и выложил ему все, что о нем думаю. Он бы
                            так и свалился с конторки! Странная у него манера – садиться на конторку и с ее высоты разговаривать со служащим, который вдобавок вынужден
                            подойти вплотную к конторке из-за того, что хозяин туг на ухо.
                        </p>

                        <h5>Крохотный подзаголовок</h5>

                        <p>
                            Однако надежда еще не совсем потеряна: как только я накоплю денег, чтобы выплатить долг моих родителей – на это уйдет еще лет пять-шесть, – я
                            так и поступлю. Тут-то мы и распрощаемся раз и навсегда. А пока что надо подниматься, мой поезд отходит в пять». И он взглянул на будильник,
                            который тикал на сундуке. «Боже правый!» – подумал он.
                        </p>

                        <div className="mb-4">
                            <div className="row g-3 g-lg-4">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="img img-zoom position-relative">
                                        <div className="ratio ratio-4x3 overflow-hidden rounded">
                                            <a href="https://source.unsplash.com/PT70CT6mATQ/1920x1080" data-caption="Описание изображения" data-fancybox="Gallery1">
                                                <img src="https://source.unsplash.com/PT70CT6mATQ/1110x624" className="img-image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="caption text-muted">
                                Источник:
                                <a href="https://unsplash.com" target="_blank">unsplash.com</a>
                            </div>
                        </div>

                        <p>
                            Было половина седьмого, и стрелки спокойно двигались дальше, было даже больше половины, без малого уже три четверти. Неужели будильник не
                            звонил? С кровати было видно, что он поставлен правильно, на четыре часа; и он, несомненно, звонил. Но как можно было спокойно спать под этот
                            сотрясающий мебель трезвон? Ну, спал-то он неспокойно, но, видимо, крепко. Однако что делать теперь?
                        </p>
                    </article>
                </div>

                <section className="container py-lg-6 py-5">
                    <h2 className="mb-md-5 mb-4">Отделения и центры</h2>

                    <div className="row g-xxl-4 g-3">
                        <div className="col-xl-4 col-md-6">
                            <div
                                className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">Центр кардионефрологии</a>

                                <p className="card-text mb-3">
                                    Первый в СКФО Центр кардионефрологии специализируется на оказании медицинской помощи людям с сочетанной патологией сердца и почек
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div
                                className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">Центр кардионефрологии</a>

                                <p className="card-text mb-3">
                                    Первый в СКФО Центр кардионефрологии специализируется на оказании медицинской помощи людям с сочетанной патологией сердца и почек
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div
                                className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">Центр кардионефрологии</a>

                                <p className="card-text mb-3">
                                    Первый в СКФО Центр кардионефрологии специализируется на оказании медицинской помощи людям с сочетанной патологией сердца и почек
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div
                                className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">Центр кардионефрологии</a>

                                <p className="card-text mb-3">
                                    Первый в СКФО Центр кардионефрологии специализируется на оказании медицинской помощи людям с сочетанной патологией сердца и почек
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div
                                className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                                style={{ backgroundImage: "url('/img/service-bg-icon_1.svg')" }}>
                                <a href="#" className="card-title stretched-link d-block text-secondary fw-bold mb-2">Центр кардионефрологии</a>

                                <p className="card-text mb-3">
                                    Первый в СКФО Центр кардионефрологии специализируется на оказании медицинской помощи людям с сочетанной патологией сердца и почек
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </main >
    )
}