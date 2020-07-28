const Animation = () => {

    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    
	let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
	let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
	let enterNewScene = false; // 새로운 scene이 시작된 순간 true
	let acc = 0.2;
	let delayedYOffset = 0;
	let rafId;
    let rafState;
    let offsetOpacity = 0.85;

	const sceneInfo = [
		{
			// 3
			type: 'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-1'),
                canvas: document.querySelector('.image-blend-canvas'),
                background: document.querySelector('.background'),
				context: document.querySelector('.image-blend-canvas').getContext('2d'),
				imagesPath: [
					'',
					''
				],
				images: []
			},
			values: {
				rect1X: [ 0, 0, { start: 0, end: 1 } ],
				rect2X: [ 0, 0, { start: 0, end: 1 } ],
				blendHeight: [ 0, 0, { start: 0, end: 1 } ],
				canvas_scale: [ 2, 0, { start: 0, end: 1 } ],

				rectStartY: 0
            }
        }
	];

	function setCanvasImages() {
		let imgElem;
		for (let i = 0; i < sceneInfo[0].objs.imagesPath.length; i++) {
			imgElem = new Image();
            imgElem.src = sceneInfo[0].objs.imagesPath[i];
            sceneInfo[0].objs.images.push(imgElem);
		}
	}


	function setLayout() {
		// 각 스크롤 섹션의 높이 세팅
   
        for (let i = 0; i < sceneInfo.length; i++) {
			if (sceneInfo[i].type === 'sticky') {
				sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
			} else if (sceneInfo[i].type === 'normal')  {
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
			}
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
		}
		yOffset = window.pageYOffset;



		let totalScrollHeight = 0;
			totalScrollHeight += sceneInfo[0].scrollHeight;
		
		document.body.setAttribute('id', `show-scene-${currentScene}`);

        const heightRatio = window.innerHeight / 1080;
        
        //sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;


	}


	function calcValues(values, currentYOffset) {
		let rv;
		// 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		const scrollRatio = currentYOffset / scrollHeight;
		if (values.length === 3) {
			// start ~ end 사이에 애니메이션 실행
			const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            
            //console.log(partScrollEnd);
			const partScrollHeight = partScrollEnd - partScrollStart;

			if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
				rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
			} else if (currentYOffset < partScrollStart) {
				rv = values[0];
			} else if (currentYOffset > partScrollEnd) {
				rv = values[1];
			}
		} else {
			rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
		return rv;
	}



	function playAnimation() {
		const objs = sceneInfo[currentScene].objs;
		const values = sceneInfo[currentScene].values;
		const currentYOffset = yOffset - prevScrollHeight;
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
        
        let changeOpacity = document.querySelector('.animated_filter');
        console.log(changeOpacity.style.opacity = offsetOpacity - currentYOffset/5000);
		switch (currentScene) {
		

			case 0:
				 console.log('3 play');
				// 가로/세로 모두 꽉 차게 하기 위해 여기서 세팅(계산 필요)
				const widthRatio = window.innerWidth / objs.canvas.width;
				const heightRatio = window.innerHeight / objs.canvas.height;
				let canvasScaleRatio;

				if (widthRatio <= heightRatio) {
					// 캔버스보다 브라우저 창이 홀쭉한 경우
					canvasScaleRatio = heightRatio;
				} else {
					// 캔버스보다 브라우저 창이 납작한 경우
					canvasScaleRatio = widthRatio;
				}


                console.log(` total heigth: ${scrollHeight}`)
                
                if (yOffset > scrollHeight - window.innerHeight){
                    objs.background.classList.remove('sticky');
                }
                else {
                    objs.background.classList.add('sticky');

                }





				objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
				objs.context.fillStyle = 'white';
				objs.context.drawImage(objs.images[0], 0, 0);

				// 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
				const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
				const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

				if (!values.rectStartY) {
					// values.rectStartY = objs.canvas.getBoundingClientRect().top;
					values.rectStartY = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
					values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
					values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
					values.rect1X[2].end = values.rectStartY / scrollHeight;
					values.rect2X[2].end = values.rectStartY / scrollHeight;
				}

				const whiteRectWidth = recalculatedInnerWidth * 0.15;
				values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
				values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
				values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
				values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

		
		
					// 이미지 블렌드
					// values.blendHeight: [ 0, 0, { start: 0, end: 0 } ]
					values.blendHeight[0] = 0;
					values.blendHeight[1] = objs.canvas.height;
					values.blendHeight[2].start = values.rect1X[2].end;
					values.blendHeight[2].end = values.blendHeight[2].start + 0.2;
					const blendHeight = calcValues(values.blendHeight, currentYOffset);

					objs.context.drawImage(objs.images[1],
						0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight,
						0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight
					);

					objs.canvas.classList.add('sticky');
					objs.canvas.style.top = `${-(objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2}px`;

					if (scrollRatio > values.blendHeight[2].end) {
						values.canvas_scale[0] = canvasScaleRatio;
						values.canvas_scale[1] = document.body.offsetWidth / (1.5 * objs.canvas.width);
						values.canvas_scale[2].start = values.blendHeight[2].end;
						values.canvas_scale[2].end = values.canvas_scale[2].start + 0.2;

						objs.canvas.style.transform = `scale(${calcValues(values.canvas_scale, currentYOffset)})`;
						objs.canvas.style.marginTop = 0;
					}

					if (scrollRatio > values.canvas_scale[2].end
						&& values.canvas_scale[2].end > 0) {
						objs.canvas.classList.remove('sticky');
						objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;

                    }
              
				

				break;
		}
	}

	function scrollLoop() {
		enterNewScene = false;
		prevScrollHeight = 0;
        
		for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
            
		}
        if (delayedYOffset < prevScrollHeight) {
			enterNewScene = true;
			if (currentScene === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
			currentScene--;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
        }
        
        if (currentScene >= 1) return;
        
		if (delayedYOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
			enterNewScene = true;
			currentScene++;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}


	

		if (enterNewScene) return;

		playAnimation();
	}

	function loop() {
		delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc;

	
        // 추가 코드
        // home이나 end를 이용해 페이지 끝으로 고속 이동하면 body id가 제대로 인식 안되는 경우를 해결
        // home 키로 페이지 맨 위로 갈 경우: scrollLoop와 첫 scene의 기본 캔버스 그리기 수행
        if (delayedYOffset < 1) {
            scrollLoop();
        
        }
     
		rafId = requestAnimationFrame(loop);

		if (Math.abs(yOffset - delayedYOffset) < 1) {
			cancelAnimationFrame(rafId);
			rafState = false;
		}
	}

	window.addEventListener('load', () => {
        document.body.classList.remove('before-load');
        setLayout();

        let tempYOffset = yOffset;
        let tempScrollCount = 0;
        if (tempYOffset > 0) {
            let siId = setInterval(() => {
                window.scrollTo(0, tempYOffset);
                tempYOffset += 5;

                if (tempScrollCount > 20) {
                    clearInterval(siId);
                }
                tempScrollCount++;
            }, 20);
        }

        window.addEventListener('scroll', () => {
            console.log(`yOffset: ${yOffset}`);
            console.log(`prev : ${prevScrollHeight}`);
            console.log(`pwindow: ${window.innerHeight}`);

            yOffset = window.pageYOffset;
            scrollLoop();

  			if (!rafState) {
  				rafId = requestAnimationFrame(loop);
  				rafState = true;
  			}
  		});

  		window.addEventListener('resize', () => {
  			if (window.innerWidth > 900) {
  				setLayout();
  				sceneInfo[0].values.rectStartY = 0;
  			}

            if (currentScene === 0) {
                // 추가 코드
                // Scene 3의 요소들은 위치나 크기가 미리 정해지지 않고
                // 현재 창 사이즈나 스크롤 위치에 따라 가변적으로 변하기 때문에
                // 리사이즈에 일일이 대응시키기가 까다롭습니다.
                // Scene 3에 진입 시점에 요소들의 위치와 크기가 결정이 되는 특징을 이용해서
                // 현재 Scene이 3일 경우에는 좀 위로 스크롤이 되도록 해서
                // Scene 3의 시작 지점 이전으로 돌리는 식으로 요소들의 레이아웃이 깨지는 현상을 방지해 줍니다.
                // 시작 지점 이전으로 스크롤을 이동 시키는 동작은
                // 바로 위 518 라인의 자동 스크롤 코드를 그대로 활용했습니다.
                let tempYOffset = yOffset;
                let tempScrollCount = 0;
                if (tempYOffset > 0) {
                    let siId = setInterval(() => {
                        window.scrollTo(0, tempYOffset);
                        tempYOffset -= 50;

                        if (tempScrollCount > 20) {
                            clearInterval(siId);
                        }
                        tempScrollCount++;
                    }, 20);
                }
            }
  		});

  		window.addEventListener('orientationchange', () => {
  			setTimeout(setLayout, 500);
  		});

  	

	});

	setCanvasImages();

};

export default Animation;