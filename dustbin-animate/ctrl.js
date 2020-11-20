function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
  }







  
// get all folders in our .directory-list
var allFolders = $(".directory-list li > ul");
allFolders.each(function () {
  // add the folder class to the parent <li>
  var folderAndName = $(this).parent();
  folderAndName.addClass("folder");

  // backup this inner <ul>
  var backupOfThisFolder = $(this);
  // then delete it
  $(this).remove();
  // add an <a> tag to whats left ie. the folder name
  folderAndName.wrapInner("<a href='#' />");
  // then put the inner <ul> back
  folderAndName.append(backupOfThisFolder);

  // now add a slideToggle to the <a> we just added
  folderAndName.find("a").click(function (e) {
    $(this).siblings("ul").slideToggle("slow");
    e.preventDefault();
  });
});
