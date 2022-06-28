let [millisec, sec, min, hrs] = [0,0,0,0];

        let timeRef = document.querySelector(".stopwatchDisplay");
        let int = null;
        let flag = false;
        
        document.getElementById('pause').addEventListener('click', () => {
            clearInterval(int);
            falg = false;
        });
        
        
        document.getElementById('start').addEventListener('click', () => {
          if (int!==null){
            clearInterval(int);
          } ;
        
          int = setInterval(displaytimer,10);
          flag =true;
        });
        
        
        document.getElementById('reset').addEventListener('click', () => {
            clearInterval(int);
            [millisec, sec, min, hrs] = [0,0,0,0];
            timeRef.innerHTML = '00:00:00:000';
            flag = false;
        });
        
        function displaytimer() {
            millisec += 10;
        
            if (millisec == 1000) {
                sec++;
                millisec = 0;
        
                if (sec == 60) {
                    min++;
                    sec = 0;
        
                    if (min == 60) {
                        hrs++;
                        min = 0;
        
                    };
        
                };
            };
        
        let h = hrs<10 ? "0" + hrs : hrs;
        let m = min<10 ? "0" + min : min;
        let s = sec<10 ? "0" + sec : sec;
        let ms = millisec<10 ? "00" + millisec : millisec<100 ? "0" + millisec : millisec ;
        timeRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
        }; 

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      if (flag==false) {
        if (int!==null){
            clearInterval(int);
          } ;
        
          int = setInterval(displaytimer,10);
          flag =true;         
      }
      else{
        clearInterval(int);
        flag = false;
      }
    }
  });
