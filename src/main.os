#Использовать "model"

Процедура ПриНачалеРаботыСистемы()
	
	ИспользоватьСтатическиеФайлы();
	ИспользоватьАвторизацию();
	ИспользоватьСессии();
	ИспользоватьМаршруты("НастройкаМаршрутов");

КонецПроцедуры

Процедура НастройкаМаршрутов(КоллекцияМаршрутов)

	// Основной маршрут веб приложения
	Умолчания = Новый Соответствие;
    Умолчания.Вставить("controller", "main");
	Умолчания.Вставить("action", "Index");
	КоллекцияМаршрутов.Добавить("Main", "/{*anything}", Умолчания);

	// Маршруты для внешнего программного интерфейса (api)
	Умолчания = Новый Соответствие;
	Умолчания.Вставить("action", "Index");
	КоллекцияМаршрутов.Добавить("App", "app/{controller}/{action=Index}");
	
КонецПроцедуры