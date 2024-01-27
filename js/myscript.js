

(function() {
    "use strict";

    //function to make querySelectorAll and querySelector shorter
    const select = (itemToSelect, all = false) => {
      itemToSelect = itemToSelect.trim()
      if (all) {
        return [...document.querySelectorAll(itemToSelect)]
      } else {
        return document.querySelector(itemToSelect)
      }
    }

    //function to make it easier to select relevant javascript events
    const on = (type, item, listener, all = false) => {
      if (all) {
        select(item, all).forEach(e => e.addEventListener(type, listener))
      } else {
        select(item, all).addEventListener(type, listener)
      }
    }

  
    //show or hide the sidebar on click
    if (select('#toggle-sidebar-btn')) {
      on('click', '#toggle-sidebar-btn', function(e) {
        select('body').classList.toggle('toggle-sidebar')
      })
    }

    //when topHeaderToggle is clicked, show the top header items
    if (select('#topHeaderToggle')) {
      on('click', '#topHeaderToggle', function(e) {
        select('#topHeader').classList.toggle('d-none');

        //if topHeader has been made visible, scroll to top
        if (!select('#topHeader').classList.contains('d-none')) {
          window.scrollTo(0, 0);
        }

        select('#searchIcon').classList.toggle('d-none');
        select('#xIcon').classList.toggle('d-none');
      })
    }


    //when a sidebar navitem is clicked, add the active-sidebar-nav-item class to it and remove it from the others
    if (select('.sidebar-nav-item', true)) {
      on('click', '.sidebar-nav-item', function(e) {

        select('.sidebar-nav-item', true).forEach(item => {
          item.classList.remove('active-sidebar-nav-item');
        });

        this.classList.add('active-sidebar-nav-item');

        select('#currentPageTitle').innerHTML = this.attributes['id'].value;
      }, true)
    }
    
  
  })()