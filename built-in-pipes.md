### Built-in Pipes

Angular dökümantasyonunda adı geçen 13 tane built-in pipe var. Bunların kısaca ne işe yaraığına bakalım.

1. **AsyncPipe:** Bir Observable veya Promise nesnesinin son değerini alır ve görüntüler. Bu, asenkron veri akışlarıyla çalışmayı kolaylaştırır.
2. **CurrenyPipe:** Bir sayıyı para birimi formatında görüntüler. Örneğin, 1000 sayısını '$1,000.00' olarak dönüştürebilir. Ayrıca, dil ve bölge ayarlarına göre para birimi biçimlendirmeyi destekler.
3. **DatePipe:** Tarihleri biçimlendirir ve görüntüler. Örneğin, bir tarih nesnesini 'dd/MM/yyyy' formatında bir stringe dönüştürebilir. Ayrıca, dil ve bölge ayarlarına göre tarih biçimlendirmeyi destekler.
4. **DecimalPipe:** Bir sayıyı ondalık formatında görüntüler. Örneğin, 1.23456 sayısını '1.235' olarak dönüştürebilir.
5. **I18nPluralPipe**: Çoğul formatta bir stringi görüntüler. Örneğin, bir öğe sayısına göre 'öğe' veya 'öğeler' kelimesini görüntüleyebilir.
6. **I18nSelectPipe:** Bir nesnenin özelliklerine göre bir stringi görüntüler. Örneğin, bir cinsiyet özelliğine göre 'o' veya 'ona' kelimesini görüntüleyebilir.
7. **JsonPipe:** Bir nesneyi JSON formatında bir stringe dönüştürür. Bu, özellikle hata ayıklama sırasında yararlıdır.
8. **KeyValuePipe:** Bir nesnenin anahtarlarını ve değerlerini bir diziye dönüştürür. Bu, bir nesnenin anahtarları üzerinde yineleme yapmayı (iteration) kolaylaştırır. Örneğin, {name: 'Angular', version: '9'} nesnesini [{key: 'name', value: 'Angular'}, {key: 'version', value: '9'}] şeklinde bir diziye dönüştürebilir.
9. **PercentPipe:** Bir sayıyı yüzde formatında görüntüler. Örneğin, 0.123456 sayısını '12.345%' olarak dönüştürebilir.
10. **SlicePipe:** Bir dizi veya stringin bir bölümünü alır. Örneğin, 'Angular' stringinin ilk 3 karakterini alabilir ('Ang').
11. **TitleCasePipe:** Bir stringin her kelimesinin ilk harfini büyük harfe çevirir. Bu, başlık biçimlendirmeyi kolaylaştırır. Örneğin, 'angular pipes' stringini 'Angular Pipes' olarak dönüştürebilir.
12. **LowerCasePipe:** Bir stringin tüm karakterlerini küçük harfe çevirir. Örneğin, 'ANGULAR' stringini 'angular' olarak dönüştürür.
13. **UpperCasePipe:** Bir stringin tüm karakterlerini büyük harfe çevirir. Örneğin, 'angular' stringini 'ANGULAR' olarak dönüştürür.

 **ref**: [Angular Docs](https://angular.io/api/common#pipes)
