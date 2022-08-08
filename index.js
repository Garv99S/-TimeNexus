let a;
    let date;
    let time;
    setInterval(() => {
      a = new Date();
      dateIn = a.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      date = a.toLocaleString('en-US');
      timing = date.split(' ')[1] + " " + date.split(' ')[2];
      // time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() ;
      document.getElementById("time").innerHTML = timing + " <br>on " + dateIn;
    }, 1000);

    var d;
    var dateum;
    var dateUs;
    var timeUs;
    setInterval(() => {
      d = new Date();
      dateum = d.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      dateUs = d.toLocaleString('en-US', {
        timeZone: 'America/New_York'
      });
      timeUs = dateUs.split(' ')[1] + " " + dateUs.split(' ')[2]
      document.getElementById("timeus").innerHTML = timeUs + '<br> on ' + dateum;
    }, 1000);

    var aus;
    var dateau;
    var dateAus;
    var timeAus;
    setInterval(() => {
      aus = new Date();
      dateau = aus.toLocaleString('en-US', {
        timeZone: 'Australia/Sydney',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      dateAus = aus.toLocaleString('en-US', {
        timeZone: 'Australia/Sydney'
      });
      timeAus = dateAus.split(' ')[1] + " " + dateAus.split(' ')[2]
      document.getElementById("timeAus").innerHTML = timeAus + '<br> on ' + dateau;
    }, 1000);

    function clicked() {
      var x = document.getElementById('hey').value;
      console.log(x);
    }

    function titlebar(val) {
      var speed = 500;
      var pos = val;
      var msg1 = "@TimeNexus🕛";
      var msg2 = "Developed by Gaurav";
      if (pos == 0) {
        masg = msg1;
        pos = 1;
      }
      else if (pos == 1) {
        masg = msg2;
        pos = 0;
      }
      document.title = masg;
      timer = window.setTimeout("titlebar("+pos+")", speed);
    }
    titlebar(0);

    function clicked(){
      var q = document.getElementById('hey').value;
      window.open('http://google.com/search?q='+q);
    }
