function getCurrentShowTimeSeconds(){var a=new Date,e=3600*a.getHours()+60*a.getMinutes()+a.getSeconds();return e}function update(){var a=getCurrentShowTimeSeconds(),e=parseInt(a/3600),I=parseInt((a-3600*e)/60),r=a%60,l=parseInt(curShowTimeSeconds/3600),t=parseInt((curShowTimeSeconds-3600*l)/60),n=curShowTimeSeconds%60;r!=n&&(parseInt(l/10)!=parseInt(e/10)&&addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(l/10)),parseInt(l%10)!=parseInt(e%10)&&addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(l/10)),parseInt(t/10)!=parseInt(I/10)&&addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(t/10)),parseInt(t%10)!=parseInt(I%10)&&addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(t%10)),parseInt(n/10)!=parseInt(r/10)&&addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(n/10)),parseInt(n%10)!=parseInt(r%10)&&addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(r%10)),curShowTimeSeconds=a),updateBalls()}function updateBalls(){for(var a=0;a<balls.length;a++)balls[a].x+=balls[a].vx,balls[a].y+=balls[a].vy,balls[a].vy+=balls[a].g,balls[a].y>=WINDOW_HEIGHT-RADIUS&&(balls[a].y=WINDOW_HEIGHT-RADIUS,balls[a].vy=.75*-balls[a].vy);for(var a=0;a<balls.length;a++)(balls[a].x+RADIUS<0||balls[a].x-RADIUS>WINDOW_WIDTH)&&balls.splice(a,1)}function addBalls(a,e,I){for(var r=0;r<digit[I].length;r++)for(var l=0;l<digit[I][r].length;l++)if(1==digit[I][r][l]){var t={x:a+2*l*(RADIUS+1)+(RADIUS+1),y:e+2*r*(RADIUS+1)+(RADIUS+1),g:1.5+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:-5,color:colors[Math.floor(Math.random()*colors.length)]};balls.push(t)}}function render(a){a.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);var e=parseInt(curShowTimeSeconds/3600),I=parseInt((curShowTimeSeconds-3600*e)/60),r=curShowTimeSeconds%60;renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(e/10),a),renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(e%10),a),renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,a),renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(I/10),a),renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(I%10),a),renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,a),renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(r/10),a),renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(r%10),a);for(var l=0;l<balls.length;l++)a.fillStyle=balls[l].color,a.beginPath(),a.arc(balls[l].x,balls[l].y,RADIUS,0,2*Math.PI,!0),a.closePath(),a.fill()}function renderDigit(a,e,I,r){r.fillStyle="rgb(0,102,153)";for(var l=0;l<digit[I].length;l++)for(var t=0;t<digit[I][l].length;t++)1==digit[I][l][t]&&(r.beginPath(),r.arc(a+2*t*(RADIUS+1)+(RADIUS+1),e+2*l*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI),r.closePath(),r.fill())}$(function(){var a=$('<canvas id="canvas" style="height: 100%"></canvas>');$(".h5_page_clock .fp-tableCell").append(a)});