// DOM variables:

    // Day time:
    var dayDiv = document.querySelector('#day');
    dayDiv.style.opacity = '1';
    var eveningDiv = document.querySelector('#evening');
    eveningDiv.style.opacity = '0';
    var nightDiv = document.querySelector('#night');
    nightDiv.style.opacity = '0';
// Enviorement:
    var grassDiv = document.querySelector('#grass');
    var windDivOne = document.querySelector('#wind-one');
    var windDivTwo = document.querySelector('#wind-two');
// Objects:
    var spongebobDiv = document.querySelector('#bob');
    var spongebobDummy = document.querySelector('#bob-dummy');
    var bubblingDiv = document.querySelector('#bubbling');
    var grassFeetDiv = document.querySelector('#grass-feet');
    var infoSwitcher = document.querySelector('#info-switcher');
    var infoSwitcherBackground = document.querySelector('#info-switcher-background');
    var musicSwitcher = document.querySelector('#music-switcher');
    var toggleMusic = document.querySelector('.toggle-music');
    var toggleSound = document.querySelector('.toggle-sound');
    var toggleMusicStatus = document.querySelector('.toggle-music-status');
    var toggleSoundStatus = document.querySelector('.toggle-sound-status');
    var infoBody = document.querySelector('#info-body');
    var link = document.querySelector('.link');
    var back = document.querySelector('#back');
    var aboutMe = document.querySelector('#about-me');
    var fullscreenBack = document.querySelector('#fullscreen');
    var minimizeBack = document.querySelector('#minimize');
    var infoDummy = document.querySelector('.info-dummy');
    fullscreenBack.style.backgroundPosition = '0 100%';


// Stuff, you know:
var randomizer = function(from, to) {
    return Math.floor(Math.random()*(to - from + 1) + from);
}
    // Cursor:
        var mobileStatus = false;
        var clickStatus = 'up';
        var touchStatus = 'none';
        var follower = document.getElementById('follower');
        var followerImage = document.querySelector('.follower-image');
        var cursorLight = document.querySelector('#cursor-light');

        if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            follower.style.visibility = 'hidden';
            follower.style.zIndex = 20;
            follower.style.bottom = '20%';
            follower.style.right = '15%';
            mobileStatus = true;
            infoBody.style.backgroundImage = 'url(./public/img/env/back2.png)'
            grassDiv.style.backgroundImage = 'url(./public/img/env/grass2.png)'
        } else {
            infoBody.style.backgroundImage = 'url(./public/img/env/back.png)'
            grassDiv.style.backgroundImage = 'url(./public/img/env/grass.png)'
        } ;

        if(mobileStatus === false) {
            document.addEventListener('mousemove', function(e) {
                var x = e.clientX;
                var y = e.clientY;
                follower.style.left = x + 'px';
                follower.style.top = y + 'px';
            }); 
        };
        

        var cursorArray = ['0', '-100%', '-200%', '-300%', '-400%', '-500%', '-600%', '-700%', '-800%', '-900%'] ;
        followerImage.style.backgroundPosition = cursorArray[0];
        var cursorSlide = 0;

        
        



// Audio:

var origin = document.querySelector('#origin');
origin.pause();


var hardcore = document.querySelector('#hardcore');
hardcore.pause();

var musicStatus = 'stop';

var currentPlaying = 'none';

var switchAudio = function() {
    if (musicStatus === 'stop') {
        musicStatus = 'playOne';
        toggleMusicStatus.innerHTML = 'origin';
        currentPlaying = 'origin';
        origin.play();
    } else if (musicStatus === 'playOne') {
        musicStatus = 'playTwo';
        origin.pause();
        origin.currentTime = 0;
        toggleMusicStatus.innerHTML = 'hardcore';
        currentPlaying = 'hardcore';
        hardcore.play();
    }  else if (musicStatus === 'playTwo') {
        musicStatus = 'stop';
        hardcore.pause();
        hardcore.currentTime = 0;
        toggleMusicStatus.innerHTML = 'none';
        currentPlaying = 'none';
    }
}

var soundStatus = true;
var switchSound = function() {
    if (soundStatus === true) {
        soundStatus = false;
        toggleSoundStatus.innerHTML = 'off';
    } else {
        soundStatus = true;
        toggleSoundStatus.innerHTML = 'on';
    }
}

var bubbleOne = document.querySelector('#bubble-out-one');
var bubbleTwo = document.querySelector('#bubble-out-two');
var bubbleThree = document.querySelector('#bubble-out-three');
var splashOne = document.querySelector('#splash-one');
var splashTwo = document.querySelector('#splash-two');
var splashThree = document.querySelector('#splash-three');
var whistla = document.querySelector('#whistla');


// Game logic triggers:
var jellyCounter = 0;
var bubbleCounter = 0;
var spongebobSlideNum = 4;
var bubblingSlideNum = 0;
var status = 'staying';
var canBubble = true;
var bubbleSizer = 0;
var canBlink = true;
var blinkTrigger = 0;
var bubblingTrigger = 0;


// Aboutgame menu:
var helpCall = function() {
    infoBody.style.pointerEvents = 'all';
    infoBody.style.visibility = 'visible';
    back.addEventListener('mousedown', function() {
        infoBody.style.pointerEvents = 'none';
        infoBody.style.visibility = 'hidden';
        back.removeEventListener('mousedown');
    })
}

var backArr = [];
var makeArr = function makeArr(arr, num) {
  arr.push('0');
  for (i = 1; i < num; i++) {
    arr.push('-' + i*100 + '%');
  }
} ;
makeArr(backArr, 38);
var backSlideNum = 0;

var makeBackAnimated = function() {
    if (backSlideNum < 37) {
        infoBody.style.backgroundPosition = backArr[backSlideNum];
        backSlideNum +=1;
    } else {
        infoBody.style.backgroundPosition = backArr[backSlideNum];
        backSlideNum = 0;
    }
}

var goBackAnimated = setInterval(makeBackAnimated, 100);


// Day or night?
    var iterationDuration = 20;
    var dayTime = function dayTime() {
        nightDiv.style.animationName = '';
        dayDiv.style.animationName = 'reduce';
        dayDiv.style.animationDuration = iterationDuration + 's';
        eveningDiv.style.animationName = 'increase';
        eveningDiv.style.animationDuration = iterationDuration + 's';
        setTimeout(function () {
            dayDiv.style.animationName = '';
            eveningDiv.style.animationName = 'reduce';
            eveningDiv.style.animationDuration = iterationDuration + 's';
            nightDiv.style.animationName = 'increase';
            nightDiv.style.animationDuration = iterationDuration + 's';
        }, iterationDuration * 1000);
        setTimeout(function () {
            eveningDiv.style.animationName = '';
            nightDiv.style.animationName = 'reduce';
            nightDiv.style.animationDuration = iterationDuration + 's';
            dayDiv.style.animationName = 'increase';
            dayDiv.style.animationDuration = iterationDuration + 's';
        }, iterationDuration * 2 * 1000);
    };

    //let's do it
        dayTime();
        var createdayTime = setInterval(dayTime, iterationDuration * 3 * 1000);




// Grass moves:

    var grassWidth = 100;
    var grassAnim = [0, '-' + grassWidth + '% 100%', '-' + 2 * grassWidth + '% 100%', '-' + 3 * grassWidth + '% 100%', '-' + 4 * grassWidth + '% 100%'];
        
    // Move da grasss:

    var grassMove = function grassMove() {
        var x = randomizer(0, 5);
        grassDiv.style.backgroundPosition = '' + grassAnim[x];
    };
    
    var grassMoves = function grassMoves() {
        if (Math.random() > .3) {
            grassMove();
        }
    };

    var grassMover = setInterval(grassMoves, 150);

    var grassAnim = ['0', '-100%', '-200%', '-300%', '-400%'] ;
    var feetGrassMove = function feetGrassMove() {
        var x = Math.floor(Math.random() * 5);
        grassFeetDiv.style.backgroundPosition = '' + grassAnim[x];
    };
    
    var feetGrassMoves = function feetGrassMoves() {
        if (Math.random() > .3) {
            feetGrassMove();
        }
    };

    var feetGrassMover = setInterval(feetGrassMoves, 700);



// Wind animation:

    // Wind animation:
var windOne = function windOne() {
    var multiplier = randomizer(90, 130);
    var widthSizer = randomizer(100, 700);
    var heightSizer = randomizer(20, 100);

    if (widthSizer > 350) {
        windDivOne.style.zIndex = '10';
        windDivOne.style.opacity = '0.3';
    } else {
        windDivOne.style.zIndex = '2';
        windDivOne.style.opacity = '0.2';
    }

    if (Math.random() > .45) {
        windDivOne.style.transform = 'scaleX(-1)';
    } else {
        windDivOne.style.transform = 'scaleX(1)';
    }

    var bottomOffset = randomizer(-50, 350);
    var leftOffset = randomizer(-2, 88);
    windDivOne.style.width = widthSizer + 'px';
    windDivOne.style.height = heightSizer + 'px';
    windDivOne.style.bottom = bottomOffset + 'px';
    windDivOne.style.left = leftOffset + 'vw';
    windDivOne.style.visibility = 'visible';
    windDivOne.style.backgroundPosition = '-1400%';

    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-100%';
    }, multiplier);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-200%';
    }, multiplier * 2);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-300%';
    }, multiplier * 3);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-400%';
    }, multiplier * 4);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-500%';
    }, multiplier * 5);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-600%';
    }, multiplier * 6);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-700%';
    }, multiplier * 7);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-800%';
    }, multiplier * 8);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-900%';
    }, multiplier * 9);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-1000%';
    }, multiplier * 10);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-1200%';
    }, multiplier * 11);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-1300%';
    }, multiplier * 12);
    setTimeout(function () {
        windDivOne.style.backgroundPosition = '-1400%';
    }, multiplier * 13);
    setTimeout(function () {
        windDivOne.style.visibility = 'hidden';
    }, multiplier * 14);
};

var windTwo = function windTwo() {
    var multiplier = randomizer(110, 170);
    var widthSizer = randomizer(100, 700);
    var heightSizer = randomizer(20, 70);
    if (widthSizer > 350) {
        windDivTwo.style.zIndex = '10';
        windDivTwo.style.opacity = '0.3';
    } else {
        windDivTwo.style.zIndex = '2';
        windDivTwo.style.opacity = '0.2';
    }

    if (Math.random() > .45) {
        windDivTwo.style.transform = 'scaleX(-1)';
    } else {
        windDivTwo.style.transform = 'scaleX(1)';
    }

    var bottomOffset = randomizer(-50, 450);
    var leftOffset = randomizer(-2, 88);
    windDivTwo.style.visibility = 'visible';
    windDivTwo.style.width = widthSizer + 'px';
    windDivTwo.style.height = heightSizer + 'px';
    windDivTwo.style.bottom = bottomOffset + 'px';
    windDivTwo.style.left = leftOffset + 'vw';
    windDivTwo.style.backgroundPosition = '-1400%';

    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-1500%';
    }, multiplier);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-1600%';
    }, multiplier * 2);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-1700%';
    }, multiplier * 3);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-1800%';
    }, multiplier * 4);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-1900%';
    }, multiplier * 5);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-2000%';
    }, multiplier * 6);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-2100%';
    }, multiplier * 7);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-2200%';
    }, multiplier * 8);
    setTimeout(function () {
        windDivTwo.style.backgroundPosition = '-1400%';
    }, multiplier * 9);
    setTimeout(function () {
        windDivTwo.style.visibility = 'hidden';
    }, multiplier * 10);
};

var createWindOne = function createWindOne() {
    if (Math.random() > .4) {
        windOne();
    }
};
var triggerWindOne = setInterval(createWindOne, 3900);

var createWindTwo = function createWindTwo() {
    if (Math.random() > .5) {
        windTwo();
    }
};
var triggerWindTwo = setInterval(createWindTwo, 2800);

// Creating bubbles and splashes:

    // Splash function:

    var createSplash = function(elem) {

        var splashSizer = randomizer(1, 10);
        var splashOneWay = randomizer(1, 3);
        var splashTwoWay = randomizer(1, 3);
        var splashThreeWay = randomizer(1, 3);
        var splashFourWay = randomizer(1, 3);

    // Splash 1:   
    var splashOne = document.createElement('div');
    splashOne.className = "splash-1";
    splashOne.style.position = 'absolute';
    splashOne.style.width = splashSizer + 10 + '%';
    splashOne.style.height = splashSizer + 10 + '%';
    splashOne.style.top = '30%';
    splashOne.style.left = '30%';
    splashOne.style.border = '1px solid white';
    splashOne.style.borderRadius = '50%';
    splashOne.style.animationName = 'splash-1-' + splashOneWay;
    splashOne.style.animationDuration = '0.3s';
    splashOne.style.animationIterationCount = 'infinite';

    // Splash 2:
    var splashTwo = document.createElement('div');
    splashTwo.className = "splash-2";
    splashTwo.style.position = 'absolute';
    splashTwo.style.width = splashSizer + 10 + '%';
    splashTwo.style.height = splashSizer + 10 + '%';
    splashTwo.style.top = '20%';
    splashTwo.style.right = '27%';
    splashTwo.style.border = '1px solid white';
    splashTwo.style.borderRadius = '50%';
    splashTwo.style.animationName = 'splash-2-' + splashTwoWay;
    splashTwo.style.animationDuration = '0.3s';
    splashTwo.style.animationIterationCount = 'infinite';

    // Splash 3:
    var splashThree = document.createElement('div');
    splashThree.className = "splash-3";
    splashThree.style.position = 'absolute';
    splashThree.style.width = splashSizer + 10 + '%';
    splashThree.style.height = splashSizer + 10 + '%';
    splashThree.style.bottom = '35%';
    splashThree.style.right = '34%';
    splashThree.style.border = '1px solid white';
    splashThree.style.borderRadius = '50%';
    splashThree.style.animationName = 'splash-3-' + splashThreeWay;
    splashThree.style.animationDuration = '0.3s';
    splashThree.style.animationIterationCount = 'infinite';

    // Splash 4:
    var splashFour = document.createElement('div');
    splashFour.className = "splash-4";
    splashFour.style.position = 'absolute';
    splashFour.style.width = splashSizer + 10 + '%';
    splashFour.style.height = splashSizer + 10 + '%';
    splashFour.style.bottom = '39%';
    splashFour.style.left = '34%';
    splashFour.style.border = '1px solid white';
    splashFour.style.borderRadius = '50%';
    splashFour.style.animationName = 'splash-4-' + splashFourWay;
    splashFour.style.animationDuration = '0.3s';
    splashFour.style.animationIterationCount = 'infinite';

    // Creating splash:
    elem.appendChild(splashOne);
    elem.appendChild(splashTwo);
    elem.appendChild(splashThree);
    elem.appendChild(splashFour);
    setTimeout(function() {
        elem.removeChild(splashOne);
        elem.removeChild(splashTwo);
        elem.removeChild(splashThree);
        elem.removeChild(splashFour);
    }, 250) ;
    }



// Bubbling logic:

var shoot = function() {
if (status === 'staying' && canBubble) {
    status = 'bubbling';
    clearInterval(blinkTrigger);
    canBlink = false;
}
spongebobDiv.style.backgroundPosition = spongebobArray[4];
spongebobSlideNum = 4;
if (trigger === 0 && bubblingTrigger === 0) {
    trigger = setInterval(spongebobSlideF, 80);
    bubblingTrigger = setInterval(bubblingF, 200);
    setTimeout(function() {
        if (soundStatus === true && clickStatus === 'down' && status === 'bubbling') {
            whistla.play();
        } else if (soundStatus === true && touchStatus === 'touch' && status === 'bubbling') {
            whistla.play();
        }
    },200);
}

}

var reload = function() {
status = 'staying';
canBubble = false;
canBlink = false;
bubbleSizer = 0;
bubblingSlideNum = 0;
followerImage.style.backgroundPosition = cursorArray[0];
cursorSlide = 0;
bubblingDiv.style.backgroundPosition = bubblingArray[12];
clearInterval(trigger);
trigger = 0;
clearInterval(blinkTrigger);
clearInterval(bubblingTrigger);
bubblingTrigger = 0;
triggerTwo = setInterval(spongebobSlideB, 15);
if (soundStatus === true) {
    whistla.pause();
    whistla.currentTime = 0;
    }

}


// Bubbles:

    var createBubble = function() {
        if (bubbleSizer >= 3.6) {
            var durationTimer = randomizer(9, 13)
            var animationRandomizer = randomizer(1, 7);
    
            // Bubble: 
            var child = document.createElement('div');
            bubbleCounter += 1;
            child.style.position = 'absolute';
            child.style.width = bubbleSizer + 'vh';
            child.style.height = bubbleSizer + 'vh';
            child.style.borderRadius = '50%';
            child.style.opacity = '1';
            if (bubbleSizer >= 12) {
                child.style.right = '-30%';
                child.style.top = '6vh';
            } else if (bubbleSizer < 12 && bubbleSizer >= 6) {
                child.style.right = '-15%';
                child.style.top = '10vh';
            } else {
                child.style.right = '0';
                child.style.top = '10vh';
            }
            child.style.animationName = 'bubble-fly-' + randomizer(1, 9);
            child.style.animationDuration = durationTimer + 's';
            child.style.animationIterationCount = 'infinite';
            child.style.userSelect = 'none';
            child.style.animationTimingFunction = 'linear';
    
            // Bubble's background mask:
            var backgroundChild = document.createElement('div');
            backgroundChild.className = 'bubble';
            backgroundChild.style.position = 'absolute';
            backgroundChild.style.width = '100%';
            backgroundChild.style.height = '100%';
            backgroundChild.style.borderRadius = '50%';
            var gradientDirection = 'top';
            var rand = Math.random();
            if (rand > .5) {
                gradientDirection = 'left'; 
            }
            backgroundChild.style.background = 'linear-gradient(to ' + gradientDirection + ', ' + 'rgba(' + randomizer(0, 255) + ', ' + randomizer(0, 255) + ', ' + randomizer(0, 255) + ', 0.3), rgba('+ randomizer(0, 255) + ', ' + randomizer(0, 255) + ', ' + randomizer(0, 255) + ', 0.3)';
            
            // Bubble's border:
            var backgroundBorder = document.createElement('div');
            backgroundBorder.className = 'bubble-border';

            // nother mask:
            var backgroundMask = document.createElement('div');
            backgroundMask.className = 'bubble-mask';
            backgroundMask.style.background = 'linear-gradient(to ' + gradientDirection + ', ' + 'rgba(' + randomizer(0, 255) + ', ' + randomizer(0, 255) + ', ' + randomizer(0, 255) + ', 0.3), rgba('+ randomizer(0, 255) + ', ' + randomizer(0, 255) + ', ' + randomizer(0, 255) + ', 0.3)';
            backgroundMask.style.top = randomizer(0, 20) + '%';
            backgroundMask.style.left = randomizer(0, 20) + '%';

            // It's light:
            var lightSizeRand = randomizer(1, 7);
            var backgroundLight = document.createElement('div');
            backgroundLight.className = 'bubble-light';
            backgroundLight.style.position = 'absolute';
            backgroundLight.style.transform = 'rotate(-20deg)';
            backgroundLight.style.width = 10 + lightSizeRand + '%';
            backgroundLight.style.height = 18 + lightSizeRand + '%';
            backgroundLight.style.top = 18 + lightSizeRand + '%';
            backgroundLight.style.right = 16 + lightSizeRand + '%';
            backgroundLight.style.opacity = '0.2';
            backgroundLight.style.background = 'white';
            backgroundLight.style.borderRadius = '50%';
            backgroundLight.style.animationDuration = '7s';
            backgroundLight.style.animationIterationCount = 'infinite';
    
            // Here it goes: 
            bubbleCounter = 0;
            spongebobDiv.appendChild(child);
            child.appendChild(backgroundChild);
            backgroundChild.appendChild(backgroundBorder);
            backgroundChild.appendChild(backgroundMask);
            backgroundChild.appendChild(backgroundLight);

            if (soundStatus === true) {
                if (durationTimer > 11) {
                    bubbleOne.play();
                } else if (durationTimer > 10) {
                    bubbleTwo.play();
                } else {
                    bubbleThree.play();
                }
            }
            
    
            // Reducing opacity:
            var opacityRand = randomizer(1200, 1500);
            setTimeout(function () {
                child.style.opacity = '0.9';
                backgroundChild.style.width = '102%';
                backgroundChild.style.height = '98%';
            }, opacityRand);
            setTimeout(function () {
                child.style.opacity = '0.7';
                backgroundChild.style.width = '106%';
                backgroundChild.style.height = '94%';
            }, opacityRand * 2);
            setTimeout(function () {
                child.style.opacity = '0.6';
                backgroundChild.style.width = '102%';
                backgroundChild.style.height = '100%';
            }, opacityRand * 3);
            setTimeout(function () {
                child.style.opacity = '0.5';
                backgroundChild.style.width = '96%';
                backgroundChild.style.height = '103%';
            }, opacityRand * 5);
            setTimeout(function () {
                child.removeChild(backgroundChild);
                child.style.animationPlayState = 'paused';
                createSplash(child);
            }, 6000);

            // Remove those fools:
                setTimeout(function () {
                spongebobDiv.removeChild(child);
                }, 6250);
            
            // Splash 'em if they went away:
                child.addEventListener('mousedown', function () {
                    child.removeChild(backgroundChild);

                    if (soundStatus === true) {
                        if (durationTimer > 11) {
                            splashOne.play();
                        } else if (durationTimer > 10) {
                            splashTwo.play();
                        } else {
                            splashThree.play();
                        }
                    }

                    child.style.animationPlayState = 'paused';
                    createSplash(child);

                    setTimeout(function () {
                        spongebobDiv.removeChild(child);
                        cursorLight.style.backgroundColor = '';
                    }, 250);
                });

                child.addEventListener('touchstart', function () {
                    child.removeChild(backgroundChild);
                    setTimeout(function() {
                        follower.style.visibility = 'hidden';
                    }, 50);
                    
                    if (soundStatus === true) {
                        if (durationTimer > 11) {
                            splashOne.play();
                        } else if (durationTimer > 10) {
                            splashTwo.play();
                        } else {
                            splashThree.play();
                        }
                    }

                    child.style.animationPlayState = 'paused';
                    createSplash(child);

                    setTimeout(function () {
                        spongebobDiv.removeChild(child);
                        cursorLight.style.backgroundColor = '';
                        
                    }, 250);
                });

                child.addEventListener('mouseenter', function() {
                    cursorLight.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                });

                child.addEventListener('mouseleave', function() {
                    cursorLight.style.backgroundColor = '';
                });
        } 
    }



// Objects:

    // Jellyfishes:

        //Jellyfish slides array:

            var jellyfishAnim = ['0', '-100%', '-200%', '-300%', '-400%', '-500%', '-600%', '-700%', '-800%', '-900%', '-1000%', '-1100%'];


        // Jellyfish animation: 

            var jellyfishMove = function jellyfishMove(thisJellyfish) {
                thisJellyfish.style.backgroundPosition = '0';
                var multiplyer = 100 - Math.random() * 8;
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[1];
                }, multiplyer);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[2];
                }, multiplyer * 2);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[3];
                }, multiplyer * 3);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[4];
                }, multiplyer * 4);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[5];
                }, multiplyer * 5);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[6];
                }, multiplyer * 6);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[7];
                }, multiplyer * 7);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[8];
                }, multiplyer * 8);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[9];
                }, multiplyer * 9);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[10];
                }, multiplyer * 10);
                setTimeout(function () {
                    thisJellyfish.style.backgroundPosition = '' + jellyfishAnim[11];
                }, multiplyer * 11);
            };

        // Jellyfish spawn:
            var createJellyfish = function createJellyfish() {

                // Jellyfish div:
                var widthSizer = randomizer(7, 15);
                var duration = randomizer(7, 17);
                var bottomOffset = randomizer(40, 60);
                var child = document.createElement('div');
                child.id = 'jellyfish-' + jellyCounter;
                jellyCounter += 1;
                child.style.position = 'absolute';
                child.style.userSelect = 'none';
                child.style.pointerEvents = 'all';
                child.style.bottom = bottomOffset + 'vh';

                // Opacity based on size:
                if (widthSizer < 10 && widthSizer > 7) {
                    child.style.zIndex = '2';
                    child.style.opacity = '0.5';
                } else if (widthSizer < 12 && widthSizer >= 10) {
                    child.style.zIndex = '2';
                    child.style.opacity = '0.6';
                } else if (widthSizer < 14 && widthSizer >= 12) {
                    child.style.zIndex = '3';
                    child.style.opacity = '0.7';
                } else {
                    child.style.zIndex = '3';
                    child.style.opacity = '0.8';
                }

                // Jellyfish size:

                child.style.width = widthSizer + 'vh';
                child.style.height = widthSizer * 1.373 + 'vh';

                // Randomizing jellyfish move direction:
                if (Math.random() > .5) {
                    child.style.animationName = 'jellyfish-1';
                } else {
                    child.style.transform = 'scaleX(-1)';
                    child.style.animationName = 'jellyfish-2';
                }
                child.style.animationDuration = duration + 's';
                child.style.animationTimingFunction = 'linear';

                // Jellyfish animation itself:
                var jellyChild = document.createElement('div');
                jellyChild.className = 'jellyfish';
                document.body.appendChild(child);
                child.appendChild(jellyChild);

                var muvx = setInterval(function () {
                    jellyfishMove(jellyChild);
                    createBublazz(child);
                }, 1000);
                setTimeout(function () {
                    clearInterval(muvx);
                }, duration * 1000);
                setTimeout(function () {
                    document.body.removeChild(child);
                }, duration * 1000);
            };

                // Let's spawn some fauna:
                    var jellySpawner = setInterval(function () {
                        if (Math.random() > .4) {
                            createJellyfish();
                        }
                    }, 3430);

                // Jellyfish bubblazz:

var createBublazz = function createBublazz(element) {
    var bubblahzQuantity = randomizer(1, 6);
    var elementBox = element.getBoundingClientRect();
    var bubblahTop = elementBox.top;
    var bubblahWidth = elementBox.width;
    var bubblahHeight = elementBox.height;
    var bubblahLeft = elementBox.left;

    if (bubblahzQuantity > 2) {
        var child = document.createElement('div');
        child.style.position = 'absolute';
        child.style.zIndex = 3;
        child.style.opacity = '0.7';
        child.style.borderRadius = '50%';
        child.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        child.style.top = bubblahTop + bubblahHeight/2 + randomizer(1, 10) + 'px'
        child.style.left = bubblahLeft + bubblahWidth/2 + randomizer(1, 10)  + 'px'
        child.style.width = bubblahWidth/12 + 'px';
        child.style.height = bubblahWidth/12 + 'px';
        child.style.border = '2px solid rgba(255, 255, 255, 0.2)';
        child.style.animationName = 'bubblahz';
        child.style.animationDuration = randomizer(3, 5) + 's';
        document.body.appendChild(child);
        setTimeout(function() {
            document.body.removeChild(child);
        }, randomizer(1000, 2000));
    } ;
    if (bubblahzQuantity > 3) {
        var childTwo = document.createElement('div');
        childTwo.style.position = 'absolute';
        childTwo.style.zIndex = 3;
        childTwo.style.opacity = '0.7';
        childTwo.style.borderRadius = '50%';
        childTwo.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        childTwo.style.top = bubblahTop + bubblahHeight/2 + randomizer(20, 50) + 'px'
        childTwo.style.left = bubblahLeft + bubblahWidth/2 + randomizer(20, 50)  + 'px'
        childTwo.style.width = bubblahWidth/12 + 'px';
        childTwo.style.height = bubblahWidth/12 + 'px';
        childTwo.style.border = '2px solid rgba(255, 255, 255, 0.2)';
        childTwo.style.animationName = 'bubblahz';
        childTwo.style.animationDuration = randomizer(3, 5) + 's';
        document.body.appendChild(childTwo);
        setTimeout(function() {
            document.body.removeChild(childTwo);
        }, 1000);
    } ;
    if (bubblahzQuantity > 4) {
        var childThree = document.createElement('div');
        childThree.style.position = 'absolute';
        childThree.style.zIndex = 3;
        childThree.style.opacity = '0.7';
        childThree.style.borderRadius = '50%';
        childThree.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        childThree.style.top = bubblahTop + bubblahHeight/2 + randomizer(-20, 5) + 'px'
        childThree.style.left = bubblahLeft + bubblahWidth/2 + randomizer(-20, 2)  + 'px'
        childThree.style.width = bubblahWidth/12 + 'px';
        childThree.style.height = bubblahWidth/12 + 'px';
        childThree.style.border = '2px solid rgba(255, 255, 255, 0.2)';
        childThree.style.animationName = 'bubblahz';
        childThree.style.animationDuration = randomizer(3, 5) + 's';
        document.body.appendChild(childThree);
        setTimeout(function() {
            document.body.removeChild(childThree);
        }, randomizer(1000, 2000));
    } ;
}

    // Spongebob:
        
        // Animation of bubbling:
            
            // Bigass array of slides again:
                var spongebobArray = [
                    '0',
                    '-100%',
                    '-200%',
                    '-300%',
                    '-400%',
                    '-500%',
                    '-600%',
                    '-700%',
                    '-800%',
                    '-900%'
                ] ;

            // Setting Ugandian commando:
                spongebobDiv.style.backgroundPosition = spongebobArray[4];
            
            // Making single slide:
                var trigger = 0;
                var triggerTwo = 0;

                var spongebobSlideF = function() {
                    if (spongebobSlideNum < 9 && status === 'bubbling' && canBubble) {
                        spongebobDiv.style.backgroundPosition = spongebobArray[spongebobSlideNum];
                        spongebobSlideNum += 1;
                    } else if (spongebobSlideNum >= 9 && status === 'bubbling' && canBubble) {
                        clearInterval(trigger);
                        trigger = 0;
                        spongebobDiv.style.backgroundPosition = spongebobArray[spongebobSlideNum];
                    }
                }

                var spongebobSlideB = function() {
                    if (spongebobSlideNum > 4 && status === 'staying' && !canBubble) {
                        spongebobDiv.style.backgroundPosition = spongebobArray[spongebobSlideNum];
                        spongebobSlideNum -= 1;
                    } else if (spongebobSlideNum <= 4 && status === 'staying' && !canBubble) {
                        clearInterval(triggerTwo);
                        triggerTwo = 0;
                        spongebobDiv.style.backgroundPosition = spongebobArray[spongebobSlideNum];
                        canBubble = true;
                        canBlink = true;
                        blinkTrigger = setInterval(spongebobBlinking, 3900);
                    }
                }

            // Blinking function: 
                var spongebobBlinking = function() {
                    var duration = 60;
                    if (canBlink) {
                        spongebobDiv.style.backgroundPosition = spongebobArray[1];
                    }
                    setTimeout(function() {
                        if (canBlink) {
                            spongebobDiv.style.backgroundPosition = spongebobArray[2];
                        }
                    }, duration) ;
                    setTimeout(function() {
                        if (canBlink) {
                            spongebobDiv.style.backgroundPosition = spongebobArray[3];
                        }
                    }, duration*2) ;
                    setTimeout(function() {
                        if (canBlink) {
                            spongebobDiv.style.backgroundPosition = spongebobArray[2];
                        }
                    }, duration*3) ;
                    setTimeout(function() {
                        if (canBlink) {
                            spongebobDiv.style.backgroundPosition = spongebobArray[1];
                        }
                    }, duration*4) ;
                    setTimeout(function() {
                        if (canBlink) {
                            spongebobDiv.style.backgroundPosition = spongebobArray[4];
                        }
                    }, duration*5) ;
                }

                blinkTrigger = setInterval(spongebobBlinking, 3900);


    // Bubbling:

        // Bubbling animation:
            
            bubblingDiv.style.backgroundPosition = '-1200% 100%';

            // Array of bubbling slides:
                var bubblingArray = [
                    '0',
                    '-100%',
                    '-200%',
                    '-300%',
                    '-400%',
                    '-500%',
                    '-600%',
                    '-700%',
                    '-800%',
                    '-900%',
                    '-1000%',
                    '-1100%',
                    '-1200%'
                ]

            // Animation function:
                var bubblingF = function() {
                    if (bubblingSlideNum < 9 && status === 'bubbling' && canBubble) {
                        bubblingDiv.style.backgroundPosition = bubblingArray[bubblingSlideNum];
                        bubblingSlideNum += 1;
                        bubbleSizer += 1.8;
                        followerImage.style.backgroundPosition = cursorArray[cursorSlide];
                        cursorSlide +=1;
                    } else if (spongebobSlideNum >= 9) {
                        reload();
                        bubblingDiv.style.backgroundPosition = bubblingArray[12];
                        createSplash(bubblingDiv);  
                    }
                }

                
// Event Listeners:
var fullScreen = false;


var fullScreenFunc = function() {
    if (fullScreen) {
        fullScreen = false;
        document.exitFullscreen();
    } else {
        fullScreen = true;
        document.body.requestFullscreen();
    }
}

    // Desktop ver.
                
                if (mobileStatus === false) {
                    spongebobDummy.addEventListener('mousedown', function() {
                        shoot();
                        clickStatus = 'down';
                    });
                    spongebobDummy.addEventListener('mouseup', function() {
                        createBubble();
                        reload();
                        clickStatus = 'up';
                    });
                    spongebobDummy.addEventListener('mouseleave', function() {
                        cursorLight.style.backgroundColor = '';
                        createBubble();
                        reload();
                        followerImage.style.backgroundPosition = cursorArray[0];
                    });
                    spongebobDummy.addEventListener('mouseenter', function() {
                        cursorLight.style.backgroundColor = 'darkorange';
                    });
                }

                if (mobileStatus === false) {
                    aboutMe.addEventListener('mousedown', function() {
                        fullScreenFunc();
                    });
                    aboutMe.addEventListener('mouseenter', function() {
                        aboutMe.style.backgroundColor = 'khaki';
                        fullscreenBack.style.backgroundPosition = '-100% 100%';
                    });
                    aboutMe.addEventListener('mouseleave', function() {
                        aboutMe.style.backgroundColor = 'teal';
                        fullscreenBack.style.backgroundPosition = '0 100%';
                    });
                }

                if (mobileStatus === false) {
                    infoDummy.addEventListener('mouseenter', function() {
                        cursorLight.style.backgroundColor = 'lightseagreen';
                        infoSwitcher.style.color = 'teal';
                        infoSwitcher.style.backgroundColor = 'khaki';
                    });
                    infoDummy.addEventListener('mouseleave', function() {
                        cursorLight.style.backgroundColor = '';
                        infoSwitcher.style.color = 'khaki';
                        infoSwitcher.style.backgroundColor = 'teal';
                    });
                    infoDummy.addEventListener('mousedown', function() {
                        infoBody.style.visibility = 'visible';
                        document.body.style.animation = 'none';
                        cursorLight.style.backgroundColor = '';
                    });
                }

                if (mobileStatus === false) {
                    document.addEventListener('mouseup', function() {
                        createBubble();
                        reload();
                        whistla.pause();
                        whistla.currentTime = 0;
                        clickStatus = 'up';
                    });

                    document.addEventListener('mousedown', function() {
                        clickStatus = 'down';
                    });

                    document.addEventListener('contextmenu', function() {
                        createBubble();
                        reload();
    
                    });
                }

                if (mobileStatus === false) {
                    back.addEventListener('mousedown', function() {
                        infoBody.style.visibility = 'hidden';
                        document.body.style.animation = 'imgevento 6s linear infinite';
                    });
                }

                if (mobileStatus === false) {
                    toggleMusic.addEventListener('mousedown', switchAudio);
                    toggleSound.addEventListener('mousedown', switchSound);
                }

    // Mobile ver.
                if (mobileStatus === true) {
                    spongebobDummy.addEventListener('touchstart', function() {
                        touchStatus = 'touch';
                        cursorLight.style.backgroundColor = 'darkorange';
                        follower.style.visibility = 'visible';
                        shoot();
                    });
                    spongebobDummy.addEventListener('touchend', function() {
                        touchStatus = 'end';
                        follower.style.visibility = 'hidden';
                        cursorLight.style.backgroundColor = '';
                        createBubble();
                        reload(); 
                    });
                    spongebobDummy.addEventListener('touchcancel', function() {
                        touchStatus = 'end';
                        cursorLight.style.backgroundColor = '';
                        createBubble();
                        reload();
                        followerImage.style.backgroundPosition = cursorArray[0];
                    });
                }




                if (mobileStatus === true) {
                    aboutMe.addEventListener('touchstart', function() {
                        aboutMe.style.backgroundColor = 'khaki';
                        fullscreenBack.style.backgroundPosition = '-100% 100%';
                        setTimeout(function() {
                            aboutMe.style.backgroundColor = 'teal';
                            fullscreenBack.style.backgroundPosition = '0 100%';
                            setTimeout(function() {
                                fullScreenFunc();
                            }, 50);
                        }, 200);  
                    });
                }



                if (mobileStatus === true) {

                    document.addEventListener('touchstart', function() {
                        touchStatus = 'touch';
                    });

                    document.addEventListener('touchend', function() {
                        touchStatus = 'end';
                        cursorLight.style.backgroundColor = '';
                    });

                    document.addEventListener('touchcancel', function() {
                        createBubble();
                        reload();
                    });
                }



                if (mobileStatus === true) {
                    infoDummy.addEventListener('touchstart', function() {
                        cursorLight.style.backgroundColor = 'lightseagreen';
                        infoSwitcher.style.color = 'khaki';
                        infoSwitcher.style.backgroundColor = 'teal';
                        setTimeout(function() {
                            infoSwitcher.style.color = 'teal';
                            infoSwitcher.style.backgroundColor = 'khaki';
                        }, 200)
                        setTimeout(function() {
                            infoBody.style.visibility = 'visible';
                            document.body.style.animation = 'none';
                        }, 300)
                        
                    });
                    infoDummy.addEventListener('touchcancel', function() {
                        cursorLight.style.backgroundColor = '';
                        infoSwitcher.style.color = 'teal';
                        infoSwitcher.style.backgroundColor = 'khaki';
                    });
                }

                if (mobileStatus === true) {
                    back.addEventListener('touchstart', function() {
                        back.style.BackgroundColor = 'teal';
                        back.style.color = 'khaki'
                        setTimeout(function() {
                            back.style.color = 'teal';
                            back.style.BackgroundColor = 'khaki';
                            setTimeout(function() {
                                infoBody.style.visibility = 'hidden';
                                document.body.style.animation = 'imgevento 6s linear infinite';
                            }, 100);
                        }, 300);
                        
                    });
                }

                if (mobileStatus === true) {
                    toggleMusic.addEventListener('touchstart', switchAudio);
                    toggleSound.addEventListener('touchstart', switchSound);
                }




                
