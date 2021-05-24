"use strict";var showFixedDialog=function(){var t=document.querySelector(".dialog");t&&t.addEventListener("click",function(){t.classList.toggle("dialog__show")})};document.addEventListener("DOMContentLoaded",function(){sandwichToggle(),showFixedDialog(),footerSandwichToggle(),footerMenu(),clickHeaderMenu(),policyRender();new Swiper(".swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});var sandwichToggle=function(){var t=document.querySelectorAll(".sandwich"),n=document.querySelector(".footer-sandwich");function e(){var t,e=document.querySelector(".footer__top--grid"),o=document.querySelector("body");e&&((t=document.createElement("div")).classList.add("footer__mobile"),t.classList.add("_is-fixed"),t.innerHTML='\n\t\t\t\t<div class="footer-sandwich is-active">\n\t\t\t\t\t<div class="footer-sandwich__line footer-sandwich__line--top"></div>\n\t\t\t\t\t<div class="footer-sandwich__line footer-sandwich__line--middle"></div>\n\t\t\t\t\t<div class="footer-sandwich__line footer-sandwich__line--bottom"></div>\n\t\t\t\t</div>\n\t\t\t',e.appendChild(t),e.classList.toggle("_showMenu"),n.classList.toggle("is-active"),o.classList.toggle("_noScroll"),document.querySelector("._is-fixed").addEventListener("click",function(){document.querySelector(".footer__top--grid").classList.remove("_showMenu"),e.removeChild(t),n.classList.remove("is-active"),o.classList.remove("_noScroll")}))}t.forEach(function(t){t.addEventListener("click",e)})},footerSandwichToggle=function(){var t=document.querySelectorAll(".footer-sandwich"),o=document.querySelector(".footer-sandwich");function e(){var t=document.querySelector(".footer__top--grid"),e=document.querySelector("body");t&&(t.classList.toggle("_showMenu"),o.classList.toggle("is-active"),e.classList.toggle("_noScroll"),document.querySelector(".footer__mobile").classList.toggle("_is-fixed"))}t.forEach(function(t){t.addEventListener("click",e)})},footerMenu=function(){var t=document.querySelectorAll(".footer__top-nav");t&&t.forEach(function(e){e.addEventListener("click",function(t){e.childNodes[1].classList.toggle("_rotate"),e.childNodes[3].classList.toggle("_is-block")})})},clickHeaderMenu=function(){var t=document.querySelectorAll(".header__nav-link[data-goto]"),e=document.querySelectorAll(".header__top-link[data-goto]");function o(t){t.preventDefault();var e,o=t.target;o.dataset.goto&&document.querySelector(o.dataset.goto)&&(e=document.querySelector(o.dataset.goto),t=document.querySelector(".sandwich"),o=document.querySelector(".header__nav"),e=e.getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight,t.classList.contains("is-active")&&(document.body.classList.remove("_noScroll"),t.classList.remove("is-active"),o.classList.remove("_active")),window.scrollTo({top:e,behavior:"smooth"}))}0<t.length&&t.forEach(function(t){t.addEventListener("click",o)}),0<e.length&&e.forEach(function(t){t.addEventListener("click",o)})};function policyRender(){var t=document.getElementById("policy-dialog");t&&document.querySelector(".footer__copyright--link").addEventListener("click",function(){t.innerHTML="\n\t\t\t\t<h1>Политика конфиденциальности</h1>\n\t\t\t\t<p>Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональной информации о Пользователях, которую Общество с ограниченной ответственностью «наименование» (далее — «Администрация»), может получить во время использования ими Cервиса Администрации (далее — Сервисы).</p>\n\t\t\t\t<p>Перед использованием Сервиса, пользователям следует ознакомиться с условиями настоящей Политики конфиденциальности.</p>\n\t\t\t\t<h2>1. Общие положения</h2>\n\t\t\t\t<p>1.1. Использование Сервиса в любой форме означает безоговорочное согласие Пользователя с условиями настоящей Политики конфиденциальности и указанными в ней условиями обработки его персональной информации. В случае несогласия с условиями Политики конфиденциальности Пользователь должен воздержаться от использования Сервиса.</p>\n\t\t\t\t<p>1.2. Политика конфиденциальности (в том числе любая из ее частей) может быть изменена Администрацией без какого-либо специального уведомления и без выплаты какой-либо компенсации в связи с этим. Новая редакция Политики конфиденциальности вступает в силу с момента ее размещения на сайте Администрации.</p>\n\t\t\t\t<p>1.3. Принимая условия настоящей Политики, Пользователь выражает свое согласие на обработку Администрацией данных о Пользователе в целях, предусмотренных настоящей Политикой, а также на передачу данных о Пользователе третьим лицам в случаях, перечисленных в настоящей Политике.</p>\n\t\t\t\t<p>Указанное согласие может быть отозвано Пользователем только при условии письменного уведомления им Администрации не менее чем за 180 дней до предполагаемой даты прекращения использования данных Администрацией.</p>\n\t\t\t\t<p>Использование Сервиса с помощью веб-браузера, который принимает данные из cookies, означает выражение согласия Пользователя с тем, что Администрация может собирать и обрабатывать данные из cookies в целях, предусмотренных настоящей Политикой, а также на передачу данных из cookies третьим лицам в случаях, перечисленных в настоящей Политике.</p>\n\t\t\t\t<p>Отключение и/или блокировка Пользователем опции веб-браузера по приему данных из cookies означает запрет на сбор и обработку Администрацией данных из cookies в соответствии с условиями настоящей Политики конфиденциальности.</p>\n\t\t\t\t<p>1.4. По общему правилу Администрация не проверяет достоверность предоставляемой Пользователями персональной информации. Вместе с тем в случаях, предусмотренных Пользовательским соглашением, Пользователь обязан предоставить подтверждение достоверности предоставленной им персональной информации о себе.</p>\n\t\t\t\t<h2>2. Состав информации о Пользователях, которую получает и обрабатывает Администрация</h2>\n\t\t\t\t<p>2.1.Настоящая Политика распространяется на следующие виды персональной информации:</p>\n\t\t\t\t<p>2.1.1. Персональная информация, размещаемая Пользователями, в т.ч. о себе самостоятельно при заполнении формы отправки сообщения, иная персональная информация, доступ к которой Пользователь предоставляет Администрации через веб-сайты или сервисы третьих лиц, или персональная информация, размещаемая Пользователями в процессе использования Сервиса. К персональной информации, полученной таким образом, могут относиться, в частности, фамилия, имя, номер телефона, адрес электронной почты Пользователя, адрес для доставки заказа. Иная информация предоставляется Пользователем на его усмотрение.</p>\n\t\t\t\t<p>Запрещается предоставление Пользователем персональных данных третьих лиц без полученного от третьих лиц разрешения на такое распространение либо, если такие персональные данные третьих лиц не были получены самим Пользователем из общедоступных источников информации.</p>\n\t\t\t\t<p>2.1.2. Настоящая Политика распространяет свое действие так же на кандидатов на имеющиеся вакансии Администрации, наряду с иными Пользователями. Кандидаты на вакансии, отправляя резюме Администрации с помощью Сервиса, либо по электронной почте, с целью прохождения собеседования и дальнейшего трудоустройства, выражают таким образом согласие на обработку следующих персональных данных: фамилия, имя, отчество, дата рождения, гражданство, город проживания, контакты (телефон, адрес электронной почты), места работы и даты работы, а также иных данных, указанных кандидатами на вакансии в резюме.</p>\n\t\t\t\t<p>2.1.3. Продавец гарантирует Покупателю сохранение конфиденциальности следующей персональной информации о Покупателе:</p>\n\t\t\t\t<ul>\n\t\t\t\t<li>— информация о карте пользователя (последние 4 цифры);</li>\n\t\t\t\t<li>— сведения о покупках и заказах.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>Указанная информация передается Продавцом третьим лицам исключительно с целью осуществления оплаты заказа платежной системой; иные случаи передачи указанной информации третьим лицам не допускаются.</p>\n\t\t\t\t<p>2.1.4. Данные, автоматически передаваемые Сервису в процессе их использования с помощью установленного на устройстве Пользователя программного обеспечения, в т.ч. IP-адрес, индивидуальный сетевой номер устройства (MAC-адрес, ID устройства), электронный серийный номер (IMEI, MEID), данные из cookies, информация о браузере, операционной системе, времени доступа, поисковых запросах Пользователя.</p>\n\t\t\t\t<p>2.1.5. Данные, дополнительно предоставляемые Пользователями по запросу Администрации в целях выполнения обязательств Администрации перед Пользователями в отношении использования Сервиса.</p>\n\t\t\t\t<p>2.1.6. Иная информация о Пользователях, сбор и/или обработка которой установлены пользовательским соглашением Администрации.</p>\n\t\t\t\t<h2>3. Цели сбора и обработки информации о Пользователях</h2>\n\t\t\t\t<p>3.1. Администрация осуществляет сбор и обработку только той информации о Пользователях, в т.ч. их персональных данных, которая необходима для выполнения обязательств Администрации по предоставлению Сервиса, ответа на вопрос, заданный Пользователем при отправке сообщения с помощью Сервиса, а также исполнения обязательств, предусмотренных пользовательским соглашением.</p>\n\t\t\t\t<p>3.2. Администрация может использовать персональную информацию Пользователей для целей:</p>\n\t\t\t\t<p>3.2.1. идентификации стороны в рамках договоров между Пользователем и Администрацией.</p>\n\t\t\t\t<p>3.2.2.предоставления Пользователям услуг с использованием Сервиса и для выполнения своих обязательств перед ними, в т.ч. уточнения данных платежа, обработки заказов и запросов и дальнейшего совершенствования Сервиса, разработки новых сервисов и услуг.</p>\n\t\t\t\t<p>3.2.3. информирования Пользователей о появлении новых материалов на Сайте, направления запросов, касающихся использования Сервиса, обратной связи с Пользователем.</p>\n\t\t\t\t<p>3.2.4. выполнения маркетинговых задач, проведения статистических и иных исследований на основе обезличенных данных,</p>\n\t\t\t\t<p>3.2.5. информирования Пользователя посредством электронных рассылок. Предоставляя свои данные, Пользователь соглашается на получение сообщений рекламно-информационного характера и сервисных сообщений (рассылку).</p>\n\t\t\t\t<p>3.3. Целями обработки персональных данных кандидатов на вакансии являются:</p>\n\t\t\t\t<ul>\n\t\t\t\t<li>— Обеспечение соблюдения требований законодательства РФ.</li>\n\t\t\t\t<li>— Решение вопросов трудоустройства, оформление и регулирование трудовых отношений.</li>\n\t\t\t\t<li>— Отражение информации в кадровых документах.</li>\n\t\t\t\t<li>— Иные цели обработки ПД могут быть утверждены приказом Оператора.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>3.4. Мобильные приложения могут собирать анонимные данные о местоположении пользователя, для того чтобы обеспечить более корректную работу с выбором способа платежа. Мобильные приложения могут собирать анонимную статистику использования.</p>\n\t\t\t\t<p>3.5. Настоящим Пользователь выражает свое согласие на передачу персональной информации о нем партнерам Администрации, третьим лицам в целях, предусмотренных п. 3.2 настоящей Политики конфиденциальности.</p>\n\t\t\t\t<p>3.6. При необходимости использовать персональную информацию о Пользователе в целях, не предусмотренных настоящей Политикой, Администрация запрашивает согласие Пользователя на такие действия.</p>\n\t\t\t\t<h2>4. Обработка информации о Пользователях</h2>\n\t\t\t\t<p>4.1. Персональная информация о Пользователях хранится в соответствии с действующим законодательством.</p>\n\t\t\t\t<p>4.2. Персональная информация о Пользователях не передается третьим лицам, за исключением следующих случаев:</p>\n\t\t\t\t<p>4.2.1. Пользователь выразил согласие на такие действия.</p>\n\t\t\t\t<p>4.2.2. Передача необходима в целях обеспечения функционирования Сервиса и/или его отдельных функциональных возможностей.</p>\n\t\t\t\t<p>4.2.3. Передача предусмотрена применимым правом.</p>\n\t\t\t\t<p>4.2.4. В целях обеспечения возможности защиты прав и законных интересов Администрации и/или третьих лиц в случаях, когда Пользователь нарушает условия пользовательского соглашения.</p>\n\t\t\t\t<p>4.2.5. Если Администрация примет участие в слиянии, приобретении или любой другой форме продажи части или всех своих активов. При этом к приобретателю активов Администрации переходят все обязательства по соблюдению условий настоящей Политики.</p>\n\t\t\t\t<p>4.3. Пользователь настоящим уведомлен и соглашается, что Администрация может получать персональные данные третьих лиц, которые предоставляются Пользователем при использовании Сервиса и использовать их для реализации отдельных функций Сервиса, при условии, что Пользователь гарантирует наличие согласия третьих лиц, данные о которых предоставляются Пользователем при использовании Сервиса, на обработку Администрацией, в целях, предусмотренных настоящей Политикой, а также на передачу таких данных в случаях, перечисленных в настоящей Политике.</p>\n\t\t\t\t<p>4.4. Кроме того, Пользователь настоящим уведомлен и соглашается, что Администрация может получать статистические обезличенные (без привязки к Пользователю) данные о действиях Пользователя при использовании Сервиса.</p>\n\t\t\t\t<p>4.5. Пользователи вправе по запросу получать от Администрации информацию, касающуюся обработки их персональных данных.</p>\n\t\t\t\t<h2>5. Меры по защите информации о Пользователях</h2>\n\t\t\t\t<p>5.1. Администрация принимает все необходимые и достаточные организационные и технические меры для защиты персональной информации о Пользователях от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, распространения персональной информации, а также от иных неправомерных действий с ней. К этим мерам относятся, в частности, внутренняя проверка процессов сбора, хранения и обработки данных и мер безопасности, включая меры по обеспечению физической безопасности данных для предотвращения неавторизированного доступа к персональной информации.</p>\n\t\t\t\t<p>5.2. При обработке персональных данных Пользователей Администрация руководствуется Федеральным законом «О персональных данных» от 27.07.2006 г. № 152-ФЗ.</p>\n\t\t\t\t<h2>6. Заключительные положения</h2>\n\t\t\t\t<p>6.1. Настоящая Политика, отношения между Пользователем и Администрацией, возникающие в связи с применением настоящей Политики, а также вопросы, не урегулированные настоящей Политикой, регулируются действующим законодательством Российской Федерации.</p>\n\t\t\t"})}$(document).ready(function(){$(".popup-youtube").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0}),$("#phone").mask("+7 (999) 999-99-99"),$(document).magnificPopup({delegate:"a.popup__link",type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"})}),$(document).mouseup(function(t){var e=$(".dialog");e.is(t.target)||0!==e.has(t.target).length||e.removeClass("dialog__show")});