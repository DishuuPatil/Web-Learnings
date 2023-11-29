function init() {
    var leftpaneDiv = document.createElement("div");
    var rightpaneDiv = document.createElement("div");

    leftpaneDiv.setAttribute("id", "leftDiv");
    rightpaneDiv.setAttribute("id", "rightDiv");

    document.body.appendChild(leftpaneDiv);
    document.body.appendChild(rightpaneDiv);

    var inputTodo = document.createElement("textarea");

    inputTodo.placeholder = ("placeholder", "its the right way to set attribute");
    inputTodo.setAttribute("class", "textbox")
    rightpaneDiv.appendChild(inputTodo);

}
init();