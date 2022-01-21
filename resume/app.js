(function () {





  var targetHTML = document.getElementById('main-page');



  insertHtml("#main-content", homeHtmlToInsertIntoMainPage);



  var insertHtml = function (selector, html) {
    var targetElem = document.getElementById(selector);
    targetElem.innerHTML = html;
  };



  // Using categories data and snippets html
  // build categories view HTML to be inserted into page
  function buildCategoriesViewHtml(categories,
                                   categoriesTitleHtml,
                                   categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";

    // Loop over categories
    for (var i = 0; i < categories.length; i++) {
      // Insert category values
      var html = categoryHtml;
      var name = "" + categories[i].name;
      var short_name = categories[i].short_name;
      html =
        insertProperty(html, "name", name);
      html =
        insertProperty(html,
                       "short_name",
                       short_name);
      finalHtml += html;
    }

    finalHtml += "</section>";
    return finalHtml;
  }


  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string.replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  };


})();
