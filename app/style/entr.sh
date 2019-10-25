ls *.css | grep -v YAPMS.css | entr -s 'cat input.css menu.css selectmenu.css popup.css legend.css style.css battlechart.css yapnews.css sidebar.css > YAPMS.css'
