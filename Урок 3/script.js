//правила работы с JavaScript 
//  			1) Скрипт должен всегда находится в конце
//  			2) Скрипт работает с заранее загруженными(созданными) данными
//  			3) JavaScript обожает конкретику
//  			4) JavaScript начинается с документа (document)
//  			Заметка:
//				Переменная - это, простыми словами коробка, в котором будет содержаться те или иные данные





			// var - предназанчен для того, чтобы создавать контейнеры. В которые можно помещать те или иные данные.

			// var word - второе слова после var является переменная. Пеерменная это контейнер

			// Правило ковычек #1 = Если кавычка начинается двойной "_" - то и заканчиваться должна двойной

			// Правило ковычек #2 = Если кавычка начинается двойной "_" - то внутри этих кавычек нужно использовать только одинарные ковычки. "ismar + '1' " 

			// alert - модальное окно
			//console.log - вывести значения в консоль

			$(document).ready(function() {

				// $(document).ready(function(){ //выполняемый код }); - он нужен для того, чтобы наш код который будет заключен внутри него, выполнялся только после того как вся страница будет загруженна.

				//$("#search").val() - сокращенная форма document.getElementById("search").value

				//проверка поиска - пустое поле или нет
				$( "button.icon_search" ).click(function() {
					var val_search;

					val_search = $("#search").val();
					if(val_search.length >= 1){
						alert("Вы ввели: " + val_search);
					}else {
						alert("Поле поиска не может быть пустым!");
					}
				});

				//логика добавления товара в корзину:
				//$ - знак доллара означает все подключение к функции которая обращается к документу. Сокращенное обращение к любому элементу.

				//$ == document.getElementByID("")
				//$ == document.getElementsByClass("")
				//. - означает связываение одного блока, свойства, функции к другому
				// () - означают, что внутри помещаются параметры
				// "" - правило ккавычек если кавычка начинается на двойные "", то внутри него можно помещать только одинарные '' потому что если внутри двойных кавычек использовать двйные то она создаст цикл, открытие и закрытие и опять открытие и закрытие. Если одинарные то наоборот
				// [] - обращение к атрибутам
				// Рзаница между значением и содержимым
					//значением является то, что введено в поле по умолчанию либо пользователем
					//содержимым является то, что заключено в парные теги, либо это просто ТЕКСТ
						//чтобы получить значения используйте VALUE либо VAL()
						//чтобы получить содержимое используйте text()




				//$(".add_to_cart").click(function() {
				//	alert("Был клик");
				//}) 

				//$(".add_to_cart").click( function() {
					
				//	alert("Был клик" + $('[name="cvet"]').val());
				// });

				//$(this) - данное свойство позволяет обращаться к конкретному блоку который был нажат

				//$(".add_to_cart").click( function() {

    			//let cvet, razmer, kol, prd_ttl, oprice, prd_img; 


    				//цвет товара:
				//	cvet = $('.cvet').val();
					//размер товара:
				//	razmer = $('.razmer').val();
					//количество товара
				//	kol = $('.kol').val();
					//заголовоктовара:
				//	prd_ttl = $('.prd-ttl').text();
					//ценв товара:
				//	oprice = $('.oprice').text();
					//картинка товара:
				//	prd_img = $('.prd-img img').attr("src");

					//console.log(cvet);

				//});

					//$(".add_to_cart").click( function() {
					//    console.log($(this).parent().parent().parent().find(".cvet").val()); 
					//})

				//Добавление товаров в корзину:
				$(".add_to_cart").click( function() {
					let parent_div, razmer_val, kol_val, ttl_txt, oprice, old_price, prd_img;
					parent_div = $(this).parent().parent().parent().parent().parent();

					cvet_val = parent_div.find(".cvet").val();
					razmer_val = parent_div.find(".razmer").val();
					kol_val = parent_div.find(".kol").val();
					ttl_txt = parent_div.find(".prd-ttl").text();
					oprice = parent_div.find('.oprice').text();
					old_price = parent_div.find('.old_price').text();
					prd_img = parent_div.find('.prd-img img').attr("src");

					$(".block-cart ul").append('<li>\
													<div class="left b_img">\
														<img src=" '+ prd_img + ' " alt=" '+ ttl_txt +' width=85">\
													</div>\
													<div class="right b_desc">\
														<p class="cart_ttl"> ' + ttl_txt + '</p>\
														<span> '+cvet_val+'</span>\
														<span>/</span>\
														<span>'+razmer_val+'</span>\
														<span>/</span>\
														<span class="count_product">'+kol_val+'</span>\
														<div class="price">\
															<span class="current-price">\
																<span class="oprice">'+oprice+'</span>\
																<span class="currency">сом</span>\
															</span>\
															<del>\
															<span class="old_price">'+ old_price +'</span><span class="currency">сом</span></del>\
														</div>\
													</div>\
													<i class="fas fa-trash remove"></i>\
												</li>');
					//$(".block-cart") куда вставить, в какой блок? в какой класс?
					//.append('') - функция для вставки. Что вставить? - Нужно указать что вставлять

					alert("ваш товар " + ttl_txt+" успешно добавлен в корзину!"); 

					update_count_product();

					update_cart_price();

				});


				//Удаление товаров из корзины:
				$(document).on('click',  '.block-cart .remove', function() {
					$(this).parent().remove();

					update_count_product();

					update_cart_price();
				
				});

				
				//.click() - работает с теми данными которые есть на странице во время загрузки.
				//$(document).on('click' , "на что кликнуть", function () {}) - он работает со всем документом и знает что когда и куда добавляется
				//$(document) - это значит какую область необходимо анализировать наизменение и дополнение теми или иными тегами.
				//$("я могу написать любой блок") нужно использоват тот параметр в котором заключено все html теги для работы
				
				//on - это глобальная функция. которая помогает выявить действие на любую область сайта.
				//.on('click', -- click  в данном случае идет как конкретика. что нужно анаизировать, какое действие должно быть совершено
				// .on('click',  '.block-cart .remove', -- в данном случае второй параметр '.block-cart .remove' - дает конкретику. то есть на что именно должно быть нажато.

				//Этот код работает тольлко с теми данными которые есть изначально есть HTML:
				//$(  ".block-cart .remove"  ).click(function() {

				//	$(this).parent().remove();
				//})


				// расчет количества товара в корзине (обновление количества данных в корзине):
				function update_count_product() {
				
					let count_product_in_cart = 0;

					$(".count_product").each(function (index){
						count_product_in_cart = count_product_in_cart + +$(this).text();
					});

					$(".count_cart").text(count_product_in_cart);
				};


				function update_cart_price () {
				let result_price = 0;

					$(".block-cart .oprice").each(function (index){
						result_price = result_price + +$(this).text();
					});

					$(".result_cart").text( result_price + "с.");
				};



				//функции для переключения табов

				//$(".head_links li").click(function() {
				//	let parent_tabs, data_tabs;

					//для всех тегов внутри .tab_cont добавить dnone (display: none)
				//	$(".tabs_cont > div").addClass("dnone")

					//Данная строка получает значение атрибута data-tabs (tab_1, tab_2, tab_3)
				//	data_tabs = $(this).attr("data-tabs")

					//Данная строка получает родительский контейнер в котором все содержится (.tabs)
				//	parent_tabs = $(this).parent().parent();


				//	parent_tabs.find("."+data_tabs).removeClass("dnone").addClass('dblock');
				//});


				$(".head_links li").click(function() {
					let parent_tabs, data_tabs;

					$(".tabs_cont > div").removeClass('dblock');
					data_tabs = $(this).attr("data-tabs");
					parent_tabs = $(this).parent().parent();
					parent_tabs.find("."+data_tabs).addClass('dblock');
				});


				//не правильный вариант. Долгий и длинный, использует дублирование кода:

				//$(".minus").click(function(event) {
				//	console.log($(this).text());
					
				//});

				//$(".plus").click(function(event) {
				//	console.log($(this).text());
					
				//});

				$(".mnojitel").click(function() {
				let mnojitel, poluchit_input, input_val, product_price;

				mnojitel=$(this).text();
				poluchit_input = $(this).parent().find("input");
				input_val= +poluchit_input.val();
				product_price = +$(".single_price").text();


					//+ в начале это конвертация в число

				//Условные операторы if else: 

				
					if (mnojitel == "-") {
						if (input_val > 1) {
							input_val = input_val-1;
						}
					} else if (mnojitel == "+") {
						input_val = input_val+1;
					}
					poluchit_input.val(input_val);
					product_price = product_price*input_val;
					$(".pre_price").text(product_price);
				//if (mnojitel == "+") {
				//	console.log("это плюс");
				//}
				//вдальнейшем при необходимости защиты нужно использовать только IF для каждого значения без else 
				
				});

				//запоминание выбранного размера товара:
				$(".add_active li").click(function(){
					//$(".add_active li").removeClass("active");
					$(this).parent().find(".active").removeClass("active");
				    $(this).addClass('active');
				});



				//Функция добавления товара в корзину:

				function add_block_product (prdct_img, ttl_txt, cvet_val, razmer_val, kol_val, oprice) {
					$(".block-cart ul").append('<li>\
													<div class="left b_img">\
														<img src=" '+ prdct_img + ' " alt=" '+ ttl_txt +' width=85">\
													</div>\
													<div class="right b_desc">\
														<p class="cart_ttl"> ' + ttl_txt + '</p>\
														<span> '+cvet_val+'</span>\
														<span>/</span>\
														<span>'+razmer_val+'</span>\
														<span>/</span>\
														<span class="count_product">'+kol_val+'</span>\
														<div class="price">\
															<span class="current-price">\
																<span class="oprice">'+oprice+'</span>\
																<span class="currency">сом</span>\
															</span>\
														</div>\
													</div>\
													<i class="fas fa-trash remove"></i>\
												</li>');

					update_count_product();

					update_cart_price();
				}

				$(".add_product").click(function(event) {
					event.preventDefault();

					let prdct_img, ttl_txt, cvet_val, razmer_val, kol_val, oprice;

					cvet_val = $(".color li.active").text();
					razmer_val = $(".size li.active").text();
					kol_val = $(".block_kolichestvo input").val();
					ttl_txt = $(".product_ttl").text();
					oprice = $(".pre_price").text();
					prdct_img = $(".pdct_img li:first-child img").attr("src");


					//пример:
						//если cvet_val равен пустоте то вывести в консоли текст "Поле пустое"
						//если cvet_val то есть не выбран цвет товара то вывести в консоли текст "Поле пустое":
						//if(cvet_val == "") {console.log ("поле пустое"); }

						//if(cvet_val != "") {console.log ("поле не пустое");}
						// ==это равно, != это не равно
					

					//if(cvet_val == "" || razmer_val == "") { 
					//	alert("Поле color или size является обязательным!");
					//	$(".block_color").addClass("empty");
					//	$(".block_size").addClass("empty");
			
					//} else {
					//	$(".block_color").removeClass("empty");
					//	$(".block_size").removeClass("empty");
					
					//}


				
					//|| - этот оператор ИЛИ предназаначен чтобы склеить 2 условия
					//Например: первый ИЛИ второй = if ("первый" || "второй")
					//	В каких моментах используется?
					//	Например: условия
					//	Первый блок должен быть равен 5 или же второй блок должен быть равен 5
					//	= операция присваивания
					//	== операция сравнения
					//	=== операция сравнения + сравнение типа данных
					//	if ("5" ==== 5 || "второй блок" == 5) 
					//&& - этот оператор И предназаначен чтобы склеить 2 условия
					//Например: первый И второй = if ("первый" && "второй")

					//конец примера

					if(cvet_val == "") { 
						alert("Поле color не должно быть пустым!");
						$(".block_color").addClass("empty");
					} else {
						$(".block_color").removeClass("empty");
					} 

					if(razmer_val == "") { 
						alert("Поле size не должно быть пустым!");
						$(".block_size").addClass("empty");
					} else {
						$(".block_size").removeClass("empty");
					}

					if (cvet_val != "" && razmer_val != "") {
						add_block_product (prdct_img, ttl_txt, cvet_val, razmer_val, kol_val, oprice);

						alert("ваш товар успешно добавлен в корзину")
					}

					
				});


				//отправка комментария:
				$("#comment button").click(function(event) {
					event.preventDefault(); // - блокирует переход куда-то

					let txt_message, name, email;
					txt_message = $("#comment textarea").val();
					name = $("#comment input[type='name']").val();
					email = $("#comment input[type='email']").val();

					if (txt_message != "" && name != "" && email != "") {
						$(".message").append('<li class="from_me">\
													<p class="m_name">'+name+':</p>\
													<p class="m_text">'+txt_message+'</p>\
												</li>');

						//$("#comment").[0].reset();
						$("#comment textarea").val("");
					} else {
						alert ("Введите сообщение!")
					}
					

				});

				



			});
			
