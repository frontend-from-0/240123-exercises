# Create a React Recipe Search Application.
## Goal: Build an application where users can search for recipes and view their details.

## Features
- Allow users to search for recipes by entering keywords.
- Display search results with recipe names and images.
- Allow users to select a recipe to view its details.

## Steps
- Component Structure: 
  Set up the basic component structure:
    - App component: The main component that holds the recipe search logic and display.
    - SearchBar component: A child component that handles user input for recipe search.
    - RecipeList component: A child component that displays the search results.
    - RecipeDetail component: A child component that shows the details of a selected recipe.

- Fetching Recipes
  Use a recipe API (TheMealDB or API of your choice) to fetch recipes based on user search keywords. Fetch the recipes when the user submits a search.

- SearchBar Component
  In the SearchBar component, you can define the following:
  - Props: Pass a function to handle the search query when the user submits.
  - Use state to store the user's search query.

- RecipeList Component
  In the RecipeList component, you can define the following:
  - Props: Pass the list of recipes as props.
  - Map through the list and render each recipe's name and image.
  - Provide a way for users to select a recipe to view its details.

- RecipeDetail Component
  In the RecipeDetail component, you can define the following:
  - Props: Pass the details of the selected recipe as props.
  - Display the recipe's name, image, ingredients, instructions, etc.

- App Component
  In the App component, do the following:
    - Import the useState and useEffect hooks from React.
    - Create state variables for the list of recipes and the selected recipe details.
    - Create a function to handle the recipe search based on user input.
    - Pass the search query and recipe list to the SearchBar and RecipeList components.
    - When a recipe is selected, update the selected recipe details in state.

- Styling
  Style the application to make it visually appealing. You can use CSS to format the search bar, recipe list, and recipe details.

- Bonus Features
  - Implement pagination for search results.
  - Allow users to filter recipes by cuisine or dietary preferences.
  - Provide a "favorite" feature to save recipes.



# Bir React Tarif Arama Uygulaması oluşturun.
## Hedef: Kullanıcıların yemek tarifleri arayabileceği ve ayrıntılarını görüntüleyebileceği bir uygulama oluşturun.

## Özellikler
- Kullanıcıların anahtar kelimeler girerek yemek tarifleri aramasına izin verin.
- Arama sonuçlarını tarif adları ve resimlerle görüntüleyin.
- Kullanıcıların ayrıntılarını görüntülemek için bir tarif seçmesine izin verin.

## Adımlar
- Bileşen Yapısı:
  Temel bileşen yapısını ayarlayın:
    - Uygulama bileşeni: Tarif arama mantığını ve gösterimini barındıran ana bileşen.
    - SearchBar bileşeni: Tarif arama için kullanıcı girişini yöneten bir alt bileşen.
    - RecipeList bileşeni: Arama sonuçlarını görüntüleyen bir alt bileşen.
    - RecipeDetail bileşeni: Seçilen bir tarifin ayrıntılarını gösteren alt bileşen.

- Tarifler getiriliyor
  Kullanıcı arama anahtar kelimelerine göre tarifler getirmek için bir tarif API'si (TheMealDB veya seçtiğiniz API) kullanın. Kullanıcı bir arama gönderdiğinde tarifleri getirin.

- SearchBar Bileşeni
  SearchBar bileşeninde aşağıdakileri tanımlayabilirsiniz:
  - Destekler: Kullanıcı gönderdiğinde arama sorgusunu işlemek için bir işlev iletin.
  - Kullanıcının arama sorgusunu depolamak için durumu kullanın.

- RecipeList Bileşeni
  RecipeList bileşeninde aşağıdakileri tanımlayabilirsiniz:
  - Sahne Donanımı: Tarif listesini sahne donanımı olarak iletin.
  - Listeyi haritalandırın ve her tarifin adını ve resmini işleyin.
  - Kullanıcıların, ayrıntılarını görüntülemek üzere bir tarif seçmesine olanak tanıyan bir yol sağlayın.

- RecipeDetail Bileşeni
  RecipeDetail bileşeninde aşağıdakileri tanımlayabilirsiniz:
  - Sahne Alanı: Seçilen tarifin ayrıntılarını sahne malzemesi olarak iletin.
  - Tarifin adını, resmini, malzemelerini, talimatlarını vb. görüntüleyin.

- Uygulama Bileşeni
  Uygulama bileşeninde aşağıdakileri yapın:
    - UseState'i içe aktarın ve React'tan useEffect kancalarını kullanın.
    - Tarif listesi ve seçilen tarif ayrıntıları için durum değişkenleri oluşturun.
    - Kullanıcı girdisine dayalı olarak tarif aramasını gerçekleştirecek bir fonksiyon oluşturun.
    - Arama sorgusunu ve tarif listesini SearchBar ve RecipeList bileşenlerine iletin.
    - Bir tarif seçildiğinde, seçilen tarif ayrıntılarını durumda güncelleyin.

- Şekillendirme
  Uygulamayı görsel olarak çekici hale getirecek şekilde stillendirin. Arama çubuğunu, tarif listesini ve tarif ayrıntılarını biçimlendirmek için CSS'yi kullanabilirsiniz.

- Bonus özellikler
  - Arama sonuçları için sayfalandırmayı uygulayın.
  - Kullanıcıların tarifleri mutfağa veya diyet tercihlerine göre filtrelemesine izin verin.
  - Tarifleri kaydetmek için "favori" özelliği sağlayın.
