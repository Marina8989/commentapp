function getInfo() {
  // set value from inputs
  var username = document.getElementById('username').value
  var comment = document.getElementById('comment').value

  // set input's value in variable
  var userName = document.createTextNode("Username: " + username)
  var userComment = document.createTextNode("Comments: " + comment)

  // create 'li' element
  var enterComment = document.createElement('li')
  enterComment.className = "list-group-item"

  // create 'h4' & 'h5' & 'img'
  var newUserName = document.createElement('h4')
  newUserName.appendChild(userName)
  var newComment = document.createElement('h5')
  newComment.appendChild(userComment)
  var contact = document.createElement('img')
  contact.setAttribute('src', 'http://bartsimpsonpictures.squarelogic.net/bart-simpson-07.gif')
  contact.setAttribute('alt', 'na')
  contact.setAttribute('height', '50px')
  contact.setAttribute('width', '50px')

  // creating a delete button
  var deleteButton = document.createElement('button1')
  deleteButton.className = "btn btn-danger btn-xs"
  deleteButton.setAttribute("data-toggle", "tooltip")
  deleteButton.setAttribute("data-placement", "top")
  deleteButton.setAttribute("title", "Delete")
  deleteButton.innerHTML = "Delete "

  // creating date and time
  var currentdate = new Date();
  var datetime = (currentdate.getMonth() + 1) + "/" +
    currentdate.getDate() + "/" +
    currentdate.getFullYear() + " @ " +
    currentdate.getHours() + ":" +
    currentdate.getMinutes() + ":" +
    currentdate.getSeconds();
  var NewDate = document.createTextNode(datetime)


  // set all elements into 'li'
  enterComment.appendChild(contact)
  enterComment.appendChild(NewDate)
  enterComment.appendChild(deleteButton)
  enterComment.appendChild(newUserName)
  enterComment.appendChild(newComment)

  // create 'ol' dropdown
  var olDropDown = document.createElement('ol')
    // set all 'li' into 'ul'
  olDropDown.appendChild(enterComment)

  // create 'li' dropdown
  var liDropDown = document.createElement('li')
  liDropDown.className = "dropdown"
    // set 'ol' into a dropdown 'li'
  liDropDown.appendChild(olDropDown)

  var list = document.getElementById('commentList')
  list.insertBefore(liDropDown, list.childNodes[0])

  // method for delete button
  $("button1").click(function() {
    // confirm("Are you sure to delete this comment?")
    $(this).parent().parent().parent().remove();
  });

 

  // different color for odd/even "li"
  $(document).ready(function() {
    $('.dropdown:odd').css("background-color", "#e2f5a9");
    $('.dropdown:even').css("background-color", "#a9e2f5");
  });
};

 