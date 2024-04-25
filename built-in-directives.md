## Angular Built-in Directives

### Yapısal Direktifler (Structural Directives)


1. ***ngIf:** Bir koşul doğruysa, bir elementi ekler. Koşul yanlışsa, elementi kaldırır. Örneğin, bir kullanıcının oturum açıp açmadığını kontrol etmek için *ngIf kullanabilirsiniz. Eğer kullanıcı oturum açmışsa, bir "Çıkış Yap" düğmesi gösterilir. Eğer kullanıcı oturum açmamışsa, "Çıkış Yap" düğmesi kaldırılır.
2. ***ngFor:** Bir liste üzerinde döngü yapar ve her bir liste öğesi için bir element oluşturur. Örneğin, bir dizi kullanıcıyı listelemek için *ngFor kullanabilirsiniz. Her bir kullanıcı için bir `<li>` elementi oluşturulur.
3. ***ngSwitch:** Bir dizi koşulu kontrol eder ve sadece doğru olan koşul için elementi ekler. Örneğin, bir kullanıcının rolünü kontrol etmek için *ngSwitch kullanabilirsiniz. Eğer kullanıcı bir yöneticiyse, bir "Yönetici Paneli" düğmesi gösterilir. Eğer kullanıcı bir yazardıysa, bir "Yazar Paneli" düğmesi gösterilir.


### Atama Direktifleri (Attribute Directives)

1. **ngClass:** Bir elementin CSS sınıflarını dinamik olarak değiştirir. Örneğin, bir form kontrolünün geçerliliğine bağlı olarak bir CSS sınıfını ekleyip çıkarabilirsiniz.
2. **ngStyle:** Bir elementin inline stillerini dinamik olarak değiştirir. Örneğin, bir progress bar'ın genişliğini bir component özelliğine bağlayabilirsiniz.
3. **ngModel:** İki yönlü veri bağlama sağlar. Yani, bir form kontrolünün değerini bir component özelliği ile senkronize eder. Örneğin, bir `<input> `elementinin değerini bir component özelliği ile senkronize edebilirsiniz.


 **Attribute directives ref**: [Angular Docs](https://angular.io/guide/built-in-directives#built-in-attribute-directives)

 **Structural directives ref**: [Angular Docs](https://angular.io/guide/built-in-directives#built-in-structural-directives)
