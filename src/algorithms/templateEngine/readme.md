### Написать шаблонизатор

# Доступны теги: <div /> <span /> <br /> <p />

## Для использования шаблонизатора нужно создать экземпляр, дальее можно добавлять в шаблон теги, вызывая соответствующие методы: 
# const myTemplate = Templater()
# myTemplate.div() // добавляет в шаблон <div></div>
# myTemplate.span() // добавляет в шаблон <span></span> 
# myTemplate.br() // добавляет в шаблон <br> 
# myTemplate.p() // добавляет в шаблон <p></p>

## Для вывода html-кода необходимо вызвать метод toString:
# const myTemplate = Templater() 
# myTemplate.div('hello') 
# console.log(myTemplate.toString())
# // <div>hello</div>

## Поддерживается вложенность содержимого и чейнинг вызовов.
# const template = Templater().div( 
#  Templater().p('Hello'), 
#  Templater().p('World')
# )
# console.log(template.toString())
# // <div><p>Hello</p><p>World</p></div>

## Внимание! Метод br() не поддерживает вложенное содержимое и вызовет исключение с текстом ошибки Nested content is not allowed:
# console.log(Templater().br('error').toString())
# // Uncaught Error: Nested content is not allowed

## Шаблонизатор поддерживает атрибуты тегов. Для добавление атрибутов необходимо передать в метод тега объект состоящий из имен в ключах объекта и значений. Атрибуты выводятся в лексикографическом порядке:
# console.log(Templater().div({id: "header", class: "m-4 float-right"}).toString()) 
# // <div class="m-4 float-right" id="header"></div>

## Важно! Если одновременно используются атрибуты и вложенный контент, то объект атрибутов должен передаваться последним!
# console.log(Templater().div('World of Templates', {id: "card"}).toString()) 
# // <div id="card">World of Templates</div>
